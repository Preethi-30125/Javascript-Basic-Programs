let input="hello from nui";
function capitalize(input){
let splited=input.split(' ');
let capital=splited.map(word=>{
    if(word.length===0){
        return '';
    }
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
});
return capital.join(' ');
}
console.log(capitalize(input));