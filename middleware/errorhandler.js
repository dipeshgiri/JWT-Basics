const {CustomAPIError}=require('../error')
const {StatusCode}=require('http-status-codes')
const errorHandlerMiddleware=(err,req,res,next)=>{
    if(err instanceof CustomAPIError) {
        return res.status(err.statusCode).json({msg:err.message})
    }
    return res.status(StatusCode.INTERNAL_SERVER_ERROR).json({msg:"Something Went Wrong"})
}

module.exports=errorHandlerMiddleware;