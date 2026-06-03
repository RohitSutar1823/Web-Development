function nice(name) 
{
    console.log("Hey " + name + " you are nice!");
    console.log("Hey " + name + " you are good!");
    console.log("Hey " + name + " your tshirt is nice!");
    console.log("Hey " + name + " your course is good too!");
}

function sum(a,b,c=3)
{
    // console.log(a+b);
    return a+b+c;
}

let result = sum(5,3,1);
console.log("The sum of these numbers is:",result);

const func1 = (x)=>{
    console.log("I am an arrow function",x)
}

func1(34);
func1(66);
func1(84);
