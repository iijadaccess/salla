/* Add custom Js styles below */ 
document.addEventListener("DOMContentLoaded", function () {

  const target = document.querySelector('.store-footer__inner .grid > div:last-child');
  if (!target) return;

  /* نمسح أي محتوى فاضي */
  target.innerHTML = "";

  /* نخلي العمود كله قابل للضغط */
  target.style.cursor = "pointer";
  target.style.textAlign = "right";
  target.style.direction = "rtl";

  /* المحتوى */
  target.innerHTML = `
    <h3 style="font-size:1.125rem;font-weight:bold;margin-bottom:10px;text-align: center;">
      📍 عنوان المتجر
    </h3>

    <img 
      src="https://cdn.salla.sa/EZjOAY/products/BtBDCiwRT2Ye4Wj1MZMVOTsx4B7ziuBcCPip9AcC.png"
      alt="موقع المتجر"
      style="margin-top: 25px;width:55%;border-radius:12px;margin-bottom:15px;place-self: center;"
    />

    <p style="font-size:1rem;line-height:1.8;margin:0;width: 80%;
    place-self: anchor-center;text-align: center;">
      3562 6359 Prince Mohammed Bin Fahd Road, Al Qusur, Dhahran 34247, Saudi Arabia<br>
      طريق الأمير محمد بن فهد بن عبدالعزيز<br>
      الظهران
    </p>
  `;

  /* عند الضغط يفتح الخريطة */
  target.addEventListener("click", function () {
    window.open(
      "https://maps.app.goo.gl/x85yqtFuMibYzw1N8",
      "_blank"
    );
  });

});
