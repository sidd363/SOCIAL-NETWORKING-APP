	var USER=require('../datasets/users.js');
	var fs=require('fs-extra');
	var path=require('path');
	module.exports.updatephoto=function(req,res)
	{
		var filename=req.files.file;
		var id=req.body.userid;
		console.log(filename);
		var temppath=filename.path;
	
		var targetpath=path.join(__dirname,"../../uploads/"+id+filename.name);
        console.log(targetpath);
        
        var savepath="/uploads/"+id+filename.name;
        console.log(savepath);
		fs.rename(temppath,targetpath,function(err)
		{
			if(err)
			{
				console.log("not moved");
			}
			else 
			{
                USER.findById(id,function(err,userData)
                             {
                    var user=userData;
                    user.image=savepath;
                    user.save(function(err)
                    {
                      if(err)
                          {
                          console.log("failed to save to mongo");
                              res.json({status:500});
                          }
                        else 
                            {
                            console.log("saved to mongo successfully");
                                  res.json({status:200});
                            }
                    })
                })
                
			}
		})

	}
	module.exports.updateusername=function(req,res)
	{
		var userid=req.body.userid;
		var username=req.body.username;

		USER.findById(userid,function(err,userdata)
		{
			var userdbdata=userdata;
			userdbdata.username=username;
			userdbdata.save(function(err)
			{
				if(err)
				{
					console.log("fail");
					res.json({status:500});
				}
				else
				{
					console.log("successfully saved to db");
					res.json({status:200});
				}
			})
		})
	}

module.exports.updateuserbio=function(req,res)
	{
		var userid=req.body.userid;
		var userbio=req.body.userbio;

		USER.findById(userid,function(err,userdata)
		{
			var userdbdata=userdata;
			userdbdata.userbio=userbio;
			userdbdata.save(function(err)
			{
				if(err)
				{
					console.log("fail");
					res.json({status:500});
				}
				else
				{
					console.log("successfully saved to db");
					res.json({status:200});
				}
			})
		})
	}
