console.log("This is a tutorial on Loops")

let a = 1;

for (let i = 0; i < 100; i++) {
    console.log(a + i);
}

let obj = {
    name: "Harry",
    role: "Programmer",
    company: "CodeWithHarry AI"
}

for(const key in obj)
{
    console.log(key);
}

for (const c of "Harry") 
{
    console.log(c)
}

let i = 0;
while(i<6)
{
    console.log(i);
    i++;
}

i = 1;
do {
    console.log(i);
    i++;
} while (i<6);