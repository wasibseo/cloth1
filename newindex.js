 let icon = document.querySelector(".icon");
 let ul = document.querySelector("ul");

  icon.addEventListener("click", ()=>{
    ul.classList.toggle("showData");
    
    if(ul.className == "showData"){
        document.getElementById("bar").className= "fa-solid fa-xmark";
    }else{
        document.getElementById("bar").className= "fa-solid fa-bars";
}
})
//cardjs//
let crd = document.querySelectorAll(".crd");
let itempage = document.querySelector(".itempage")
let container = document.querySelector(".container");
let itemimg = document.getElementById("itemimg");
let buybtn = document.getElementById("buybtn");

console.log(crd);

    crd.forEach(function(curvalue){
        curvalue.addEventListener("click", function(){
     itempage.style.display="flex";
     container.style.display="none";

     let imgSrc = curvalue.firstElementChild.src ;
     itemimg.src=imgSrc;

     let buytext = document.querySelector(".buytext");
     buybtn.addEventListener("click", function(){
     document.querySelector(".buypage").style.display="block";
     buytext.innerHTML
     


let button = document.createElement("button");
button.innerText="submit";
buytext.appendChild(button);

button.addEventListener("click", function(){
let name = document.getElementById("name");
 
if(name.value == "" && adress.value == "" && number.value == ""){
    alert("please enter full details")
   }else{
    alert("Your order will reached in 2");
    document.querySelector(".buypage").style.display="none";
}
})

      let cross = document.querySelector(".cross");
     cross.addEventListener(".click", function(){
     document.querySelector(".buypage").style.display="none";


     }
     )   


          })

     })

})
