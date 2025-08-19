const GivenArray=[3,5,9,2,7];
function swap(GivenArray){
for(let i=0;i<GivenArray.length;i++){
    if(i===0){
        let temp=GivenArray[i];
        GivenArray[i]=GivenArray[GivenArray.length-1];
        GivenArray[GivenArray.length-1]=temp;
        return GivenArray;
    }
}
}
console.log(swap(GivenArray));