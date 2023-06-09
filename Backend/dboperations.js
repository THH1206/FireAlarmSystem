var config = require("./dbconfig");
const sql = require("mssql");

async function getSensor() {
  try {
    let pool = await sql.connect(config);
    let FireWarning = await pool.request().query("SELECT * from SensorData");
    return FireWarning.recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function selectSensor(companyID) {
  try {
    let pool = await sql.connect(config);
    let FireWarning = await pool
      .request()
      .input("input_parameter", sql.Int, companyID)
      .query("SELECT * from SensorData where companyID = @input_parameter");
    return FireWarning.recordsets;
  } catch (error) {
    console.log(error);
  }
}
async function addSensor(listSensor) {
  try {
    let pool = await sql.connect(config);
    let InsertSensor = await pool
      .request()
      //.input('companyID', sql.Int, listSensor.companyID)
      .input("companyName", sql.NVarChar, listSensor.companyName)
      .input("time", sql.DateTime, listSensor.time)
      //.input("isFire", sql.NVarChar, listSensor.isFire)
      .input("status", sql.NVarChar, listSensor.status)
      .execute("InsertSensor");
    return InsertSensor.recordsets;
  } catch (error) {
    console.log(error);
  }
}
module.exports = {
  getSensor: getSensor,
  selectSensor: selectSensor,
  addSensor: addSensor,
};
