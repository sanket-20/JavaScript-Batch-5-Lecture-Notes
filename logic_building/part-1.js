var num = 100;
// var count =0;//1,2
// for(var i=1; i<=num; i++)//1<=5, 2<=5,3<=5,4<=5, 5<=5, 6<=5
// {
//     // console.log(num%i);
//     if(num%i == 0)//5%5 == 0 => T
//         count++;//1,2
// }
// if(count==2)
//     console.log("Num is prime");
// else
//     console.log("Num is composite");



// var count = 0;//1,2
// for (var i = 2; i < num; i++)
// {
//     // console.log(num%i);
//     if (num % i == 0)//4%2==0 , 4%3==1, 4%4==0
//         count++;//1,2
// }
// if (count == 0)
//     console.log("Num is prime");
// else
//     console.log("Num is composite");



var count = 0;//1
for (var i = 2; i < num; i++) // 1<100
{
    // console.log(num%i);
    if (num % i == 0)//100%2 == 0
        count++;//1
        break;
}
if (count == 0)
    console.log("Num is prime");
else
    console.log("Num is composite");