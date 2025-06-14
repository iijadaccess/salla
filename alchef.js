// ✅ WhatApp Widget
let a=document.createElement('a'),i=document.createElement('img');
a.href="https://wa.me/966557378584";a.target="_blank";
Object.assign(a.style,{position:"fixed",bottom:"20px",right:"20px",zIndex:"999",cursor:"pointer"});
Object.assign(i,{src:"https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg",width:60,height:60});
a.appendChild(i);document.body.appendChild(a);
;
///////////////////////////////
// CopyRights
document.querySelector('.copyright-text').innerHTML = `صنع ${new Date().getFullYear()} | الشيف احمد ابو هاني | بواسطة شركة <a href="https://iijadagency.com" target="_blank">ايجاد</a>`;

// ✅ Scroll & Section
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('section');

    function checkVisibility() {
        sections.forEach(section => {
            const position = section.getBoundingClientRect();
            if (position.top < window.innerHeight && position.bottom >= 0) {
                section.classList.add('visible');
            } else {
                section.classList.remove('visible');
            }
        });
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // Check on load
});
