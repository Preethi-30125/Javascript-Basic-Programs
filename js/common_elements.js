
const x=[1,2,3]
const y=[2,3,4]
const z=[0,2,5,3]
function common(x,y,z){
    return x.filter(element=>y.includes(element) && z.includes(element));
}

console.log(common(x,y,z));