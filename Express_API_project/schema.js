const Joi=require('joi');

const schemas ={
    posts: Joi.object().keys({
        id:Joi.number().required(),
        username:Joi.string().required(),
        title: Joi.string()
    }),
    putidvalid: Joi.object().keys({
        id:Joi.number().required()
    })
}
module.exports=schemas;

