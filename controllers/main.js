const jwt=require('jsonwebtoken');

const {BadRequestError}=require('../error/');   

const login=async(req,res)=>{
    const {username,password}=req.body;    
    if(!username || !password){
        throw new BadRequestError('Please Provide Username And Password')
    }
    //just for demo normally provided by database
    const id=new Date().getDate()
 
    //try to keep the payload small for better user experience
    const token=jwt.sign({id,username},process.env.JWT_SECRET,{expiresIn:'30d'})

   res.status(200).json({msg:'user created',token})
}

const dashboard=async(req,res)=>{
    const luckyNumber=Math.floor(Math.random()*100)
        res.status(200).json({msg:`Hello ${req.user.username}`,secret:`Here is your authorized data ${luckyNumber}`});

}


module.exports={login,dashboard}