let a=document.createElement('a'),i=document.createElement('img');
a.href="https://wa.me/+966550807199";a.target="_blank";
Object.assign(a.style,{position:"fixed",bottom:"20px",right:"20px",zIndex:"999",cursor:"pointer"});
Object.assign(i,{src:"https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg",width:60,height:60});
a.appendChild(i);document.body.appendChild(a);
;
///////////////////////////////
// CopyRights
document.querySelector('.copyright-text').innerHTML = `صنع ${new Date().getFullYear()} | متجر براندات | بواسطة شركة <a href="https://iijadagency.com" target="_blank">ايجاد</a>`;

////////////////////////
let el = document.querySelector(".main-content > .flex.whitespace-nowrap.gap-4.items-center");

// قراءة الرقم من localStorage أو نبدأ من 19
let salesCount = localStorage.getItem("salesCount") || 7;

// تحويله لرقم + زيادة واحد
salesCount = parseInt(salesCount) + 1;

// حفظ القيمة الجديدة
localStorage.setItem("salesCount", salesCount);

// إنشاء العنصر وإضافته
if (el) {
  let info = document.createElement("span");
  info.className = "sales-info";
  info.textContent = `🔥 تم شراءه ${salesCount} مرة`;
  info.style.display = "block";
  info.style.marginTop = "8px";
  info.style.fontSize = "16px";
  info.style.color = "#d32f2f";
  el.appendChild(info);
}
////////////////////////
function addTamaraTabby() {
  document.querySelectorAll(".s-product-card-content-sub").forEach(function(el){
    if (!el.parentElement.querySelector(".tamara-tapilogo")) {
      let priceEl = el.querySelector(".s-product-card-price");
      if (!priceEl) return;

      let priceText = priceEl.innerText.replace(/[^\d]/g, "");
      let price = parseFloat(priceText);
      if (!price) return;

      let installment = Math.ceil(price / 4);

      let div = document.createElement("div");
      div.className = "tamara-tapilogo";
      Object.assign(div.style,{
        marginTop:"0px",
        marginBottom:"10px",
        textAlign:"center",
        display:"block",
        width:"100%"
      });

      const tabbyUrl = "https://cdn.salla.network/images/payment/tabby_installment_mini.png";
      div.innerHTML = `
        <div style="font-size:13px; color:#444; margin-bottom:6px;">
          قسط بداية من ${installment} ر.س
        </div>
        <div style="display:flex; justify-content:center; gap:12px; align-items:center;">
          <img src="${tabbyUrl}" alt="تابي" style="height:22px; max-width:80px;">
        </div>
      `;

      el.insertAdjacentElement("afterend", div);
    }
  });
}

// جرب كل ثانية لحد ما العناصر تتحمل
let interval = setInterval(() => {
  if (document.querySelector(".s-product-card-content-sub")) {
    addTamaraTabby();
    clearInterval(interval);
  }
}, 1000);
