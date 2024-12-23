import{S as u,i as a}from"./assets/vendor-BrddEoy-.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const p="https://pixabay.com/api/",d="44022963-dc7d5638f3e5caf2e9b20745b";function f(o){const e=new URLSearchParams({q:o,image_type:"photo",orientation:"horizontal",per_page:12});return fetch(`${p}?key=${d}&${e}`).then(s=>{if(!s.ok)throw new Error(`HTTP error! status: ${s}`);return s.json()})}function h(o){return o.map(e=>`
      <li class="item-card">
        <a class="gallery-link" href="${e.largeImageURL}">
          <img class="small-img" src="${e.webformatURL}" alt="${e.tags}" />
        </a>
        <ul class="text-box-list">
          <li class="text-box">
            <p class="text-content">Likes:</p>
            <p class="text-values">${e.likes}</p>
          </li>
          <li class="text-box">
            <p class="text-content">Views:</p>
            <p class="text-values">${e.views}</p>
          </li>
          <li class="text-box">
            <p class="text-content">Comments:</p>
            <p class="text-values">${e.comments}</p>
          </li>
          <li class="text-box">
            <p class="text-content">Downloads:</p>
            <p class="text-values">${e.downloads}</p>
          </li>
        </ul>
      </li>
      `).join("")}const m={captionsData:"alt",captionDelay:250},y=new u(".gallery-link",m);a.settings({resetOnHover:!0,timeout:2500,color:"red",position:"topRight",safesearch:!0});const g=document.querySelector(".search-form"),n=document.querySelector(".gallery-list"),c=document.querySelector(".loader");g.addEventListener("submit",x);function x(o){o.preventDefault();const e=o.target.elements.searchWord.value.trim();if(e===""){a.show({title:"Hay",message:"Enter some value please."}),o.target.reset();return}n.innerHTML="",c.classList.remove("is-hiden"),f(e).then(s=>(s.hits[0]||(a.show({title:"Hay",message:"Sorry, there are no images matching your search query. Please try again!"}),o.target.reset()),s.hits)).then(s=>{n.innerHTML=h(s),y.refresh()}).catch(s=>a.show(a.show({title:"Hay",message:`${s}`}))).finally(()=>{c.classList.add("is-hiden"),o.target.reset()})}
//# sourceMappingURL=index.js.map
