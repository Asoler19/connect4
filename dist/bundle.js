!function(e){var t={};function r(n){if(t[n])return t[n].exports;var c=t[n]={i:n,l:!1,exports:{}};return e[n].call(c.exports,c,c.exports,r),c.l=!0,c.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){var n,c=0,i=[],o=0,l=0,u=8,s=r(1),a=r(2);function d(e){var t=document.querySelectorAll(".active");if(t.length>0){var r=a(t[0],this);r?(t[0].classList.toggle("active"),function(e,t){n=document.createElement("div");let r=Array.from(e.querySelectorAll("div")).find(e=>e.classList.value.split("-")[0]===t);if(c%2==0){if(r)return c++;n.classList.add(`${t}-blue`),e.appendChild(n)}else{if(r)return c++;n.classList.add(`${t}-red`),e.appendChild(n)}(function(e,t){var r,n=e.id.split("x");n={r:Number(n[1]),c:Number(n[2])},"left"===t&&(r={r:n.r,c:n.c-1});"right"===t&&(r={r:n.r,c:n.c+1});"up"===t&&(r={r:n.r-1,c:n.c});"down"===t&&(r={r:n.r+1,c:n.c});i.push([r,n]),i.push([n,r]),("left"==t||"right"==t)&&function(){var e=i.slice(-1)[0],t={r:e[0].r-1,c:e[0].c},r={r:e[1].r-1,c:e[1].c},n={r:e[0].r+1,c:e[0].c},c={r:e[1].r+1,c:e[1].c};o()&&l()?f(2):o()?f(1):l()&&f(1);function o(){return v(e[0],t)&&v(e[1],r)&&v(t,r)}function l(){return v(e[0],n)&&v(e[1],c)&&v(n,c)}}();"up"!=t&&"down"!=t||function(){var e=i.slice(-1)[0],t={r:e[0].r,c:e[0].c-1},r={r:e[0].r,c:e[0].c+1},n={r:e[1].r,c:e[1].c-1},c={r:e[1].r,c:e[1].c+1};o()&&l()?f(2):o()?f(1):l()&&f(1);function o(){return v(e[0],t)&&v(e[1],n)&&v(t,n)}function l(){return v(e[0],r)&&v(e[1],c)&&v(r,c)}}()})(e,t),c++}(this,r)):(t[0].classList.toggle("active"),this.id!=t[0].id&&this.classList.toggle("active"))}else this.classList.toggle("active")}function f(e){c--%2==0?(l+=e,document.querySelector(".bluescore").classList.add("animate"),document.querySelector(".bluescore").addEventListener("animationend",function(){this.classList.remove("animate")})):(o+=e,document.querySelector(".redscore").classList.add("animate"),document.querySelector(".redscore").addEventListener("animationend",function(){this.classList.remove("animate")})),console.log("turn: "+c),document.getElementById("bluescore").innerHTML=l,document.getElementById("redscore").innerHTML=o,i.length===4*u*(u-1)&&(o>l?(m.innerHTML="Red Wins!",m.style.color="red",m.style.fontSize="3rem",p.style.display="block"):o<l?(m.innerHTML="Blue Wins!",m.style.color="blue",m.style.fontSize="3rem",p.style.display="block"):(m.innerHTML="It's a Tie!",m.style.fontSize="3rem",p.style.display="block"))}var m=document.querySelector(".title"),p=document.querySelector(".play-again");function y(){window.location.reload()}function v(e,t){for(var r=0;r<i.length;r++)if(i[r][0].r===e.r&&i[r][0].c===e.c&&i[r][1].r===t.r&&i[r][1].c===t.c)return!0;return!1}window.onload=function(){s(u),document.querySelectorAll("#matrix td").forEach(function(e,t){e.onclick=d}),document.querySelector(".play-again").addEventListener("click",y),document.querySelector(".reset").addEventListener("click",y)}},function(e,t){function r(){var e=document.querySelectorAll(".dot");for(let t=0;t<e.length;t++)setTimeout(function(){e[t].classList.add("appear")},100+1500*Math.random())}e.exports=function(e){var t=document.getElementById("matrix");t.innerHTML="";for(var n=0;n<e;n++){for(var c=document.createElement("tr"),i=0;i<e;i++)c.innerHTML+=`<td id='x${n}x${i}'>\n                        <div class='dot'></div>\n                      </td>`;t.appendChild(c),r(),setTimeout(function(){var e=document.querySelectorAll(".dot");for(let t=0;t<e.length;t++)e[t].style.opacity="1",e[t].classList.remove("appear")},2400)}}},function(e,t){e.exports=function(e,t){var r=t.id.split("x"),n=Number(r[1]),c=Number(r[2]),i=e.id.split("x"),o=Number(i[1]),l=Number(i[2]);return n==o&&c==l-1?"right":n==o&&c==l+1?"left":c==l&&n==o-1?"down":c==l&&n==o+1&&"up"}}]);