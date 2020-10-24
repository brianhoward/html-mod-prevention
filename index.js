let c,h='innerHTML',d=3e3,t=6e4,s=document.querySelector('body');document.addEventListener('DOMContentLoaded',()=>{setTimeout(()=>{c=s[h];setInterval(()=>{if(s[h]!==c)s[h]=c},t)},d)},false);
