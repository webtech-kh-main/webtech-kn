import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique:true },
  Password: { type: String, required: true },
  photoURL: { type: String },
  phoneNumber: { type: String },
  emailVerified: { type: Boolean, default: false },
});

export default mongoose.models.User || mongoose.model('User', UserSchema);
