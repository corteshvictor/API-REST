const app = require("./app");
const mongoConnect = require("./db/mongoose");

app.listen(mongoConnect.port, () => {
  console.log(`Started on port ${mongoConnect.port}`);
});
