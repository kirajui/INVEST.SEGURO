// deixa o link ativo no menu
const current = location.pathname.split("/").pop() || "index.html";
document.querySelectorAll("nav a").forEach(a=>{
  if(a.getAttribute("href") === current){
    a.style.background = "#eaf2f8";
  }
});
