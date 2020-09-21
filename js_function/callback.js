window.onload = function(){
    document.querySelector("#call_back_btn")
    .addEventListener("click" , function(){
        console.log("================call back function with button===========================")
        console.log("number of times button clicked!");
    });
};

//simple example for call back

function doassignment(subject , callback) {
    console.log("========================call back function with simple example============================");
    console.log(`starting my ${subject} assignment.`);
    callback();
}

function alertFinished() { setTimeout(function(){
    console.log("===========================call back function with settimeout==========================");
    console.log('finished my assignment');
},100);
}

doassignment('javascript', alertFinished);