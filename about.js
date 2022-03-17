let arr = [2, 4, 2, 4, 6, 3, 2, 6];

// result shunaqa bo'lishi kere  [[2,2,2], [4,4], [6,6], [3]]

// filter metodisiz


let b = [];
let count = arr.length;

for (let i = 0; i < count; i++) {
    let k = [];
    let f = [];
    for (let j = 0; j < arr.length; j++) {
        if(arr[0] == arr[j]) {
            k.push(arr[j]);
        } else {
            f.push(arr[j]);
        }
    }
    arr = f;
    if (k != "") b.push(k);
}

console.log(b);
