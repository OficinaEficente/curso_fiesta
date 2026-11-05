'use strict';
document.querySelectorAll('[data-label]').forEach(link=>link.addEventListener('click',()=>{if(typeof window.gtag==='function')window.gtag('event','contact_fiesta',{event_label:link.dataset.label,content_name:'Curso Fiesta Visteon'});}));
