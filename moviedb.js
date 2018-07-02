var movies = [
  {
    title: "In Bruges",
    rating: 5,
    hasWatched: true
  },
  {
    title: "Frozen",
    rating: 4.5,
    hasWatched: false
  },
  {
    title: "Mad Max Fury Road",
    rating: 5,
    hasWatched: true
  },
  {
    title: "Les Miserables",
    rating: 3.5,
    hasWatched: false
  }
]


// method A - use a forEach straight
movies.forEach( function(movie) {
  var result = "You have ";
  if (movie.hasWatched) {
    result += "watched ";
  }
  else {
    result += "not seen ";
  }
  // use the escape character to print a quote
  result += "\"" + movie.title + "\" - " + movie.rating + " stars";
  console.log(result);
});

// method B - write a custom function then pass that function to forEach 
function buildString(movie) {
  var result = "You have ";
  if (movie.hasWatched) {
    result += "watched ";
  }
  else {
    result += "not seen ";
  }
  result += "\"" + movie.title + "\" - " + movie.rating + " stars";
  return result;
}
movies.forEach( function(movie) {
  console.log(buildString(movie));
});