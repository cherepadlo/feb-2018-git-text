// a = 1;
// b = 15;
// str1='';
// str2='';
// for(i=a;i<=15;i++){
//     if(i%2==0){
//         console.log(i)
//        str1=str1+i
//     }
//     else {
//         console.log(i)
//         str2=str2+i
//     }
    
// }
// document.write('<table><tr>');
// document.write('<td>'+str1+'</td>'+'</tr></table>')
// document.write('<td>'+str2+'</td>'+'</tr></table>')
// document.write('<table><tr>');
//-----------------------------------------

//   x=+prompt();
//   y=+prompt();
//   if(x<y){
//       for(i=x;i<=y;i++)
//       console.log(i)
//     }
//    else {
//         for(i=x;i>=y;i--)
//         console.log(i)
//     }
//--------------------------------------------
// arr=[];
// n=+prompt();
// arr.length=n;
// console.log(arr);
// for(i=0;i<arr.length;i++) {
//     arr[i]=Math.floor(Math.random()*66-20);
//     console.log(arr[i]);
// }
//     if ((arr[i]>9 && arr[i]<100) || (arr[i]< -9 && arr[i] > -100)) {
//         console.log(arr[i]);
//     }

//---------------------------
// var arr = [1,2,3,4,5];
// document.write(arr.join('_'))
//--------------------------
// var arr = [5,6,43,3,436,7,87,76,45,3];
// if(arr.length % 2 == 0){
//     middle = arr.length / 2;
//     arr.splice(middle,2)
// }else{
//     arr.splice(middle,1)
// }
// console.log(arr);

//-------------------
// n = 20;
// m = 35;

// A = new Array(n);
// for(i=0;i<A.length;i++){
//     A[i]= new Array(m)
//     for(j=0;j<A[i].length;j++){
//         A[i][j]=Math.floor(Math.random()*42)
//         document.write(A[i][j] + '')
//     }
//     document.write('</br>')
// }
// min=A[0][0]

//---------------------
// A = [14,2,68,5,34,3,67]
// min=A[0];
// for(i=0;i<A.length;i+=2){
//     if(A[i]<min){
//         min=A[i]
//     }
// }
// console.log(min);
//----------------------
// A = [];
// A.length = 15;
// for(i=0;i<A.length;i++){
//     A[i]=Math.floor(Math.random()*5)
//     document.write(A[i] + '')
// }


// function Getarray(arr,split){
//     if(!split){
//         split = ' | ';
//     }
//     for(i=0;i<arr.length;i++){
//         document.write(arr[i] + split)
//     }
// }
// arr = [1,2,3,4,5];
// Getarray(arr,"_")

//--------------------------------------------


obj = {
    copy: function (buffer) {
        this.some_name = buffer;
        return this;
    },

    clear: function (){
        delete obj.result;
        return this
    },

    doFunction: function(num1, num2, f1){
        this.result = f1(num1,num2)        
        return this
    }

}

function sum(x,y) {
        return x+y;
}
function mul(x,y) {
        return x*y;
}

console.log(obj.doFunction(2,8,sum));