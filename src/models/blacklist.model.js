const fileconfig = require('../config');
var sql = require("mssql");
// const Log = require('../models/log.model');
const validationMiddleware = require("../models/validate.model");

process.on('unhandledRejection', (reason, promise) => {
    console.log(reason)
})

function Insert(blacklist, callback) {

    sql.connect(fileconfig.config, function (err) {
        if (err) {
            callback(err, false)
        } else {
            var request = new sql.Request();
            let i = 0
            let j = 0
            let e = 0
            let errors = []

            validationMiddleware('POST', blacklist, (err, result) => {

                if (result) {               
                    InsertData(blacklist)
                    i = blacklist.length
                } else {
                    err.map((v) => {
                        blacklist.pop(v.index)
                        errors.push(v);
                        i++
                        e++
                        if (err.length === i) { 
                            blacklist.length === 0 ? callback(errors, false) : InsertData(blacklist)                             
                        }
                    })


                }

            })

            function InsertData(b) {

                b.forEach(async (item, index) => {
                    let querysql = `INSERT INTO Blacklist
                (DATA
                ,CODIGO
                ,IDESPECIAL
                ,ID_PROSITE
                ,MESEOCORRE
                ,MESIOCORRE
                ,TIPOCANC
                ,NOMESEG
                ,CPF
                ,PARCELAS
                ,BLOQUEIO
                ,STATUS
                ,OBSERVACAO) VALUES (GETDATE(), ${item.CODIGO}, '${item.IDESPECIAL}', ${item.ID_PROSITE}, '${item.MESEOCORRE}', '${item.MESIOCORRE}', ${item.TIPOCANC}, '${item.NOMESEG}', '${item.CPF}', '${item.PARCELAS}','${item.BLOQUEIO}','${item.STATUS}','${item.OBSERVACAO}')`

                    await request.query(querysql, (err, recordset) => {
                        if (err) {
                            errors.push({ error: err, cpf: item.CPF, index });
                            console.log("Erro de inserção do banco" + JSON.stringify(errors))
                            e++
                        };

                        j++;
                        if (j == b.length) { 
                            sql.close();
                            EndInsert();
                        }
                    });
                })
            }
            function EndInsert() {
                e === 0 ? callback(null, true) : callback(errors, false)
            }


        }
    });

}


function Update(blacklist, cpf, callback) {

    
    sql.connect(fileconfig.config, function (err) {
        if (err) {
            console.log(err)
        } else {
            let e = 0
            let errors = []
            validationMiddleware('PUT',[blacklist], (err, result) => {
                if (result) {
                    UpdateData(blacklist)
                } else {
                    callback(err, false)     
                }
            })

            function UpdateData (blacklist) {

                var request = new sql.Request();
                let querysql = `
                            UPDATE Blacklist
                            SET DATA = GETDATE()
                                  ,CODIGO = ${blacklist.CODIGO}                                  
                                  ,IDESPECIAL = '${blacklist.IDESPECIAL}'
                                  ,ID_PROSITE = ${blacklist.ID_PROSITE}
                                  ,MESEOCORRE = '${blacklist.MESEOCORRE}'
                                  ,MESIOCORRE = '${blacklist.MESIOCORRE}'
                                  ,TIPOCANC = ${blacklist.TIPOCANC}
                                  ,NOMESEG = '${blacklist.NOMESEG}'
                                  ,PARCELAS = '${blacklist.PARCELAS}'
                                  ,BLOQUEIO = '${blacklist.BLOQUEIO}'
                                  ,STATUS = '${blacklist.STATUS}'
                                  ,OBSERVACAO = '${blacklist.OBSERVACAO}'
                            WHERE CPF = '${cpf}'`

                request.query(querysql, function (err, recordset) {
                    if (err) {
                        errors.push({ error: err, cpf: blacklist.CPF, index: 0 });
                        sql.close();
                        callback(errors, false)
                    } else {
                        sql.close();
                        callback(null, true)
                    }
                });

            }


        }
    });

}

module.exports = { Insert, Update };