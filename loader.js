if (document.getElementById('sidemenu')) {
    document.getElementById('sidemenu').remove();
} else {
    var sidemenu;
    var bdy;
    var gui = true;
    sidemenu = document.createElement('div');
    sidemenu.id = 'sidemenu';
    bdy = document.getElementsByTagName('body')[0];
    bdy.appendChild(sidemenu);
    sidemenu.setAttribute('style', 'height:100%; width:100%; color:white; font-family:Monospace; font-size:12px; z-index:10000; display: inline-block; overflow:visible; position:fixed; left:0; top: 0; background:black;');
    sidemenu.innerHTML=`
    <input style="height:4%; border:solid black 1px; color:white; background:grey; font-family:Monospace;" id="urlinput"/>
    
    <button style="width:20px; height:4%; border:none; color:white; background:grey; font-family:Monospace;" onclick="url=document.getElementById('urlinput').value;if(url.startsWith('https://')){document.getElementById('sidemenuframe').src=url;}else if(url.startsWith('http://')){alert('[WARN] http might not work due to downgrade policy.');document.getElementById('sidemenuframe').src=url;}else{document.getElementById('sidemenuframe').src='https://'+url}">⌕</button>
    
    <button style="width:20px; height:4%; border:none; color:white; background:grey; font-family:Monospace;" onclick="document.getElementById('sidemenuframe').src=document.getElementById('sidemenuframe').src;">&#x21bb;</button>
    
    <button style="float:right; background:red; color:black; width:50px; height:4%; border:none; font-size:25px; font-family:Monospace;" onclick='sidemenu.setAttribute("style","display:none;");gui=false;'>-</button>
    
    <iframe id="sidemenuframe" src="data:text/html,<body style='background:black; color:white; font-family:Monospace;'>Enter URL above</body>" style="height:96%; width:100%; color:black; font-family:Monospace; font-size:12px; z-index:10000; display: float; overflow:visible; position:fixed; left:0; top: 4%; background:white; border:none; float:left;"></iframe>`;
}
void 0;
document.onkeydown = function (e) {
  if (e.code=="ShiftRight"){
    if(gui===false){
    sidemenu.setAttribute('style', 'height:100%; width:100%; color:white; font-family:Monospace; font-size:12px; z-index:10000; display: inline-block; overflow:visible; position:fixed; left:0; top: 0; background:black;');
    gui=true;
    }else{
      sidemenu.setAttribute('style','display:none;');
      gui=false;
    }
  }
}


