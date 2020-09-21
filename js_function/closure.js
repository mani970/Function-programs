var Jsonlineclass = "Hi sir this is mani how's ur day sir😃";

function outerfunction() {
    var classstart = "sir started class";
    function innerfunction(){
            var lecture = "good morning guys😎";
            console.log('========================================functionclosure===================================');
            console.log(lecture);
            console.log(classstart);
            console.log(Jsonlineclass);
    }
    innerfunction();
}

outerfunction();