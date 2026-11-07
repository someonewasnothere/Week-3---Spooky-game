var character = null;

function randomInt(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var names=[
    "Ariss",
    "Bob",
    "Charlie",
    "David",
    "Eve",
    "Miggy",
];  

var ages=[
    25,
    30,
    11,
    9,
    1,
    99,
    200,
]

var job=[
    "Unemployed",
    "Student",
    "Teacher",
    "Engineer",
    "Artist",
    "President",
    "Computer programmer",
]

var favorites=[
    "coding",
    "drawing (yippiee)",
    "you 😳",
    "music",
]

function makeDialouge() {
    var name = names[randomInt(0, names.length - 1)];
    var age = ages[randomInt(0, ages.length - 1)];
    var profession = job[randomInt(0, job.length - 1)];
    if (randomInt(1,2) ==1){
        var favorite = favorites[randomInt(0, favorites.length - 1)];
        return "My name is " + name + ", I am " + age + " years old, I work as a " + profession + ", and I like " + favorite + ".";
    }
    return "My name is " + name + ", I am " + age + " years old, and I work as a " + profession + ".";
}



document.getElementById("dialogue-display").innerHTML = makeDialouge();