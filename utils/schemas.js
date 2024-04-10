const Joi = require('joi');

module.exports.postSchema = Joi.object({
    post: Joi.object({
        title: Joi.string().required(),
        image: Joi.string().required(),
        author: Joi.string().required(),
        body: Joi.string().required(),
    }).required()
});
