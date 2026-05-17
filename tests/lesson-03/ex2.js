const height = 160;

let bestHeight = (height - 100)*9/10;
let maxHeight = height - 100;
let minHeight = (height - 100)*8/10;

if (height > 100 && height < 200)
{
console.log(`The best height is: ${bestHeight}, the max height is: ${maxHeight}, the min height is: ${minHeight}`);
}

