
//  const showmenu=(toggleid,navid)=>{
//     let toggle=document.getElementById(toggleid),
//     nav=document.getElementById(navid)

//     toggle.addEventListener("click",()=>{
//         nav.classList.toggle("showmenu")

//         toggle.classList.toggle('showitems')


//     });
// }
// showmenu("nav-toggle","nav-menu")
  
 let toggle=document.getElementById("nav-toggle");
let nav=document.querySelector('#nav-menu')




toggle.addEventListener("click",()=>{
    nav.classList.toggle("showmenu")


    toggle.classList.toggle("showicon")
})
