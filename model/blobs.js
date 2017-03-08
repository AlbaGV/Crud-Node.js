var mongoose = require('mongoose');  
var blobSchema = new mongoose.Schema({  
  name: String,
  
  dob: { type: Date, default: Date.now }
  
});
mongoose.model('Blob', blobSchema);