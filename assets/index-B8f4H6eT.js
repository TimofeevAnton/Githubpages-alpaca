(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();c();function c(){a(),u()}function a(){document.querySelectorAll(".has-sub-menu").forEach(s=>{s.addEventListener("mouseenter",r=>{window.innerWidth<=992||r.target.closest(".has-sub-menu").classList.add("active")}),s.addEventListener("mouseleave",r=>{window.innerWidth<=992||r.target.closest(".has-sub-menu").classList.remove("active")})})}function u(){const i=document.querySelector(".header__burger"),s=document.querySelector(".menu"),r=document.querySelector("body"),o=document.querySelectorAll(".has-sub-menu"),e=()=>{i.classList.toggle("active"),s.classList.toggle("active"),r.classList.toggle("navBarOpened")};i.addEventListener("click",e),s.addEventListener("click",t=>{t.target.classList.contains("menu")&&(t.stopPropagation(),e())},!0),o.forEach(t=>{t.addEventListener("click",n=>{console.log("click"),!(window.innerWidth>992)&&(n.stopPropagation(),(n.target.classList.contains("has-sub-menu")||n.target.parentElement.classList.contains("has-sub-menu"))&&t.classList.toggle("active"))})})}