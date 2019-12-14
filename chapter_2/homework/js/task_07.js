function Fibonachi(n) {
    if(n<=1) {
        return n;
    }
    else {
        return Fibonachi(n - 1) + Fibonachi(n - 2)
    }
}
let result = Fibonachi(10);
console.log(result);