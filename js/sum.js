const Numbers=[10,20,30,40];
let total=0;
let maximum=Numbers[0];
function sum(numbers){
Numbers.forEach(num=>{
    if(num>maximum){
        maximum=num;
    }
});

Numbers.forEach(number=>{
    total+=number;
});
total-=maximum;
console.log(total);

}
sum(Numbers);