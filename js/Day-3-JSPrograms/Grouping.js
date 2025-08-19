function groupingOfNamesUsingInitialCharacters(names){

     //Checking possible edge cases to ensure valid inputs
    if(names==null || !Array.isArray(names) || names.length==0){
        console.log("Invalid input,please give the proper input");
        return;
    }

    //Check if all elements in the Array are strings
    for(let i=0;i<names.length;i++){
        if(typeof names[i] !=="string"){
            console.log("Invalid input,please give the proper input");
            return;
        }
    }

    //Compare current name with all other names
    for(let i=0;i<names.length;i++){
        const groupOfNames=[]; // Array to store names with the same first letter
        for(let j=0;j<names.length;j++){
            if(names[i][0]==names[j][0]){   // Check if first letters match
                groupOfNames[groupOfNames.length]=names[j];
            }
        }

        //Avoid printing duplicate groups
        let alreadyAdded=false;
        for(let k=0;k<i;k++){
            if(names[k][0]==names[i][0]){
                alreadyAdded=true;
                break;
            }
        }
        //Print the group only if not already added
        if(!alreadyAdded){
            console.log(groupOfNames);
           
        }
  }
}
groupingOfNamesUsingInitialCharacters(["arun","balu","cathy","krish","aadhir","aariketh","kamal"])

