//function by call method

var iplteam = {name: "CSK"};

var Beat = function (MI){
    return "yesterday " + this.name + " beat "+ MI + " by 5 wkts";
}
console.log("====================call==============================");
console.log(Beat.call(iplteam,"MI"));
//function by apply method
var args = ["MI" , "by 5 wkts"];
console.log("==================apply================================");
console.log(Beat.apply(iplteam,args));
//function by bind method
var bound = Beat.bind(iplteam);

console.dir(bound); // return a function
console.log("==================Bind================================");
console.log(bound("MI", "by 5 wkts"));