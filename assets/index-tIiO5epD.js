(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function d(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(t){if(t.ep)return;t.ep=!0;const n=d(t);fetch(t.href,n)}})();document.addEventListener("DOMContentLoaded",()=>{typeof particlesJS<"u"&&particlesJS("particles-js",{particles:{number:{value:80,density:{enable:!0,value_area:800}},color:{value:["#000000","#333333","#666666","#999999","#cccccc"]},shape:{type:"circle",stroke:{width:0,color:"#000000"}},opacity:{value:.6,random:!1,anim:{enable:!0,speed:1,opacity_min:.3,sync:!1}},size:{value:3,random:!0,anim:{enable:!0,speed:2,size_min:1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#333333",opacity:.4,width:1},move:{enable:!0,speed:2,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"repulse"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:140,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:100,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0});const a=document.querySelector(".hamburger"),r=document.querySelector(".nav-menu");a&&r&&(a.addEventListener("click",()=>{a.classList.toggle("active"),r.classList.toggle("active")}),document.querySelectorAll(".nav-link").forEach(e=>e.addEventListener("click",()=>{a.classList.remove("active"),r.classList.remove("active")})),document.addEventListener("click",e=>{!a.contains(e.target)&&!r.contains(e.target)&&(a.classList.remove("active"),r.classList.remove("active"))})),document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",function(o){o.preventDefault();const i=document.querySelector(this.getAttribute("href"));if(i){const s=i.offsetTop-70;window.scrollTo({top:s,behavior:"smooth"})}})}),window.addEventListener("scroll",()=>{const e=document.querySelector(".navbar");window.scrollY>50?(e.style.background="rgba(255, 255, 255, 0.98)",e.style.boxShadow="0 2px 20px rgba(0, 0, 0, 0.1)"):(e.style.background="rgba(255, 255, 255, 0.95)",e.style.boxShadow="none")});const d={threshold:.1,rootMargin:"0px 0px -50px 0px"},l=new IntersectionObserver(e=>{e.forEach(o=>{o.isIntersecting&&o.target.classList.add("animate-in")})},d);document.querySelectorAll("section, .project-card, .assignment-card").forEach(e=>{l.observe(e)});const t=document.createElement("style");t.textContent=`
    .animate-in {
      animation: fadeInUp 0.6s ease-out forwards;
    }
    
    section:not(.animate-in),
    .project-card:not(.animate-in),
    .assignment-card:not(.animate-in) {
      opacity: 0;
      transform: translateY(30px);
    }
  `,document.head.appendChild(t);function n(e,o,i=100){let s=0;e.innerHTML="";function f(){s<o.length&&(e.innerHTML+=o.charAt(s),s++,setTimeout(f,i))}f()}window.addEventListener("load",()=>{const e=document.querySelector(".hero-title");if(e){const o=e.textContent;n(e,o,80)}});function c(){const e=document.querySelector("#contact-form");e&&e.addEventListener("submit",o=>{o.preventDefault(),alert("Thank you for your message! I'll get back to you soon.")})}c(),document.querySelectorAll(".skill-tag, .tech-tag").forEach((e,o)=>{e.style.animationDelay=`${o*.1}s`,e.classList.add("animate-in")}),window.addEventListener("scroll",()=>{const e=window.pageYOffset,o=document.querySelector(".hero"),i=document.querySelector("#particles-js");if(o&&i){const s=e*-.5;i.style.transform=`translateY(${s}px)`}}),window.addEventListener("load",()=>{document.body.classList.add("loaded")});const u=document.createElement("style");u.textContent=`
    body:not(.loaded) {
      overflow: hidden;
    }
    
    body:not(.loaded)::before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, #667eea, #764ba2);
      z-index: 9999;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    body:not(.loaded)::after {
      content: 'Loading...';
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: white;
      font-size: 1.5rem;
      font-weight: 600;
      z-index: 10000;
      animation: pulse 1.5s infinite;
    }
    
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }
    
    body.loaded::before,
    body.loaded::after {
      display: none;
    }
  `,document.head.appendChild(u)});
