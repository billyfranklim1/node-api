const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var validateEmail = function(email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email)
};

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, 'O nome é obrigatório'],
    minlength: [3, 'o campo nome deve ter no mínimo 3 caracteres!'],
    maxlength: [50, 'o campo nome deve ter no máximo 50 caracteres!'],
  },
  email: {
    type: String,
    required: [true, 'O email é obrigatório!'],
    unique: [true, 'O email já está sendo utilizado!'],
    lowercase: true,
    trim: true,
    validate: [validateEmail, 'O email não é válido!'],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'O email não é válido!'],
  },
  password: {
    type: String,
    required: [true, 'A senha é obrigatória!'],
    minlength: [6, 'o campo senha deve ter no mínimo 6 caracteres!'],
    select: false
  },
  last_access: {
    type: Date,
  },
  token_confirmation_email: {
    type: String,
  },
});


const User = mongoose.model('User', UserSchema);
module.exports = User;