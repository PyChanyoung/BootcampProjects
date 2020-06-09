var numberOfBottles = 99;
while (numberOfBottles >= 0) {
    var bottleword = "bottle";
    if (numberOfBottles === 1) {
        bottleword = "bottles";
    }
    console.log(numberOfBottles + " " + bottleword + " of beer on the wall");
    console.log(numberOfBottles + " " + bottleword + " of beer,");
    console.log("Take one down, pass it arround,");
    numberOfBottles--;
    console.log(numberOfBottles + " " + bottleword + " of beer on the wall.");
}