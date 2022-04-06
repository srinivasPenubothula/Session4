var len=process.argv.length;/*find the length of the input array and assign length to the varible*/
var sum=0;/* declare a var to count sum of the elements in array*/
/* by using for retreive each element and adding them to sum...by using its index */
for(let i=2;i<len;i++)
{
    sum+=Number(process.argv[i]);
}
/*print the sum*/
console.log(sum);