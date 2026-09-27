document.addEventListener('DOMContentLoaded', () => {
  // 1. Controle da Seletor de Quantidade
  const btnMinus = document.getElementById('btnMinus');
  const btnPlus = document.getElementById('btnPlus');
  const qtyValue = document.getElementById('qtyValue');

  let currentQty = parseInt(qtyValue.textContent, 10) || 1;

  btnMinus.addEventListener('click', () => {
    if (currentQty > 1) {
      currentQty--;
      qtyValue.textContent = currentQty;
    }
  });

  btnPlus.addEventListener('click', () => {
    currentQty++;
    qtyValue.textContent = currentQty;
  });

  // 2. Controle da Galeria de Imagens
  const thumbs = document.querySelectorAll('.thumb');
  const mainImage = document.getElementById('mainImage');
  const prevThumbBtn = document.getElementById('prevThumb');
  const nextThumbBtn = document.getElementById('nextThumb');

  let currentIndex = 0;

  function updateMainImage(index) {
    thumbs.forEach((thumb, i) => {
      if (i === index) {
        thumb.classList.add('active');
      } else {
        thumb.classList.remove('active');
      }
    });

    const newSrc = thumbs[index].querySelector('img').getAttribute('src');
    
    // Efeito suave de transição na troca de imagem
    mainImage.style.opacity = '0';
    setTimeout(() => {
      mainImage.setAttribute('src', newSrc);
      mainImage.style.opacity = '1';
    }, 150);
  }

  thumbs.forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
      currentIndex = index;
      updateMainImage(currentIndex);
    });
  });

  if (prevThumbBtn) {
    prevThumbBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + thumbs.length) % thumbs.length;
      updateMainImage(currentIndex);
    });
  }

  if (nextThumbBtn) {
    nextThumbBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % thumbs.length;
      updateMainImage(currentIndex);
    });
  }

  // 3. Comportamento Estilo Sanfona/Acordeão Único (Opcional: Fecha os outros ao abrir um)
  const accordions = document.querySelectorAll('.accordion-item');

  accordions.forEach((acc) => {
    acc.addEventListener('toggle', () => {
      if (acc.open) {
        accordions.forEach((otherAcc) => {
          if (otherAcc !== acc) {
            otherAcc.removeAttribute('open');
          }
        });
      }
    });
  });
});