const express = require("express");
const router = express.Router();
require("dotenv").config();
const autentication = require("../models/auth.model");

router.get("/", (req, res) => {
  const personDataList = [
    {
      name: "Erick Lima",
      email: "as@gmail.com",
      nascimento: "04/02/1995",
      telefone: "(31)98467-5300",
    },
    {
      name: "Marcela Lima",
      email: "Marcel@gmail.com",
      nascimento: "04/02/1999",
      telefone: "(31)98467-1212",
    },
  ];
  res.status(200).json(personDataList);

  // autentication(req.body.username, req.body.password, (err, result) => {
  //   if (result) {
  //     Log('Autentication', result, 'sucess', (v,status)=>{
  //       if(status){
  //         var token = jwt.sign({ data: req.body.username }, 'stringsecret', { expiresIn: process.env.EXPIRE });
  //         res.status(200).json({message:'success', token: token});
  //       }
  //     })

  //   } else {
  //     Log('Autentication', err, 'fail', (v,status)=>{
  //       if(status){
  //         res.status(401).json({ message: "fail", lote: v });
  //       }
  //     })
  //   }
  // })
});
module.exports = router;
