(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function o(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(i){if(i.ep)return;i.ep=!0;const n=o(i);fetch(i.href,n)}})();const p="https://ecommercebackend.fundamentos-29.repl.co/",v=document.querySelector(".car__toggle"),f=document.querySelector(".car__block"),s=document.querySelector("#products-container"),g=document.querySelector("#car"),u=document.querySelector("#car__list");emptyCarButton=document.querySelector("#empty__cart");let c=[];const l=document.querySelector("#modal-container"),m=document.querySelector("#modal");let _=[];v.addEventListener("click",()=>{f.classList.toggle("nav__car__visible")});//! Vamos a crear una función que contenga y que ejecute todos los Listeners al inicio de la carga del código.
L();function L(){s.addEventListener("click",b),g.addEventListener("click",h),emptyCarButton.addEventListener("click",$),document.addEventListener("DOMContentLoaded",()=>{c=JSON.parse(localStorage.getItem("cart"))||[],a()}),s.addEventListener("click",P),l.addEventListener("click",C)}function y(){axios.get(p).then(function(t){const e=t.data;S(e)}).catch(function(t){console.log(t)})}y();function S(t){let e="";for(let o=0;o<t.length;o++)e+=`
    <div class='product__container'>
      <div class='product__container__img'>
        <img src="${t[o].image}" alt="image">
      </div>
      <div class="product__container__name">
        <p>${t[o].name}</p>
      </div>
      <div class="product__container__price">
        <p>$ ${t[o].price.toFixed(2)}</p>
      </div>
      <div class="product__container__button">
        <button class="car__button add__to__car" id="add__to__car" data-id="${t[o].id}">Add to car</button>
        <button class="product__details" data-id="${t[o].id}">View Details</button>
      </div>
    </div>
    `;s.innerHTML=e}function b(t){if(t.target.classList.contains("add__to__car")){const e=t.target.parentElement.parentElement;q(e)}}function q(t){const e={id:t.querySelector("button").getAttribute("data-id"),image:t.querySelector("img").src,name:t.querySelector(".product__container__name p").textContent,price:t.querySelector(".product__container__price p").textContent,quantity:1};c.some(o=>o.id===e.id)?c=[...c.map(r=>(r.id===e.id&&r.quantity++,r))]:c=[...c,e],console.log(c),a()}function a(){//! Como cada vez que iteramos con forEach creamos un nuevo div, debemos depurar los duplicados reinicializando el contenedor carList con innerHTML vacío. Esto borra todo lo que pueda estar repetido y vuelve a iterar sobre los elementos actualizados en el array de carProducts.
u.innerHTML="",c.forEach(t=>{const e=document.createElement("div");e.innerHTML=`
      <div class="car__product">
        <div class="car__product__image">
          <img src="${t.image}">
        </div>
        <div class="car__product__description">
          <p>${t.name}</p>
          <p>Precio: ${t.price}</p>
          <p>Cantidad: ${t.quantity}</p>
        </div>
        <div class="car__product__button">
          <button class="delete__product" data-id="${t.id}">
            Delete
          </button>
        </div>
      </div>
      <hr>
    `,u.appendChild(e)}),E()}function E(){localStorage.setItem("cart",JSON.stringify(c))}function h(t){if(t.target.classList.contains("delete__product")){const e=t.target.getAttribute("data-id");c=c.filter(o=>o.id!==e),a()}}function $(){c=[],a()}function P(t){if(t.target.classList.contains("product__details")){l.classList.add("show__modal");const e=t.target.parentElement.parentElement;M(e)}}function C(t){t.target.classList.contains("icon__modal")&&(l.classList.remove("show__modal"),m.innerHTML="",_=[])}function M(t){_=[...[{id:t.querySelector("button").getAttribute("data-id"),image:t.querySelector("img").src,name:t.querySelector(".product__container__name p").textContent,price:t.querySelector(".product__container__price p").textContent}]],T()}function T(){let t="";for(let e of _)t+=`
      <div class="principal__element">
        <div class="first__modal__section">
          <div class="first__modal__text">
            <p>${e.name}</p>
            <p>${e.price}</p>
          </div>
          <div class="first__modal__colors">
            <p>Colores</p>
            <div>
              <img src="${e.image}">
            </div>
          </div>
          <div class="first__modal__sizes__text">
            <div>
              <p>Tallas</p>
              <p>Guía de tallas</p>
            </div>
          </div>
          <div class="first__modal__sizes">
            <div>
              <p>S</p>
            </div>
            <div>
              <p>M</p>
            </div>
            <div>
              <p>L</p>
            </div>
            <div>
              <p>XL</p>
            </div>
            <div>
              <p>2XL</p>
            </div>
            <div>
              <p>3XL</p>
            </div>
          </div>
        </div>
        <div class="second__modal__section">
          <div class="modal__vector"></div>
          <img src="${e.image}">
          
        </div>
      </div>
    `;m.innerHTML=t}
