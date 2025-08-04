let string="numentica ui";
b=string.split("");
let count=0;
b.filter(e=> {
    if(e=="a"||e=="e"||e=="i"||e=="o"||e=="u" || e=="A"||e=="E"||e=="I"||e=="O"||e=="U"){
        count++;
    }
});
console.log(count);