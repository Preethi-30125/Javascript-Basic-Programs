let a=[2,5,8,9,4]
let arr=[];
for(i=0;i<a.length;i++){
    if(a[i]%2==0){
    arr[arr.length]=a[i]*2;
    }
    else{
        arr[arr.length]=a[i];
    }
}
console.log(arr);