function forEachCustom(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr);
    }
}

function callback(element, index, array) {
    console.log(`Element: ${element}, Index: ${index}, Array: [${array}]`);
}

let arr = [1, 2, 3, 4, 5];
forEachCustom(arr, callback);

//Output
// Element: 1, Index: 0, Array: [1,2,3,4,5]
// Element: 2, Index: 1, Array: [1,2,3,4,5]
// Element: 3, Index: 2, Array: [1,2,3,4,5]
// Element: 4, Index: 3, Array: [1,2,3,4,5]
// Element: 5, Index: 4, Array: [1,2,3,4,5]