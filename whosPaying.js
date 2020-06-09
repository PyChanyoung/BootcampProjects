function whosPaying(names) {
    var numberOfPeople = names.length;
    var randomPersonPosition = Math.floor(Math.random() * numberOfPeople); // from 0 to 0.9999 from 0 to 4.9999  -> from 0 to 4
    var randomPerson = names[randomPersonPosition];
    
    return randomPerson + " is going to buy lunch today!";
}