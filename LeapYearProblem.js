function isLeap(year) {
    var n = year;
    if (n%4===0){
        if(n%100===0){
            if(n%400===0){
                console.log("Leap year.");
            }else{
                console.log("Not leap year.");
            }
        }else{
            console.log("Leap year.");
        }
    }else{
        console.log("Not leap year.");
    }
}

isLeap(1998);
