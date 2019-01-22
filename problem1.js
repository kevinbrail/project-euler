var array = [];
var i;
for (i = 0; i < 1000; i++) { 
        if (i%3 == 0 || i%5== 0){
            var sum = array.push(i);
        }
}
const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(array.reduce(reducer));