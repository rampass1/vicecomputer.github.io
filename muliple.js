function multiple(num){
    sum =0;
    for (i=1;i<=num;i++){
        if(i%3==0 || i%5 ==0){
            console.log(i)
        }
        sum+=i;
    }
    console.log(sum)
}

multiple(10)
