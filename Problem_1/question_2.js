let input = [1, 2, 3, 4, 5, 6];
let ans = input.filter((element) => {
    if (element % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
});

console.log(ans);
//Output - [ 2, 4, 6 ]