var authen=require('../datasets/users.js');
module.exports.signup=function(req,res)
{
	var newuser=new authen(req.body);
	newuser.save(function(err)
	{
		if(!err)
			console.log("user successfully signed up");
		
	})
	res.json(req.body);

}
module.exports.login=function(req,res)
{
	console.log(req.body);
    console.log("in login");
authen.find(req.body,function(err,results)
	{
		if(err)
			console.log("error in login");
		if(results && results.length===1)
			
			{
				console.log("login found");
				var userdata=results[0];
                console.log(userdata);
				res.json({email:req.body.email,
					      _id:userdata._id,
                         username:userdata.username,
                         userimage:userdata.image,
                         following:userdata.following,
                         followers:userdata.followers
                         });
			}
	})
}