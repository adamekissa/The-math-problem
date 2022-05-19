import { integers, specifiedValue } from "./data/data";


//Declare function to check for all possible pairs from the list of intergers that adds to the specified value and push them to a separate list.
export default function findPairs(value : number, intArray: any[]) {
   intArray.sort(function(a: number, b: number) { return a - b; });
//Initiate array to keep pairs that matches the criteria
   let pairs = [];
   //initiate variable i and have it increasing from the lowest integer in sorted intArray ;
   let i = Math.min(...intArray);
   //initiate variable j and have it decreasing from the end of the sorted intArray till they meet midway.
   let j = intArray.length - 1;
   while (i < j && i < intArray.length && j >= 0) {
       let a = intArray[i], b = intArray[j];

       if (a + b == value) {
           pairs.push([a, b]);
           while (i < intArray.length && intArray[i] == a) { i++; }
           while (j >= 0 && intArray[j] == b) { j--; }
       } else if (a + b < value) {
           while (i < intArray.length && intArray[i++] == a);
       } else {
           while (j >= 0 && intArray[j--] == b);
       }
   }
   return pairs;
}
 findPairs(specifiedValue, integers);