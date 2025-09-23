/* Add custom Js code below */ 
/* === Installment line (قسط بداية من …)  =========================== */
document.addEventListener('DOMContentLoaded', () => {
  const SAR_ICON_HTML = '<i class="sicon-sar"></i>';  // reuse store icon

  const TABBY_LOGO = `
    <img src="https://cdn.salla.network/cdn-cgi/image/fit=scale-down,width=58,height=58,onerror=redirect,format=auto/images/payment/tabby_installment_mini.png"
         alt="تابي" class="h-4 w-auto align-middle">
  `;

  const TAMARA_LOGO = `
    <img src="https://cdn.tamara.co/widget-v2/assets/tamara-grad-ar.a20a9a81.svg"
         alt="تمارا" class="h-4 w-auto align-middle">
  `;

  /* -------- helpers -------- */
  const parsePrice = str =>
    Number(
      str.replace(/[^\d.,]/g, '')   // keep digits + separators
         .replace(/,/g, '')         // drop thousands sep
         .replace(/٫/g, '.')        // Arabic dec → dot
    ) || 0;

  const formatPrice = n => n.toLocaleString('ar-EG', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });

  /* -------- main injector -------- */
  function addInstallmentInfo(card) {
    if (card.querySelector('.installment-info')) return; // avoid duplicates

    const saleEl   = card.querySelector('.sale-price');
    const normalEl = card.querySelector('.regular-or-normal-price');

    const basePrice = saleEl && saleEl.textContent.trim()
                     ? parsePrice(saleEl.textContent)
                     : parsePrice(normalEl.textContent);

    if (!basePrice) return;  // guard

    const installment = basePrice / 4;

    const html = `
      <div class="installment-info flex flex-col gap-1 items-center">
        <!-- top row: label + amount + SAR -->
        <div class="installment-text flex gap-1.5 items-center whitespace-nowrap text-gray-500 text-sm">
          <span class="installment-label">قسط بداية من</span>
          <span class="installment-amount font-bold">${formatPrice(installment)}</span>
          ${SAR_ICON_HTML}
        </div>

        <!-- second row: BNPL logos -->
        <div class="installment-logos flex gap-1.5 items-center">
          ${TABBY_LOGO}
          ${TAMARA_LOGO}
        </div>
      </div>
    `;

    const priceWrapper = card.querySelector('.price-wrapper');
    if (priceWrapper) priceWrapper.insertAdjacentHTML('afterend', html);
  }

  /* -------- initial + dynamic pass -------- */
  document.querySelectorAll('custom-salla-product-card')
          .forEach(addInstallmentInfo);

  new MutationObserver(muts => {
    muts.forEach(m =>
      m.addedNodes.forEach(node => {
        if (node.matches?.('custom-salla-product-card')) addInstallmentInfo(node);
        node.querySelectorAll?.('custom-salla-product-card')
            .forEach(addInstallmentInfo);
      })
    );
  }).observe(document.body, {childList: true, subtree: true});
});








