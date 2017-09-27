const mongoose = require("mongoose");

const addressDB =
  process.env.MONGODB ||
  "mongodb://victorh:victorh@ds149874.mlab.com:49874/evercheck-test-8";
const port = process.env.PORT || 3000;

/* to avoid the warning
  DeprecationWarning: 'open()' is deprecated in mongoose >= 4.11.0.
  I use the connect { useMongoClient }*/
mongoose.Promise = global.Promise;
mongoose.connect(addressDB, { useMongoClient: true });

module.exports = {
  mongoose,
  port
};
