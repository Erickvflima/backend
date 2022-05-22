const Joi = require('joi');
const Log = require('../models/log.model');

process.on('unhandledRejection', (reason, promise) => {
  console.log(reason)
})

const validationMiddleware = (reqtype, arrayobject, callback) => {

  let i = 0
  let e = 0
  let errors = []

  reqtype === 'POST'? userSchema = userSchemapost : userSchema = userSchemaput

  arrayobject.map((v, index) => {
    const { error } = userSchema.validate(v)
    const valid = error == null;
    if (error != undefined) {
      const { details } = error;
      const message = details.map(i => i.message).join(',');
      errors.push({ error: message, cpf: v.CPF, index: index });
      e++
    }
    i++
    if (arrayobject.length === i) {
      e === 0 ? callback(null, true) : callback(errors, false)
    }
  })
}
 
 
const userSchemapost = Joi.object().keys({
  CODIGO: Joi.string(),
  IDESPECIAL: Joi.string(),
  ID_PROSITE: Joi.number().allow(null, ''),
  MESEOCORRE: Joi.string().min(10).max(10),
  MESIOCORRE: Joi.string().max(10).min(10),
  TIPOCANC: Joi.number().allow(null, ''),
  NOMESEG: Joi.string().max(150),
  CPF: Joi.string().max(11).required(),
  PARCELAS: Joi.number(),
  BLOQUEIO: Joi.string().max(1).required(),
  STATUS: Joi.number().required(),
  OBSERVACAO: Joi.string().max(50)
})

const userSchemaput = Joi.object().keys({
  CODIGO: Joi.string(),
  IDESPECIAL: Joi.string(),
  ID_PROSITE: Joi.number().allow(null, ''),
  MESEOCORRE: Joi.string().min(10).max(10),
  MESIOCORRE: Joi.string().max(10).min(10),
  TIPOCANC: Joi.number().allow(null, ''),
  NOMESEG: Joi.string().max(150),
  PARCELAS: Joi.number(),
  BLOQUEIO: Joi.string().max(1).required(),
  STATUS: Joi.number().required(),
  OBSERVACAO: Joi.string().max(50)
})

module.exports = validationMiddleware;