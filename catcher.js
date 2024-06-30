function catcher (){
    try{
        new Array(-1);
    }catch(er){
        if (er instanceof RangeError){
            console.log(`Range error`);
        }
        else{
            throw er
        }
console.log(er)

    }
}
catcher()