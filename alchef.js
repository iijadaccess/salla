// ✅ WhatApp Widget
const link = Object.assign(document.createElement('a'), {
    href: "https://wa.me/+966557378584",
    target: "_blank",
    innerHTML: `<img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" style="position:fixed;bottom:20px;right:20px;width:60px;height:60px;cursor:pointer;z-index:999">`
  });
  document.body.appendChild(link);
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
