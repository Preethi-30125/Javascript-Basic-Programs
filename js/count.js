let string="numentica ui";
let word=[];
let count=0;
for(i=0;i<string.length;i++){
    word[word.length]=string[i];
};
    for(i=0;i<word.length;i++){
    if(word[i]=="a"||word[i]=="e"||word[i]=="i"||word[i]=="o"||word[i]=="u" || word[i]=="A"||word[i]=="E"||word[i]=="I"||word[i]=="O"||word[i]=="U"){
        count++;
    }
};
console.log(count);

