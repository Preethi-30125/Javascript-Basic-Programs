let a=[2,5,8,9,4]
let Array=[];
a.forEach(element => {
    if(element%2==0){
    doubles=element*2;
    Array.push(doubles);
    }
    else{
       Array.push(element); 
    }
});
console.log(Array);
