//anonymous function with iife

{
    (function(){
        console.log("==============anonymous function with IIFE====================");
        console.log('sir this is iife with anonymous function');
    })();
}

//anonymous function with iife with arguments

let ipl = {
    team1 : 'CSK',
    team2 : 'RCB'
};

(function(){
    console.log("================anonymous function with arguments in IIFE======================");
    console.log(`${ipl.team1} ${ipl.team2}`);
}) (ipl);
