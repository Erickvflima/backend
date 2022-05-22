const fileconfig = require('../config');
var sql = require("mssql");

function autentication(user, passwd, callback) {

    sql.connect(fileconfig.config, async function (err) {

        if (err) {
            console.log(err)
        } else {

            var request = new sql.Request();

            await request.query(`SELECT * FROM login where login='${user}'`, function (err, recordset) {
                try {
                    if (recordset.length == 0) {
                        callback('user invalid', false)
                    } else {
                        if (recordset[0].senha == passwd) {
                            callback(null, true)
                        } else {
                            callback('user or password incorrect', false)
                        }
                    }
                }
                catch (err) {
                    console.error(err)
                    sql.close();
                }
            });
        }
    });
}

module.exports = autentication;