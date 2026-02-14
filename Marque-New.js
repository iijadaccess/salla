@media (min-width: 1280px) {
  .s-advertisement-content {
    max-width: 100% !important;
  }
}
.s-advertisement-content {
  position: relative !important;
  overflow: hidden !important;
}
.s-advertisement-content-main {
  opacity: 0 !important;
  white-space: nowrap !important;
}
.s-advertisement-content-icon {
  margin-inline-end: 8px;
}
.s-advertisement-content::before {
  content:
    attr(data-text) "\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0•\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0"
    attr(data-text) "\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0•\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0"
    attr(data-text) "\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0•\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0"
    attr(data-text) "\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0•\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0"
    attr(data-text) "\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0•\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0"
    attr(data-text) "\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0•\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0"
    attr(data-text) "\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0•\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0"
    attr(data-text) "\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0•\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0"
    attr(data-text) "\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0•\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0"
    attr(data-text) "\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0•\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0"
    attr(data-text) "\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0•\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0"
    attr(data-text) "\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0•\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0"
    attr(data-text) "\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0•\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0"
    attr(data-text) "\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0•\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0";

  position: absolute;
  left: 0;
  top: 10px;
  white-space: nowrap;
  will-change: transform;
  animation: snakeMarquee 120s linear infinite;
  font-size: 16px;
  color: #fff;
}
@keyframes snakeMarquee {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(0); }
}
@media (max-width: 600px) {
  .s-advertisement-content::before {
    animation-duration: 100s;
    top: 12px;
  }
}




// Marquee
(function () {

  function setText() {
    const el = document.querySelector('.s-advertisement-content');
    const textEl = document.querySelector('.s-advertisement-content-main');

    if (!el || !textEl) return false;

    const txt = textEl.textContent.trim();
    if (!txt) return false;

    el.setAttribute('data-text', txt);
    return true;
  }

  // نجرب كذا مرة لأن سلة بتتأخر في تحميل الشريط خصوصاً على الجوال
  let tries = 0;
  const timer = setInterval(() => {
    tries++;

    if (setText() || tries > 30) {
      clearInterval(timer);
    }
  }, 200);

})();
