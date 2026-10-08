document.addEventListener("DOMContentLoaded",()=>{
const b=document.querySelector(".mobile-menu-toggle"),m=document.querySelector("#portfolio-nav");
if(!b||!m)return;
b.onclick=()=>{let o=m.classList.toggle("is-open");b.setAttribute("aria-expanded",String(o));};
m.querySelectorAll("a").forEach(a=>a.onclick=()=>{m.classList.remove("is-open");b.setAttribute("aria-expanded","false");});
});
