#include <Adafruit_Sensor.h>
#include <Arduino.h>
#include <ESP8266WiFi.h>
#include <ESP8266WiFiMulti.h>
#include <ESP8266HTTPClient.h>
#include <WiFiClient.h>
#include <ArduinoJson.h>
const char *SSID = "SAMSUNG";
const char *PASSWORD = "redminote11";
int Sensor = A0;
int Buzzer = D5;
int Led1 = D6;
int Led2 = D7;
String status = "NORMAL";
const char *URL = "http://192.168.1.185:8090/api/addSensor";
ESP8266WiFiMulti WiFiMulti;
WiFiClient client;
HTTPClient http;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  pinMode(Sensor, INPUT);
  pinMode(Buzzer, OUTPUT);
  pinMode(Led1, OUTPUT);
  pinMode(Led2, OUTPUT);
  for (uint8_t t = 4; t > 0; t--) {
    Serial.printf("[SETUP] WAIT %d...\n", t);
    Serial.flush();
  }
  WiFi.mode(WIFI_STA);
  WiFiMulti.addAP(SSID, PASSWORD);
  // wait for WiFi connection
  while (WiFiMulti.run() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("");
  Serial.println("WiFi connected");
  Serial.println("IP address: ");
  Serial.println(WiFi.localIP());
}



void loop() {
  Serial.println(analogRead(Sensor));
  if (analogRead(Sensor) <= 500) {
    digitalWrite(Buzzer, HIGH);
    digitalWrite(Led1, HIGH);
    digitalWrite(Led2, HIGH);
    delay(1000);
    status = "WARNING - RUN";
  } else {
    digitalWrite(Buzzer, LOW);
    digitalWrite(Led1, LOW);
    digitalWrite(Led2, LOW);
    status = "SAFE  ";
  }
  postJsonData();
  delay(5000);
}

void postJsonData() {
  //Serial.print("connecting to ");
  if ((WiFiMulti.run() == WL_CONNECTED)) {
    //Serial.print("[HTTP] begin...\n");
    if (http.begin(client, URL)) {  // HTTP
      //Serial.print("[HTTP] POST...\n");
      const int capacity = JSON_OBJECT_SIZE(4);
      StaticJsonDocument<capacity> doc;
      doc["companyName"] = "E";
      doc["time"] = "2021-5-25 10:00:12";
      doc["status"] = status;

      char output[256];
      serializeJson(doc, output);
      http.addHeader("Content-Type", "application/json");
      int httpCode = http.POST(output);
      Serial.println(httpCode);  //Print HTTP return code
                                 // file found at server
      if (httpCode == HTTP_CODE_OK || httpCode == HTTP_CODE_MOVED_PERMANENTLY) {
        String payload = http.getString();
        Serial.println(payload);
        char input[256];
        payload.toCharArray(input, 128);
        //parseJson
        Serial.println("Begin parse json data ...");
        DynamicJsonDocument docResponse(2048);
        DeserializationError err = deserializeJson(docResponse, payload);
        if (err) {
          Serial.print(F("deserializeJson() failed with code "));
          Serial.println(err.c_str());
        }
      } else {
        //Serial.printf("[HTTP] POST success, error: %s\n", http.errorToString(httpCode).c_str());
      }
      http.end();
    }
  }
}