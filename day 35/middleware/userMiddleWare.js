
const check= (req,res,next) => {
    console.log('middleware called');
    next();
};

module.exports =  {check}