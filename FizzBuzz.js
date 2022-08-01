var l=[];
for(var i=1;i<=100;i++){
  if (i%3==0 && i%5==0){
    l.push("FizzBuzz");
  }else if (i%3==0){
    l.push("Fizz");
  }else if (i%5==0){
    l.push("Buzz");
  }else{
    l.push(i);
  }
}

console.log(l);
