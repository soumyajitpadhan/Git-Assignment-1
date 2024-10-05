let input = [5, 10, 15, 20];
let ans = input.reduce((acc = 0, element) => {
    return acc += element;
})

console.log(ans);
//Output - 50