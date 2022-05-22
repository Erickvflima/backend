const express = require('express');
const router = express.Router();
const { Insert, Update } = require('../models/blacklist.model');
const Log = require('../models/log.model');

process.on('unhandledRejection', (reason, promise) => {
  res.status(400).json({ message: reason });
})

process.on('uncaughtException', err => {
  console.log(`Uncaught Exception: ${err.message}`)
})

// Creating of blacklist
router.post('/', (req, res) => {
  let blacklist = req.body;

  // console.log(blacklist)
  Insert(blacklist, (err, result) => {
    if (result) {

      Log('Insert', result, 'sucess', (v,status)=>{
        if(status){
          res.status(201).json({ message: "success", lote: v });
        }
      })      

    } else {

      Log('Insert', JSON.stringify(err), 'error', (v,status)=>{
        if(status){
          res.status(400).json({ message: err, lote: v });
        }
      })
    }
  })
})


// Updating of blacklist
router.put('/:cpf', async (req, res) => {
  let blacklist = req.body;

   
  Update(blacklist, req.params.cpf, (err, result) => {
    if (result) {

      Log('Update', result, 'sucess', (v,status)=>{
        if(status){
          res.status(200).json({ message: "success", lote: v });
        }
      })  

    } else {

      Log('Update', JSON.stringify(err), 'error', (v,status)=>{
        if(status){
          res.status(400).json({ message: err, lote: v });
        }
      })
    }
  })
})

module.exports = router;