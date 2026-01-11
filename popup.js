// Just Js Code
(function () {

  function showPopup(force = false) {

    if (!force && window.sessionStorage && sessionStorage.getItem("popupShown")) {
      return;
    }

    if (document.getElementById("customPopup")) return;

    var overlay = document.createElement("div");
    overlay.id = "customPopup";
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.right = "0";
    overlay.style.bottom = "0";
    overlay.style.background = "rgba(0,0,0,0.6)";
    overlay.style.zIndex = "999999";
    overlay.style.display = "flex";
    overlay.style.alignItems = "center";
    overlay.style.justifyContent = "center";
    overlay.style.opacity = "0";
    overlay.style.transition = "opacity 0.4s ease";

    var box = document.createElement("div");
    box.style.background = "#fff";
    box.style.padding = "40px";
    box.style.borderRadius = "12px";
    box.style.width = "90%";
    box.style.maxWidth = "360px";
    box.style.textAlign = "center";
    box.style.position = "relative";
    box.style.transform = "scale(0.85)";
    box.style.transition = "transform 0.4s ease";

    var closeBtn = document.createElement("span");
    closeBtn.innerHTML = "×";
    closeBtn.style.position = "absolute";
    closeBtn.style.top = "10px";
    closeBtn.style.left = "15px";
    closeBtn.style.cursor = "pointer";
    closeBtn.style.fontSize = "22px";

    var logo = document.createElement("img");
    logo.src = "https://cdn.salla.sa/cdn-cgi/image/fit=scale-down,width=400,height=400,format=auto/XBGbn/BfRBoAMpzZS05dTRDLAvRucL7xked2kDhYJVhD1g.png";
    logo.style.height = "50px";
    logo.style.margin = "20px auto";
    logo.style.display = "block";

    var title = document.createElement("h3");
    title.innerHTML = "عرض خاص ليوم السبت 🔥";
    title.style.marginBottom = "10px";

    var time = document.createElement("p");
    time.innerHTML = "الساعة 10 مساءً";

    var desc = document.createElement("p");
    desc.innerHTML = "امتلك المنتج بريال واحد فقط ✨";

    function closePopup() {
      overlay.style.opacity = "0";
      box.style.transform = "scale(0.85)";
      setTimeout(function () {
        overlay.remove();
        sessionStorage.setItem("popupShown", "true");
      }, 400);
    }

    closeBtn.onclick = closePopup;

    overlay.onclick = function (e) {
      if (e.target === overlay) closePopup();
    };

    box.appendChild(closeBtn);
    box.appendChild(logo);
    box.appendChild(title);
    box.appendChild(time);
    box.appendChild(desc);

    overlay.appendChild(box);
    document.body.appendChild(overlay);

    // إظهار البوب اب
    setTimeout(function () {
      overlay.style.opacity = "1";
      box.style.transform = "scale(1)";
    }, 50);

    // ⏱️ غلق تلقائي بعد 5 ثواني
    setTimeout(closePopup, 5000);
  }

  /* ========== ويدجيت الشمال ========== */

  var widget = document.createElement("div");
  widget.innerHTML = "🔥 عرض";
  widget.style.position = "fixed";
  widget.style.left = "0";
  widget.style.top = "50%";
  widget.style.transform = "translateY(-50%)";
  widget.style.background = "#ff4d4f";
  widget.style.color = "#fff";
  widget.style.padding = "12px 16px";
  widget.style.borderRadius = "0 10px 10px 0";
  widget.style.cursor = "pointer";
  widget.style.zIndex = "999998";
  widget.style.fontWeight = "bold";

  widget.onclick = function () {
    sessionStorage.removeItem("popupShown");
    showPopup(true);
  };

  document.body.appendChild(widget);

  // أول مرة يظهر بعد ثانيتين
  setTimeout(showPopup, 2000);

})();


////////////////////////////////////////////////////////
In Js & CSS
(function () {
  function showPopup(force = false) {

    if (!force && sessionStorage.getItem("popupShown")) return;
    if (document.getElementById("customPopup")) return;
    const overlay = document.createElement("div");
    overlay.id = "customPopup";
    const box = document.createElement("div");
    box.id = "customPopupBox";
    const closeBtn = document.createElement("span");
    closeBtn.id = "customPopupClose";
    closeBtn.innerHTML = "×";
    const logo = document.createElement("img");
    logo.src = "https://cdn.salla.sa/cdn-cgi/image/fit=scale-down,width=400,height=400,format=auto/XBGbn/BfRBoAMpzZS05dTRDLAvRucL7xked2kDhYJVhD1g.png";
    logo.style.height = "50px";
    logo.style.margin = "20px auto";
    logo.style.display = "block";
    const title = document.createElement("h3");
    title.innerHTML = "عرض خاص ليوم السبت 🔥";
    const time = document.createElement("p");
    time.innerHTML = "الساعة 10 مساءً";
    const desc = document.createElement("p");
    desc.innerHTML = "امتلك المنتج بريال واحد فقط ✨";
    function closePopup() {
      overlay.classList.remove("show");
      setTimeout(() => {
        overlay.remove();
        sessionStorage.setItem("popupShown", "true");
      }, 400);
    }
    closeBtn.onclick = closePopup;
    overlay.onclick = e => e.target === overlay && closePopup();
    box.append(closeBtn, logo, title, time, desc);
    overlay.appendChild(box);
    document.body.appendChild(overlay);
    setTimeout(() => overlay.classList.add("show"), 50);
    // ⏱️ غلق تلقائي
    setTimeout(closePopup, 5000);
  }
  /* Widget */
  const widget = document.createElement("div");
  widget.id = "popupWidget";
  widget.innerHTML = "🔥 عرض خاص";  
  widget.onclick = () => {
    sessionStorage.removeItem("popupShown");
    showPopup(true);
  };
  document.body.appendChild(widget);
  // أول مرة
  setTimeout(showPopup, 2000);
})();




/* ===== Popup ===== */
#customPopup {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,.6);
  z-index: 999999;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity .4s ease;
}
#customPopup h3 {
  margin-bottom: 20px;
}

#customPopup.show {
  opacity: 1;
}

#customPopupBox {
  background: #fff;
  padding: 80px 40px;
  border-radius: 12px;
  width: 90%;
  max-width: 360px;
  text-align: center;
  position: relative;
  transform: scale(.85);
  transition: transform .4s ease;
}

#customPopup.show #customPopupBox {
  transform: scale(1);
}

#customPopupClose {
  position: absolute;
  top: 10px;
  left: 15px;
  cursor: pointer;
  font-size: 22px;
}

/* ===== Widget ===== */
#popupWidget {
  position: fixed;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  background: var(--main);
  color: #fff;
  padding: 12px 16px;
  border-radius: 0 10px 10px 0;
  cursor: pointer;
  z-index: 999998;
  font-weight: bold;
}
