let arr = [10,20,30,40,50];

let num = 2;

for(let i=0; i<arr.length;i++){
    arr[i] = arr[i] + num;
    // arr[i] += num;
}
console.log(arr);

// output= [12,22,32,42,52]

// input = [10,20,30,40,50,60,70,80,90,100];
// output= 100;