let numbers=[1,45,32,76,23];
let largest,secondlargest;
if(numbers[0]>numbers[1]){
  largest=numbers[0];
  secondlargest=numbers[1];
}
else{
  largest=numbers[1];
  secondlargest=numbers[0];
}
for(i=2;i<numbers.length;i++){
  if(numbers[i]>largest){
    
    secondlargest=largest;
    largest=numbers[i];
  }
  else if(numbers[i]>secondlargest && numbers[i] !=largest){
    secondlargest=a[i];
  }
}
console.log(secondlargest);