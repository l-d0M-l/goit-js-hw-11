import{S as u,i as n}from"./assets/vendor-5ObWk2rO.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function l(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=l(e);fetch(e.href,r)}})();const y=t=>fetch(`https://pixabay.com/api/?key=48370446-8dcf2f9524038c25db09fe77e&q=${t}&image_type=photo&orientation=horizontal&safesearch=true&per_page=30`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()}),h=t=>`<li>
  <a class="query-image-big" href="${t.largeImageURL}">
    <img
      class="query-image"
      src="${t.webformatURL}"
      alt="${t.tags}"
    />
    <ul class="gallery-details">
      <li class="gallery-details-section">
        <h3 class="gallery-details-heading">Likes</h3>
        <p class="gallery-details-text">${t.likes}</p>
      </li>
      <li>
        <h3 class="gallery-details-heading">Views</h3>
        <p class="gallery-details-text">${t.views}</p>
      </li>
      <li>
        <h3 class="gallery-details-heading">Comments</h3>
        <p class="gallery-details-text">${t.comments}</p>
      </li>
      <li>
        <h3 class="gallery-details-heading">Downloads</h3>
        <p class="gallery-details-text">${t.downloads}</p>
      </li>
    </ul>
  </a>
</li>`,d=document.querySelector(".js-search-form"),c=document.querySelector(".js-gallery"),i=document.querySelector(".loader"),p=t=>{t.preventDefault();const s=t.currentTarget.elements.user_query.value.trim();if(s===""){n.show({message:"Input has to be filled!",color:"red",position:"bottomLeft"});return}i.style.display="block",y(s).then(l=>{c.innerHTML="",i.style.display="none",l.total===0&&n.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"bottomLeft"});const a=l.hits.map(e=>h(e)).join("");c.innerHTML=a,d.reset(),g.refresh()}).catch(l=>{i.style.display="none",console.log(l)})};d.addEventListener("submit",p);let g=new u(".query-image-big",{captions:!0,captionsData:"alt",captionDelay:250});
//# sourceMappingURL=index.js.map
