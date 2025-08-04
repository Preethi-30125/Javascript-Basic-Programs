const numbers=[10,20,30,40];
let total=0;
let maximum=numbers[0];
function sum(numbers){
numbers.forEach(num=>{
    if(num>maximum){
        maximum=num;
    }
});

numbers.forEach(number=>{
    total+=number;
});
total-=maximum;
console.log(total);

}
sum(numbers);