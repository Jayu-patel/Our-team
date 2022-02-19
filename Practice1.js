var Nav = document.getElementsByClassName("navigation");
var Op = document.getElementsByClassName("options");

openNav=()=>{
  Nav[0].style.width= "45vw";
  Op[0].style.width= "0";
  Nav[0].style.height= "240px";
  Op[0].style.height= "0";
};
closeNav=()=>{
  Nav[0].style.width= "0";
  Nav[0].style.height= "0";
};
openNav2=()=>{
  Op[0].style.width= "35vw";
  Nav[0].style.width= "0";
  Op[0].style.height= "390px";
  Nav[0].style.height= "0";
  
};
closeNav2=()=>{
  Op[0].style.width= "0";
  Op[0].style.height= "0";
};
let c = document.getElementById("logo");