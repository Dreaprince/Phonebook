const Joi = require('joi');
const mongoose = require('mongoose');

const phonebookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  email: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 50
  }
 

}, {
    timestamps: true
}
);

const Phonebook = mongoose.model('Phonebook', phonebookSchema);

function validatePhonebook(phonebook) {
  const schema = Joi.object({
    name: Joi.string().min(5).max(50).required(),
    email: Joi.string().min(8).max(50).email().required(),
  });

  return schema.validate(phonebook);
}

exports.phonebookSchema = phonebookSchema;
exports.Phonebook = Phonebook; 
exports.validate = validatePhonebook;