/* === Salla product-card enhancements ==================================== */
document.addEventListener('DOMContentLoaded', () => {
  /* ---------- constants ------------------------------------------------- */
  const SAR_ICON_HTML = '<i class="sicon-sar"></i>';

  const TABBY_LOGO = `
    <img src="https://cdn.salla.network/cdn-cgi/image/fit=scale-down,width=58,height=58,onerror=redirect,format=auto/images/payment/tabby_installment_mini.png"
         alt="تابي" class="h-4 w-auto align-middle">`;

  const TAMARA_LOGO = `
    <img src="https://cdn.tamara.co/widget-v2/assets/tamara-grad-ar.a20a9a81.svg"
         alt="تمارا" class="h-4 w-auto align-middle">`;

  const WHATSAPP_BASE = 'https://wa.me/966591710099?text=';

  /* ---------- helper fns ------------------------------------------------ */
  const parsePrice = str =>
    Number(
      str.replace(/[^\d.,]/g, '')       // keep digits & separators
         .replace(/,/g, '')             // drop thousands sep
         .replace(/٫/g, '.')            // Arabic dec → dot
    ) || 0;

  const formatPrice = n => n.toLocaleString('ar-EG', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });

  /* ---------- card-level enhancer -------------------------------------- */
  function enhanceCard(card) {
    addInstallmentInfo(card);
    addWaInquiryButton(card);
  }

  /* === 1. installment block ============================================ */
  function addInstallmentInfo(card) {
    if (card.querySelector('.installment-info')) return;   // already done

    const saleEl   = card.querySelector('.sale-price');
    const normalEl = card.querySelector('.regular-or-normal-price');

    const basePrice = saleEl && saleEl.textContent.trim()
                     ? parsePrice(saleEl.textContent)
                     : parsePrice(normalEl.textContent);

    if (!basePrice) return;

    const installment = basePrice / 4;

    const html = `
      <div class="installment-info flex flex-col gap-1 items-center">
        <div class="installment-text flex gap-1.5 items-center whitespace-nowrap text-gray-500 text-sm">
          <span class="installment-label">قسط بداية من</span>
          <span class="installment-amount font-bold">${formatPrice(installment)}</span>
          ${SAR_ICON_HTML}
        </div>
        <div class="installment-logos flex gap-1.5 items-center">
          ${TABBY_LOGO}
          ${TAMARA_LOGO}
        </div>
      </div>`;

    const priceWrapper = card.querySelector('.price-wrapper');
    if (priceWrapper) priceWrapper.insertAdjacentHTML('afterend', html);
  }

  /* === 2. WhatsApp inquiry button for نفدت الكمية ====================== */
  function addWaInquiryButton(card) {
    /* guard: already added? */
    if (card.querySelector('.wa-inquiry-container')) return;

    /* guard: “sold-out” badge present? */
    const soldOut = card.querySelector('.promotion-badge-wrap .promotion-badge');
    if (!soldOut || soldOut.textContent.trim() !== 'نفدت الكمية') return;

    /* get product title */
    const titleEl = card.querySelector('h2.product-entry__title a');
    if (!titleEl) return;
    const title = titleEl.textContent.trim();

    /* build WA URL */
    const msg   = encodeURIComponent(`استفسار عن ${title}`);
    const waURL = WHATSAPP_BASE + msg;

    /* markup — same Salla button style */
    const html = `
      <div class="wa-inquiry-container add-to-cart-conatiner w-full">
        <a href="${waURL}" target="_blank" rel="noopener"
           class="s-button-element s-button-btn s-button-solid s-button-large s-button-wide s-button-primary flex items-center justify-center gap-1">
          <i class="inline-block sicon-whatsapp"></i>
          <span class="overflow-hidden text-ellipsis">اطلب عبر واتساب</span>
        </a>
      </div>`;

    /* append as last child inside the details flex-column */
    const priceWrapper = card.querySelector('.price-wrapper');
    if (priceWrapper) {
      priceWrapper.parentElement.insertAdjacentHTML('beforeend', html);
    }
  }

  /* ---------- initial + dynamic pass ----------------------------------- */
  document.querySelectorAll('custom-salla-product-card').forEach(enhanceCard);

  new MutationObserver(muts => {
    muts.forEach(m =>
      m.addedNodes.forEach(node => {
        if (node.matches?.('custom-salla-product-card')) enhanceCard(node);
        node.querySelectorAll?.('custom-salla-product-card').forEach(enhanceCard);
      })
    );
  }).observe(document.body, {childList: true, subtree: true});
});



document.addEventListener("DOMContentLoaded", function () {
  // Find all countdown elements
  var countdowns = document.querySelectorAll(".countdown-wrap");

  countdowns.forEach(function (el) {
    if (el.textContent.includes("ينتهي التخفيض بعد:")) {
      el.style.display = "none"; // Hide the element
    }
  });
});
