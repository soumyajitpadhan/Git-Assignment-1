let input = [1, 2, 3, 4, 5];
let ans = input.filter((element) => {
    if (element % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}).map((element) => {
    return element ** 2;
}).reduce((acc = 0, element) => {
    return acc += element;
});

console.log(ans);
//Output - 20