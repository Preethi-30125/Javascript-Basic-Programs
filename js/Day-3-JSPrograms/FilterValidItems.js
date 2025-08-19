function filterOutInvalidItems(mixedItems,invalidItem){

     //Checking possible edge cases to ensure valid inputs
     if(mixedItems==null || invalidItem==null || !Array.isArray(mixedItems) || mixedItems.length==0 || invalidItem.length==0 || mixedItems.length==0 && invalidItem.length==0 || typeof invalidItem !=="string" || !(invalidItem ==="string" || invalidItem==="number" || invalidItem ==="boolean" || invalidItem ==="undefined" || invalidItem==="object" || invalidItem==="function" || invalidItem==="symbol" || invalidItem==="bigint")){
         return "Invalid input,please give the proper input";
    }
    const filteredItems=[];
    for(let i=0;i<mixedItems.length;i++){
        //Keep only the items whose type does not match invalidItem
        if(typeof mixedItems[i] != invalidItem){
            filteredItems[filteredItems.length]=mixedItems[i];
        }
    }
    return filteredItems;  //Return the filtered array
}
console.log(filterOutInvalidItems(["a","d",1,true,"cd",33],"number"))