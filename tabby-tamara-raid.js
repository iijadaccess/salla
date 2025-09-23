document.addEventListener('DOMContentLoaded', () => {
  const SAR_ICON_HTML = '<i class="sicon-sar"></i>';
  const TABBY_LOGO = `<img src="https://cdn.salla.network/cdn-cgi/image/fit=scale-down,width=58,height=58,onerror=redirect,format=auto/images/payment/tabby_installment_mini.png" alt="تابي" class="h-4 w-auto align-middle">`;
  const TAMARA_LOGO = `<img src="https://cdn.tamara.co/widget-v2/assets/tamara-grad-ar.a20a9a81.svg" alt="تمارا" class="h-4 w-auto align-middle">`;

  const parsePrice = str =>
    Number(str.replace(/[^\d.,]/g, '').replace(/,/g, '').replace(/٫/g, '.')) || 0;

  const formatPrice = n =>
    n.toLocaleString('ar-EG', { minimumFractionDigits: 0, maximumFractionDigits: 0 });

  function addInstallmentInfo(card) {
    // منع التكرار
    if (card.querySelector('.installment-block')) return;

    const priceEl = card.querySelector('.s-product-card-price');
    if (!priceEl) return;

    const basePrice = parsePrice(priceEl.textContent.trim());
    if (!basePrice) return;

    const installment = basePrice / 4;

    // البلوك المستقل
    const html = `
      <div class="installment-block border border-gray-200 rounded-lg p-2 mt-2 text-center">
        <div class="installment-text flex gap-1.5 items-center justify-center whitespace-nowrap text-gray-600 text-sm mb-1">
          <span class="installment-label">قسط بداية من</span>
          <span class="installment-amount font-bold">${formatPrice(installment)}</span>
          ${SAR_ICON_HTML}
        </div>
        <div class="installment-logos flex gap-2 justify-center items-center">
          ${TABBY_LOGO}
          ${TAMARA_LOGO}
        </div>
      </div>
    `;

    // نضيفه بعد السعر كبلوك منفصل
    priceEl.insertAdjacentHTML('afterend', html);
  }

  function enhanceCard(card) {
    addInstallmentInfo(card);
  }

  // أول تحميل
  document.querySelectorAll('custom-salla-product-card').forEach(enhanceCard);

  // راقب إضافات جديدة
  new MutationObserver(muts => {
    muts.forEach(m => m.addedNodes.forEach(node => {
      if (node.matches?.('custom-salla-product-card')) enhanceCard(node);
      node.querySelectorAll?.('custom-salla-product-card').forEach(enhanceCard);
    }));
  }).observe(document.body, { childList: true, subtree: true });
});
