function diapazon(a,b){
    let arr=[a];
    while(a!=b){
        if(a<b){
            arr.push(++a)
        } else if(a>b){
            arr.push(--a)
        }
    }
    return arr
}

function diapazonX(b){
    if(isNaN(+b))return "error";
    return diapazone(1,b)
}

console.log(diapazonX(10))