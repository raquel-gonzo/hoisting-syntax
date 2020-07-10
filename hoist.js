//1
console.log(hello);                                   
var hello = 'world';  // will result in a syntax error because var hello is trying to be accessed before it's defined. 

//2
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
} // output: 'magnet'. because the even though the funtion is called before it is defined, JS apps have global scope so the funtion was hoisted to the top.

//3
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
// output: super cool

//4
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
//output: chicken, half-chicken, 

//5 
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
// output: mean is not a function. to create a function called 'mean' you have to add it after the word function. but mean is not a mathamatical function. 

//6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
// output: undefined, rock, r&b, disco

//7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
//output: san jose, seattle, burbank, san jose

//8
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
//output: logic error because of const keyword