const initOptions = {/* initialization options */};
const pgp = require('pg-promise')(initOptions);
var db = pgp(`postgres://postgres:${process.env.USER_PASSWORD}@localhost:5432/bar`)

 module.exports = db