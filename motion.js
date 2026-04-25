// UNIFICAÇÃO E SIMPLIFICAÇÃO: Bloqueio de Menu e Seleção
document.addEventListener('contextmenu', event => event.preventDefault());

// Limpeza de qualquer seleção residual ao clicar (Garante que nada fique "preso")
document.addEventListener('mousedown', () => {
    if (window.getSelection) window.getSelection().removeAllRanges();
});


