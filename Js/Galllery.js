function login(){

const x = document.getElementById('username').value ;
const y = document.getElementById('password').value ;
// console.log(x , y)

if(x == "slinternational" & y == "mastermind" ){
    document.getElementById('Correct').style.visibility = "visible"
    document.getElementById('Correct').style.display = "block"
    document.getElementById('Incorrect').style.visibility = "hidden"
    document.getElementById('Incorrect').style.display = "none"
    document.getElementById('usefull').href = "Maingallery/gallery.html"
    document.getElementById('usefull').click()
    console.log("hii")
}

else{
document.getElementById('Incorrect').style.visibility = "visible"
document.getElementById('Incorrect').style.display = "block"
    document.getElementById('Correct').style.visibility = "hidden"
    document.getElementById('Correct').style.display = "none"
}
}