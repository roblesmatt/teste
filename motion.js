

// 2. TEXTO (ÚNICA COISA COM SCROLL)
      document.addEventListener("DOMContentLoaded", () => {
        const blocks = document.querySelectorAll(".op-logic");
        window.addEventListener("scroll", () => {
          const screenCenter = window.innerHeight / 2;
          let closestBlock = null;
          let minDistance = Infinity;
          blocks.forEach((block) => {
            const rect = block.getBoundingClientRect();
            const blockCenter = rect.top + rect.height / 2;
            const distanceToCenter = Math.abs(screenCenter - blockCenter);
            if (distanceToCenter < minDistance) {
              minDistance = distanceToCenter;
              closestBlock = block;
            }
          });
          blocks.forEach((block) => {
            block.classList.remove("active");
          });
          if (closestBlock) {
            closestBlock.classList.add("active");
          }
        });
        if (window.innerWidth >= 1024) {
          // Desktop/iPad Landscape: hover play, mouseleave seek(0)
          lotties.forEach((lottie) => {
            lottie.addEventListener("mouseenter", () => lottie.play());
            lottie.addEventListener("mouseleave", () => {
              lottie.pause();
              lottie.seek(0);
            });
            lottie.style.opacity = "1";
          });
        } else {
          // Mobile/tablet: play/pause conforme o card centraliza na tela, e ativa o botão junto
          function handleLottieScrollPlay() {
            const screenCenter = window.innerHeight / 2;
            let closest = null;
            let minDist = Infinity;
            lotties.forEach((lottie) => {
              const rect = lottie.getBoundingClientRect();
              const center = rect.top + rect.height / 2;
              const dist = Math.abs(screenCenter - center);
              if (dist < minDist) {
                minDist = dist;
                closest = lottie;
              }
            });
            lotties.forEach((lottie) => {
              const cardLink = lottie.closest('.card-projeto-link');
              if (lottie === closest) {
                // Só ativa se o centro do card está dentro da viewport
                const rect = lottie.getBoundingClientRect();
                const center = rect.top + rect.height / 2;
                if (center > 0 && center < window.innerHeight) {
                  lottie.play();
                  if(cardLink) cardLink.classList.add('ativo');
                } else {
                  lottie.pause();
                  lottie.seek(0);
                  if(cardLink) cardLink.classList.remove('ativo');
                }
              } else {
                lottie.pause();
                lottie.seek(0);
                if(cardLink) cardLink.classList.remove('ativo');
              }
            });
          }
          window.addEventListener("scroll", handleLottieScrollPlay);
          window.addEventListener("resize", handleLottieScrollPlay);
          // Inicializa o estado correto ao carregar
          setTimeout(handleLottieScrollPlay, 100);
          // Garante opacidade sempre 1
          lotties.forEach((lottie) => {
            lottie.style.opacity = "1";
          });
        }
      });







      
      // 5. DESATIVAR MENU DE CONTEXTO (BOTÃO DIREITO)
      document.addEventListener("contextmenu", (e) => {
        e.preventDefault();
      });

      // 6. FORÇAR REMOÇÃO DE SELEÇÃO AZUL COM JAVASCRIPT
      document.addEventListener("mousedown", (e) => {
        if (e.button === 0) {
          // Remove qualquer seleção de texto
          if (window.getSelection) {
            window.getSelection().removeAllRanges();
          }
        }
      });

      // Remover seleção ao focar em qualquer elemento
      document.addEventListener(
        "focus",
        (e) => {
          e.target.style.outline = "none";
          e.target.style.boxShadow = "none";
        },
        true,
      );

      // Forçar todos os elementos a não ter seleção
      document.querySelectorAll("*").forEach((el) => {
        el.style.setProperty(
          "-webkit-tap-highlight-color",
          "transparent",
          "important",
        );
        el.style.setProperty("-webkit-user-select", "none", "important");
        el.style.setProperty("-webkit-touch-callout", "none", "important");
        el.style.setProperty("outline", "none", "important");
        el.style.setProperty("box-shadow", "none", "important");
      });

    //!-- Exibe botões dos cards Lottie apenas quando o card está visível na tela (mobile/tablet) -->
      if (window.matchMedia('(max-width: 1024px)').matches) {
        document.addEventListener('DOMContentLoaded', function () {
          const cards = document.querySelectorAll('.card-projeto-link');
          const observer = new window.IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  entry.target.classList.add('ativo');
                } else {
                  entry.target.classList.remove('ativo');
                }
              });
            },
            { threshold: 0.5 }
          );
          cards.forEach((card) => observer.observe(card));
        });
      }

