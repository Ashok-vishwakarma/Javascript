



// function def(num){
//     let b=num[0]
//     let c
//     for (let i=0; i<=num.length-1; i++){
//         if(b<num[i]){
//             c=b
//             b=num[i]
//         }
//         else if (c<num[i] && c<b){
//             c=num[i]
//         }
//     }
//     return (c)
// }

// let a=[1,2,3,5,4]
// console.log(def(a))




// reverse of string
// function reverse(str) {
//     var reverse = '';
//     for (i = str.length - 1; i >= 0; i--) {
//         reverse += str[i];
//     }
//     return reverse;
// }
// console.log(reverse('span'));




// missing element
// function def(num){
//     let start= num.sort()
//     for(let i=0; i<=start.length-1 ; i++){
//         if(start[i]+1==start[i+1]){
//             continue
//         }else{

//             return start[i]+1
//         }
        
//     }
// }

// console.log(def([1,3,4]))




// sum of array
// function sum(num){
//     let total=0
//     for(let i=0; i<=num.length-1;i++){
//         total+=num[i]
//     }
//     return total
// }

// console.log(sum([1,2,3,4,5,6,7,8,9,10]))




// function pali(num){
   
//     let rev=''
//     for(let i=num.length-1; i>=0 ;i--){
//         rev+=num[i]
    
//     }
    
//     if(num==rev){
//             console.log("palindrom")
//         }
//         else{
//              console.log(" it is not a palindrom")
//         }   
// }

// pali('momw')







// second largest number 

// function def(num) {
//     let b = num[0]
//     let c
//     for (let i = 0; i <= num.length-1; i++) {
//       if (b < num[i]) {
//         c = b
//         b = num[i]
//       }else if(c<num[i] && b>num[i]){
//         c=num[i]
//       }
//     } 
//     return c
//   }
// //   let a = [4, 2, 6,3,8, 9, 5 ,76 , 0]
//   let a = [4,76, 9, 2, 6, 0]

// // let a=[3,5,7,8,9,10,18]
//   console.log(def(a))
  
  


 





// sum of two element should be addition should be 10

//   function an(num){
//     let newarray=[]
//     for(let i=0; i<=num.length-1; i++){
//         for(let j=i+1; j<=num.length-1; j++){
//             if(num[i]+num[j]==10){
//                 newarray.push(num[i]+num[j])
//             }
//         }
//     }
//     return newarray
// }

// let myArray=[3,4,6,7,8,2]
// console.log(an(myArray))




  
function demo(num){
  if(num==null){
    console.log("null")
  }
  else if(num===undefined){
    console.log("undefine")
  }
  else if(num==NaN){
    console.log("NaN")
  }
  else if (num!== null || undefined || NaN || [] || ""){
    console.log(num)
  }
}

demo([12])
  
// deep copy and shallow copy 




  
  
  
  
  
  
  
  
  
  
  
  
