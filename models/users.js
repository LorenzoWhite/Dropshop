const mongoose = require('mongoose');

//User Model
var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
 id: String,
 name: {
   type: String,
   index: true
 },
 email: {
   type: String,
   trim: true,
   index: true,
   lowercase: true,
   unique: true
 },
 mobile: {
   type: String,
   trim: true,
   index: true,
   unique: true,
 },
 profilePic: String,
 hash: { type: String },
 address: String,
 gender: String,
 dob: Date,
 signupType: { type: String, enum: ['facebook', 'google'] },
 deviceType: String,
 createdTime: Date,
 updatedTime: Date,
 googleToken: String,
 facebookToken: String,
 fcmToken: String,
 facebookLink: String,
 facebookId: String,
 memberType: String,
 deviceId: String,
 preferences: [{}],
 loginData: [{}],
 token:String,
 isVerified: Boolean,
 isMobileVerified: Boolean,
 isEmailVerified: Boolean,
 lastSeen: Date
});

// 2D sphere index for user location

userSchema.index({ location: '2dsphere' });

mongoose.model('User', userSchema);

module.exports = mongoose.model('User');
