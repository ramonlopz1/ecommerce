(()=>{const e=document.querySelectorAll("#main_banners input[type=radio]");let n=0;e[n].checked=!0;const a=document.querySelector("#main_banners");a.style.backgroundImage=`url(../assets/img/home/main_banners/${n}.jpeg)`,e.forEach(((e,n)=>{e.onclick=()=>{a.style.backgroundImage=`url(../assets/img/home/main_banners/${n}.jpeg)`}})),setInterval((()=>{n++,n>=3&&(n=0),e[n].checked=!0,a.style.backgroundImage=`url(../assets/img/home/main_banners/${n}.jpeg)`}),4e3)})();