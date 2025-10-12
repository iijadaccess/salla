/* الشريط العام */
@media (min-width: 1280px) {
    .s-advertisement-content {
        max-width: 100%;
    }
}
.s-advertisement-content {
  position: relative;
  overflow: hidden;
}

/* مسار الحركة */
.s-advertisement-content-main {
  position: relative;
  display: flex;
  align-items: center;
  white-space: nowrap;
}

/* النص */
.s-advertisement-content-main a {
  display: inline-block;
  color: #fff;
  text-decoration: none;
  padding-inline: 2rem;
}

/* الأيقونة */
.s-advertisement-content-icon {
  margin-inline-end: 8px;
}

/* الشريط السحّاب (الثعبان) */
.s-advertisement-content::before {
  content: attr(data-text) "\00a0\00a0\00a0\00a0•\00a0\00a0\00a0\00a0\00a0\00a0"
          attr(data-text) "\00a0\00a0\00a0\00a0•\00a0\00a0\00a0\00a0\00a0\00a0"
          attr(data-text) "\00a0\00a0\00a0\00a0•\00a0\00a0\00a0\00a0\00a0\00a0"
          attr(data-text);
  position: absolute;
  left: 0;
  top: 10px;
  white-space: nowrap;
  animation: snakeMarquee 10s linear infinite;
  font-size: 16px;
  color: #fff;
}



/* نخفي النص الأصلي */
.s-advertisement-content-main {
  opacity: 0;
}

/* حركة الثعبان */
@keyframes snakeMarquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

/* للجوال */
@media (max-width: 600px) {
  .s-advertisement-content::before {
    font-size: 14px;
    animation-duration: 20s;
  }
}



////////////////////////////////////////////////////////////
const observer = new MutationObserver(() => {
  const el = document.querySelector('.s-advertisement-content');
  const textEl = document.querySelector('.s-advertisement-content-main a');
  
  if (el && textEl) {
    el.setAttribute('data-text', textEl.textContent.trim());

    // 🟢 نجعل الشريط كله قابل للضغط
    el.style.cursor = 'pointer';
    el.addEventListener('click', () => {
      window.open(textEl.href, textEl.target || '_self');
    });

    observer.disconnect();
  }
});

observer.observe(document.body, { childList: true, subtree: true });
