//function with default parameter

function movie (name = "Mission impossible", releaseDate = 2006, rating = '6.9/10', genre= "Action, Adventure, Thriller") {
        return{name, releaseDate, rating, genre};
}
console.log("============defaultparameter=======================");
console.log(movie());
