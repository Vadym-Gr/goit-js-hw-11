import{a as p,S as f,i as n}from"./assets/vendor-2TIoixgK.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const m="https://pixabay.com/api/",y="54245063-5ddb3a432d77d0c79a171b26b";async function g(o){return(await p.get(m,{params:{key:y,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),h=new f(".gallery a",{captionsData:"alt",captionDelay:250});function b(o){const r=o.map(({webformatURL:s,largeImageURL:a,tags:e,likes:t,views:i,comments:u,downloads:d})=>`
      <li class="gallery-item">
        <a href="${a}">
          <img src="${s}" alt="${e}" />
        </a>
        <div class="info">
          <p><b>Likes</b>${t}</p>
          <p><b>Views</b>${i}</p>
          <p><b>Comments</b>${u}</p>
          <p><b>Downloads</b>${d}</p>
        </div>
      </li>`).join("");c.insertAdjacentHTML("beforeend",r),h.refresh()}function L(){c.innerHTML=""}function w(){l.classList.remove("is-hidden")}function S(){l.classList.add("is-hidden")}const q=document.querySelector(".form");q.addEventListener("submit",async o=>{o.preventDefault();const r=o.target.elements["search-text"].value.trim();if(!r){n.warning({message:"Please enter a search query!",position:"topRight"});return}L(),w();try{const s=await g(r);if(s.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b(s.hits)}catch{n.error({message:"Something went wrong. Please try again later.",position:"topRight"})}finally{S()}});
//# sourceMappingURL=index.js.map
