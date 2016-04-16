   var express=require('express'),
      app=express(),
      mongo=require('mongoose'),
      bodyparser=require('body-parser'),
      multipart=require('connect-multiparty');
    var multipartmiddleware=multipart();
      app.use(bodyparser());
      app.use(multipart());
   var profilecontroller=require('./server/controllers/profile-controller.js'); 
var wastecontroller=require('./server/controllers/waste-controller.js');
var userscontroller=require('./server/controllers/users-controller.js');

   var authenticationcontroller=require('./server/controllers/authentication-controller.js');
   mongo.connect('mongodb://127.0.0.1/time-waste', function(err){
      if(err)
         throw err;
   });

      app.get('/',function(req,res)
      {
      	res.sendfile('./index.html');
      })
  
app.use('/index',express.static(__dirname+"/index.html"));
app.use('/uploads',express.static(__dirname+"/uploads"));
app.use('/app',express.static(__dirname+"/app"));
app.use('/node_modules',express.static(__dirname+"/node_modules"));
      //for authentication
      app.post('/api/user/signup',authenticationcontroller.signup);
      app.post('/api/user/login',authenticationcontroller.login);
   //for profile editing
   app.post('/api/profile/editphoto',multipartmiddleware,profilecontroller.updatephoto);
   app.post('/api/profile/updateusername',profilecontroller.updateusername);
   app.post('/api/profile/updateuserbio',profilecontroller.updateuserbio);
   //follow
   app.get('/api/follow/getusers',userscontroller.getusers);
   app.post('/api/follow/followusers',userscontroller.followusers);
//waste
app.post('/api/waste/post',wastecontroller.addpost);
app.get('/api/waste/get',wastecontroller.getpost);
      app.listen(3000,function(req,res)
      {
      	console.log("hi buddy");
      })
