function fibonacciGenerator (n) {
    var output=[];
    if (n==1){
        output.push(0);
    }else if(n==2){
        output.push(0);output.push(1);
    }else if (n>2){
        output.push(0);output.push(1);
        for(var i=2;i<n;i++){
          output.push(output[i-2]+output[i-1]);
        }
    }
    return output;
}

console.log(fibonacciGenerator(5));
