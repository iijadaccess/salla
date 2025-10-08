////////// الشريط المتحرك //////////
(function(){
  function initAdSlider(){
    const ad = document.querySelector('.s-advertisement');
    if(!ad || ad.dataset.adSliderInited === '1') return;
    ad.dataset.adSliderInited = '1';

    // استخراج النص والرابط
    const source = ad.querySelector('.s-advertisement-content-main a, .s-advertisement-content a, .s-advertisement-content-main, a');
    let text = source ? (source.textContent.trim() || 'تسوق الآن - عروض مميزة') : 'تسوق الآن - عروض مميزة';
    let href = source && source.getAttribute ? (source.getAttribute('href') || '#') : '#';

    // إنشاء الهيكل
    const mask = document.createElement('div');
    mask.className = 'ad-slider-mask';
    const track = document.createElement('div');
    track.className = 'ad-slider-track';
    mask.appendChild(track);

    const wrapper = ad.querySelector('.s-advertisement-content') || ad;
    wrapper.innerHTML = '';
    wrapper.appendChild(mask);

    // إنشاء عنصر واحد لتكراره
    function makeItem(){
      const item = document.createElement('div');
      item.className = 'ad-slider-item';
      item.innerHTML = `<span class="ad-icon">🔔</span> <a href="${href}" class="ad-item-link">${text}</a>`;
      return item;
    }

    // نكرر العناصر حسب عرض الشاشة
    const screenWidth = window.innerWidth;
    const baseItem = makeItem();
    document.body.appendChild(baseItem); // نضيفه مؤقتًا للقياس
    const itemWidth = baseItem.offsetWidth || 200;
    baseItem.remove();

    const repeatCount = Math.ceil((screenWidth * 2) / itemWidth); // يضمن تغطية ضعف العرض
    for(let i=0;i<repeatCount;i++) track.appendChild(makeItem());

    // الحركة اليدوية (سلسة وسريعة)
    let pos = 0;
    const speed = 1.2; // ← عدّل السرعة (أكبر = أسرع)
    function move(){
      pos -= speed;
      if (Math.abs(pos) >= track.scrollWidth / 2) pos = 0;
      track.style.transform = `translateX(${pos}px)`;
      requestAnimationFrame(move);
    }
    move();

    // زر الإغلاق
    let closeBtn = ad.querySelector('.s-advertisement-action, .s-ad-close-btn, .ad-close');
    if(!closeBtn){
      closeBtn = document.createElement('button');
      closeBtn.className = 's-ad-close-btn';
      closeBtn.innerHTML = '<i class="sicon-cancel"></i>';
      ad.appendChild(closeBtn);
    }
    closeBtn.onclick = ()=> ad.remove();
  }

  // تشغيل بعد تحميل العنصر فعليًا (يدعم سلة)
  const observer = new MutationObserver(() => {
    const ad = document.querySelector('.s-advertisement');
    if (ad && !ad.dataset.adSliderInited) initAdSlider();
  });
  observer.observe(document.body, {childList:true,subtree:true});

  if(document.readyState!=='loading') initAdSlider();
  else document.addEventListener('DOMContentLoaded', initAdSlider);
})();
