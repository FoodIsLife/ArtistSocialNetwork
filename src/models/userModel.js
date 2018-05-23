import mongoose from 'mongoose';

var bcrypt   = require('bcrypt-nodejs');

const Schema = mongoose.Schema;

// define the schema for our user model
export const UserSchema = new Schema({

    firstName: {
        type: String,
        required: 'Enter a first Name'
    },
    lastName: {
        type: String,
        required: 'Enter a last Name'
    },
    email: { 
        type: String,
        required: 'Enter a valid Email'
    },
    password: String,
    confirmPassword: String,
    
});

// methods 
// generating a hash
UserSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
UserSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

// create the model for users and expose it to our app
//module.exports = mongoose.model('User', userSchema);
