// BUSCA //
document.addEventListener("DOMContentLoaded", function() {
  const searchInput = document.getElementById('searchInput');
  const searchModal = document.getElementById('searchModal');
  const closeSearchModal = document.getElementById('closeSearchModal');
  const searchResultsList = document.getElementById('searchResultsList');

  if (!searchInput || !searchModal) return;

  // Lista com todos os produtos da loja (o catálogo completo)
  const produtosDisponiveis = [
    { nome: "Perfume Artesanal de Capim Limão", preco: "R$ 79,90", imagem: "sua-imagem.jpg", link: "produto-capim.html" },
    { nome: "Sabonete Artesanal de Fubá", preco: "R$ 25,00", imagem: "sua-imagem2.jpg", link: "#" },
    { nome: "Esfoliante Corporal de Mel", preco: "R$ 45,00", imagem: "sua-imagem3.jpg", link: "#" },
    { nome: "Perfume Botânico Lavanda", preco: "R$ 89,90", imagem: "sua-imagem4.jpg", link: "#" }
  ];

  searchInput.addEventListener('input', (e) => {
    const termo = e.target.value.toLowerCase().trim();

    if (termo.length > 0) {
      searchModal.style.display = 'flex';
      searchResultsList.innerHTML = '';

      let encontrados = 0;

      // Filtra os produtos que coincidem com a pesquisa
      produtosDisponiveis.forEach(produto => {
        if (produto.nome.toLowerCase().includes(termo)) {
          encontrados++;
          
          const item = document.createElement('a');
          item.href = produto.link;
          item.className = 'search-result-card';
          
          item.innerHTML = `
            <img src="${produto.imagem}" alt="" style="width: 50px; height: 50px; object-fit: cover; border-radius: 6px;">
            <div>
              <h4 style="margin: 0 0 4px 0; font-size: 14px; color: #333;">${produto.nome}</h4>
              <span style="font-size: 13px; font-weight: bold; color: #111;">${produto.preco}</span>
            </div>
          `;
          
          searchResultsList.appendChild(item);
        }
      });

      if (encontrados === 0) {
        searchResultsList.innerHTML = '<p style="color: #777; text-align: center; padding: 10px;">Nenhum produto encontrado.</p>';
      }
    } else {
      searchModal.style.display = 'none';
    }
  });

  if (closeSearchModal) {
    closeSearchModal.addEventListener('click', () => {
      searchModal.style.display = 'none';
      searchInput.value = '';
    });
  }

  window.addEventListener('click', (e) => {
    if (e.target === searchModal) {
      searchModal.style.display = 'none';
    }
  });
});





// WHASTAPP //
function enviarPedidoWhatsApp() {
  // Substitua pelo seu número de WhatsApp com DDI e DDD (ex: 5511999999999)
  const numeroWhatsApp = "551199624974"; 

  // Exemplo de como recolher os dados do carrinho (ajuste conforme as classes do seu HTML)
  const itensCarrinho = document.querySelectorAll('.item-carrinho'); 
  
  if (itensCarrinho.length === 0) {
    alert("O seu carrinho está vazio!");
    return;
  }

  let mensagem = "Olá! Gostaria de fazer o seguinte pedido:\n\n*Produtos:* \n";
  let totalGeral = 0;

  itensCarrinho.forEach(item => {
    const nome = item.querySelector('.nome-produto').innerText;
    const quantidade = item.querySelector('.qtd-produto').value; // ou .innerText dependendo se for input ou span
    const precoUnitario = parseFloat(item.querySelector('.preco-produto').innerText.replace('R$', '').replace(',', '.').trim());
    
    const subtotal = precoUnitario * quantidade;
    totalGeral += subtotal;

    mensagem += `- ${quantidade}x ${nome} (R$ ${subtotal.toFixed(2)})\n`;
  });

  mensagem += `\n*Total do Pedido: R$ ${totalGeral.toFixed(2)}*`;

  // Codifica a mensagem para o formato de URL do WhatsApp
  const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

  // Abre o WhatsApp numa nova aba
  window.open(urlWhatsApp, '_blank');
}






// CARRINHO //
document.addEventListener("DOMContentLoaded", function() {
  const cartBtn = document.getElementById('cartBtn');
  const cartModal = document.getElementById('cartModal');
  const closeCartModal = document.getElementById('closeCartModal');

  if (cartBtn && cartModal) {
    cartBtn.addEventListener('click', () => {
      cartModal.style.display = 'flex';
    });

    if (closeCartModal) {
      closeCartModal.addEventListener('click', () => {
        cartModal.style.display = 'none';
      });
    }
  }
});