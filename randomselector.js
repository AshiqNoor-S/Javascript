function whosPaying(names) {
    var x = names.length;
    var y = Math.floor(Math.random()*x);
    return names[y];
}

var names = ["Ram","Sham","Sam","Jam"];
console.log(whosPaying(names));
