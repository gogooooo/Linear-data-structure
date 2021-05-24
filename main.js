/*var list = [1, 2, 3,4,5]
function minMax(arr) {
	
    min = arr[0];
    max = arr[0];
    i = arr.length;

  while (i--) {
    min = arr[i] <= min 
    arr[i] = min;
    max = arr[i] > max 
    arr[i] = max;
	}

  return { min, max };
}

console.log(minMax(list))
*/
/*var cartoona=""
for(var i=0 ; i < 10 ; i++)
{
  cartoona +="<li> <img src='images/LOGO.png'> </li>"
  
}
document.getElementById('myul').innerHTML=cartoona
*/

var arr1 = [12, 13, 6, 10];
var arr2 = [13, 10, 16, 15];

function sumArray(set1, set2) {
  var sum = 0;
  var diff = [];
  if (set1.length >= set2.length) {
    for (var i = 0; i < set1.length; i++) {
      for (var j = 0; j < set2.length; j++) {
        if (set1[i] === set2[j]) {
          sum += set1[i];
        }
        if (!set1.includes(set2[j])) {
          diff.push(set2[j]);
        }
        if (!set2.includes(set1[j])) {
          diff.push(set1[j]);
        }
      }
    }
  }
  diff = [...new Set(diff)];
  console.log("sum " + sum * 2);
  console.log(diff);
}

sumArray(arr2, arr1);
