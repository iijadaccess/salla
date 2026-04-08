setInterval(function () {

  document.querySelectorAll('.product-card__content').forEach(function (card) {

    // منع التكرار
    if (card.dataset.tamara) return;

    var title = card.querySelector('.product-card__title');
    if (!title) return;

    var prices = card.querySelectorAll('.total-price');

    var price = null;

    prices.forEach(function (el) {

      // 🔥 تجاهل العناصر المخفية
      if (el.offsetParent === null) return;

      var text = el.innerText.trim();

      // تجاهل "-"
      if (text !== "-" && text.length > 0 && !price) {

        /// تحويل عربي → إنجليزي
text = text.replace(/[٠-٩]/g, d => "٠١٢٣٤٥٦٧٨٩".indexOf(d));

// 🔥 تحويل الفاصلة العربية لنقطة
text = text.replace(/٫/g, '.');

// تنظيف الرقم
text = text.replace(/[^\d.]/g, '');

        var num = parseFloat(text);

        if (num && num > 0) {
          price = num;
        }

      }

    });

    if (!price) return;

    // 🔥 تقريب قبل القسمة وبعدها (بدون كسور)
    var roundedPrice = Math.round(price);
    var installment = Math.round(roundedPrice / 4);

    // تحويل عربي
    installment = installment.toString().replace(/[0-9]/g, d => "٠١٢٣٤٥٦٧٨٩"[d]);

    // إنشاء البوكس
    var box = document.createElement("div");

    box.style = `
      display:flex;
      flex-direction:column;
      align-items:center;
      justify-content:center;
      margin-bottom:5px;
      padding:5px;
    `;

    // اللوجو
    var logo = document.createElement("img");
    logo.src = "https://cdn.tamara.co/widget-v2/assets/tamara-grad-ar.a20a9a81.svg";
    logo.style.width = "70px";
    logo.style.marginBottom = "5px";

    // النص
    var textEl = document.createElement("span");
    textEl.innerText = "تقسيط يبدأ من " + installment + " ريال ";
    textEl.style = `
      font-size:13px;
      color:#879591;
      font-weight:700;
      text-align:center;
    `;

    box.appendChild(logo);
    box.appendChild(textEl);

    // إضافة فوق اسم المنتج
    title.parentNode.insertBefore(box, title);

    // تعليم التنفيذ
    card.dataset.tamara = true;

  });

}, 2000);
