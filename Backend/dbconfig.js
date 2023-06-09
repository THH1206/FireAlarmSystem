const config = {
  user: "sa",
  password: "password",
  server: "DESKTOP-51Q9S62",
  database: "FireWarning",
  options: {
    encrypt: true,
    trustServerCertificate: true,
    enableArithAbort: true,
    trustedConnection: true,
    instancename: "SQLEXPRESS",
  },
  port: 8080,
};
module.exports = config;
