var waste=require('../datasets/wastes.js');
module.exports.addpost=function(req,res)
{
    var newaste=new waste(req.body);
    newaste.save();
    waste.find({})
        .sort({date:-1}).exec(function(err,wastedata)
              {
        if(err)
            {
                console.log("error in adding post");
                res.json({status:500});
                
            }
       
        else {
            console.log(wastedata);
        res.json(wastedata);
        }
    })
}
module.exports.getpost=function(req,res)
{
  
    waste.find({})
        .sort({date:-1}).exec(function(err,wastedata)
              {
        if(err)
            {
                console.log("error in getting post");
                res.json({status:500});
                
            }
       
        else {
           
        res.json(wastedata);
        }
    })
}