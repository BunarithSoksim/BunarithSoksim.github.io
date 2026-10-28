document.querySelectorAll('.copy').forEach(function(b){
  b.addEventListener('click', function(){
    var el=document.getElementById(b.dataset.copy), t=el.textContent.trim();
    var reset=function(){ setTimeout(function(){ b.textContent='Copy'; },1500); };
    var select=function(){ var r=document.createRange(); r.selectNodeContents(el); var s=getSelection(); s.removeAllRanges(); s.addRange(r); b.textContent='Selected'; reset(); };
    try{ navigator.clipboard.writeText(t).then(function(){ b.textContent='Copied'; reset(); }, select); }catch(e){ select(); }
  });
});
