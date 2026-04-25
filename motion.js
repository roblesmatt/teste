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


