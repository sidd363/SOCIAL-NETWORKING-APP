var mongoose=require('mongoose');
module.exports=mongoose.model('users',{
	email:String,
	password:String,
    image:String,
    username:String , 
    userbio:String,
     following:[{userid:String}],
     followers:[{userid:String}] 
});