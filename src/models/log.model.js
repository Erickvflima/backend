const fileconfig = require('../config');
var sql2 = require("mssql");
const { func } = require('joi');

function Log(evento, mensagem, status, callback) {
     
    var connlog = new sql2.Connection(fileconfig.config);
        connlog.connect().then(() => {
        var reqlog = new sql2.Request(connlog);         
        reqlog.query(`INSERT INTO API_Vileve_Vida_Portal.dbo.Logs (DATA, EVENTO, MENSAGEM, STATUS) VALUES (GETDATE(), '${evento}', '${mensagem}', '${status}') SELECT top 1 ID FROM Logs order by ID desc`, function (err, recordset){
        
        callback(recordset,true)

        });    
        connlog.close();
    });
}  
 
module.exports = Log;