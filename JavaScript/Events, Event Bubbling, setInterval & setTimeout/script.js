let button = document.getElementById("btn")

button.addEventListener("click",()=>{
    document.querySelector(".box").innerHTML = "<b>Yay you were clicked</b> Enjoy your click!"
})

button.addEventListener("dblclick",()=>{
    document.querySelector(".box").innerHTML = "<b>Yay you were double clicked</b> Enjoy your click!"
})

button.addEventListener("contextmenu",()=>{
    alert("You were right clicked")
})

document.addEventListener("keydown",(e)=>{
    console.log(e)
})
