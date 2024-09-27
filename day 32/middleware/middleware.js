const checkedMiddleWare = (req , res ,next) =>{
    console.log('passing through middleware')

    next();
}

module.exports = {checkedMiddleWare}