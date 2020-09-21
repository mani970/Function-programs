//function invocation

function trainer() {
    console.log("===========function invoking========================");
    console.log("Shashi sir is fullstack trainer");
}

function java(){
    
    console.log("ShishiraBhat sir is java trainer");
}

function jspiders(using_callback){
    return using_callback();
}

jspiders(trainer);