function reverseString(str){
    
    let rev='';
    for(let i=str.length-1;i>=0;i--){
        rev=rev.concat(str[i]);
    }
    return rev;
}
function arrSum(){
    console.log('====================================Question 2==================================');
    let arr=[1,2,3,8,9,29];
    let sum=0;
    for(let i=0;i<arr.length-1;i++){
        sum+=arr[i];
    }
    console.log(sum);
}
function wordRev(str){
    console.log('====================================Question 3==================================')
    let nameArr=str.split(' ');
    let finalStr=new Array();
    for(let i=0;i<nameArr.length;i++)
    {
        finalStr.push(reverseString(nameArr[i]));
    }
    finalStr=finalStr.join(" ")
    console.log(finalStr)
}
function pallindrome(num)
{
    function reverse()
    {
        let reversedNum=0;
        while(num>0)
        {
            rem=num%10;
            reversedNum=reversedNum*10+rem;  
            num=Math.floor(num/10);
        }
        return reversedNum;
    }
    if(num===reverse()){
        return "pallindrome";
    }
    else
    {
        return "not pallindrome";
    }
}
function nextPallindrome(){
    console.log('====================================Question 5==================================');
    let given=1800;
    while(pallindrome(given)!='pallindrome')
    {
        given++;
    }
    console.log(given);
}
function thirdLargestNumArray(){
    console.log('====================================Question 6==================================');
    let arr=[1,5,7,9,12,56,78,99];
    let first=arr[0];
    let second=Number.MIN_VALUE;
    let third=Number.MIN_VALUE;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>first){
            third=second;
            second=first;
            first=arr[i];
        }
        else if(arr[i]>second){
            third=second;
            second=arr[i];
        }
        else if(arr[i]>third){
            third=arr[i];
        }
    }
    console.log(third);
}
function randomGen(){
    console.log('====================================Question=================================');
    let rand=Math.floor(Math.random()*101)
    evenNum(rand)
    primeNum(rand);
}
function primeNum(num){
    let i;
    for(i=2;i<=num-1;i++)
    {
        if(num%i==0)
            break;
    }
    if(i==num)
        console.log(num,'is prime');
    else
        console.log(num,'is not prime')
}
function evenNum(num)
{
    if(num%2==0)
    {
        console.log(num,'is even');
    }
    else
    {
        console.log(num,'is odd');
    }
}
function swap(){
    console.log('====================================Question 9==================================');
    let num1=10;
    let num2=20;
    console.log('before num 1 = ',num1);
    console.log('before num 2 = ',num2);


    num1=num1+num2;
    num2=num1-num2;
    num1=num1-num2;


    console.log('After num 1 = ',num1);
    console.log('After num 2 = ',num2);
}
function arrayHundred(){
    console.log('====================================Question 10==================================');
    let arr=new Array();
    for(let i=0;i<100;i++){
        arr.push(i+1);
    }
    arr[99]=0;
    console.log('before',arr);


    for(let i=0;i<arr.length;i++)
    {
        if(i==arr.length-1 && arr[i]==0){
            arr[i]=arr[i-1]+1;
        }
        if(arr[i]==0)
        {
            arr[i]=arr[i+1]-1;
        }
    }
    console.log('after',arr)
}
function dupString(str){
    console.log('====================================Question 11==================================')
    str=str.split('');
    let op=new Set();
    let temp=new Set();
    for(let i=0;i<str.length;i++){
        if(str[i]==' ');            
        else if(temp.has(str[i]))
        {
            op.add(str[i]);
        }
        temp.add(str[i]);
    }
    console.log(str);
    console.log(op);
    console.log(temp);
}
function arrayOccurences(){
    console.log('====================================Question 12==================================');
    let arr=[1,1,56,89,54,23,12,1,2,54,32,2,56,89,54,23,12,1,2,54];
    let mp=new Map();
    for(let i=0;i<arr.length;i++){
        if(mp.has(arr[i])){
            let temp= mp.get(arr[i]);
            mp.set(arr[i],temp+1);
        } else {
            mp.set(arr[i], 1)
        }
    }
    console.log(mp);
}
function removeDuplicateArray(){
    console.log('====================================Question 13==================================');
    let arr=[1,1,56,89,54,23,12,1,2,54,32,2,56,89,54,23,12,1,2,54];
    
    arr=new Set(arr);
    arr=Array.from(arr);
    console.log(arr);
}
function mapProb(){
    console.log('====================================Question 14==================================');
    const mp=new Map([
        ['Developer',5],
        ['Designer',3],
        ['QA',4],
        ['Manager',1]
    ])

    let a=new Array();
    let b=new Array();
    mp.forEach(function(value,key)
        {
            for(let i=0;i<value;i++)
            {
                a.push(key)
            }
        }
    )
    let newa=[];
    mp.forEach(function(value,key)
        {
            for(let i=0;i<value;i++)
            {
                newa.push(key)
            }
            b.push(newa)
            newa=[]
        }
    )
 console.log(newa)
 console.log(b)
}
function wordFreq(){
    console.log('====================================Question 15==================================');
    let ip="React Python Ansi-C javascript python Ansi-C JAVA PYTHON Ansi-C Java Ansi-C Javascript Python Ansi-C Java Ansi-C React JavaScript Ansi-C Java pythoN React javaScript AngulaR Ansi-C Python angular Java Javascript";
    ip=ip.toLowerCase();
    ip=ip.split(" ");
    let mp=new Map();
    for(let i=0;i<ip.length;i++)
    {
        if(mp.has(ip[i]))
        {
            let temp= mp.get(ip[i]);
            mp.set(ip[i],temp+1);
        } 
        else 
        {
            mp.set(ip[i], 1)
        }
    }
    mp=new Map([...mp.entries()].sort());
    console.log(mp);
}










console.log("------------------------OUTPUT--------------------------------");
let str='HI SHAHID HOW ARE YOU';
// console.log('====================================Question 1==================================')
// console.log(reverseString(str))
//arrSum();
// wordRev(str);

let num=1991;
// console.log(pallindrome(num));

// nextPallindrome();

// randomGen();

// thirdLargestNumArray();
// arrayHundred();
//swap()

// dupString(str);
// arrayOccurences()
// removeDuplicateArray();
// mapProb();

// wordFreq();





