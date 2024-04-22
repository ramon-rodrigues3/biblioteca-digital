
var pdf_url = "imagens/baby.png";
var epub_url;

function carregarLivro(livro) {
    const caminhoArquivo = `dados/${livro}.json`;
  
    fetch(caminhoArquivo)
      .then(response => response.json())
      .then(dados => {
        document.getElementById('capa').src = dados.capa;
        document.getElementById('titulo').textContent = dados.titulo;
        document.getElementById('nome').textContent = dados.autor;
        document.getElementById('ano').textContent = dados.ano;
        document.getElementById('paginas').textContent = dados.num_paginas;
        document.getElementById('fonte').textContent = dados.editora;
        document.getElementById('descricao').textContent = dados.descricao;
        pdf_url = "imagens/baby.png";
        epub_url = dados.epub_url;
      })
      .catch(error => console.error(`Erro ao carregar o livro "${livro}":`, error));
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const livro = urlParams.get('livro');
    if (livro) {
      carregarLivro(livro);
    }
  });

  document.addEventListener('DOMContentLoaded', function() {
    const pdf_button = document.getElementById('pdf_button');
    const epub_button = document.getElementById('epub_button');
  
    pdf_button.addEventListener('click', function() {
      const urlArquivo = pdf_url;
      const nomeArquivo = 'baby.png';
  
      const link = document.createElement('a');
      link.href = urlArquivo;
  
      link.setAttribute('download', nomeArquivo);
      link.setAttribute('target', "_blanked")
  
      link.click();
    });

  epub_button.addEventListener('click', function() {
    const urlArquivo = epub_url;
    const nomeArquivo = 'baby.png';

    const link = document.createElement('a');
    link.href = urlArquivo;

    link.setAttribute('download', nomeArquivo);
    link.setAttribute('target', "_blanked")

    link.click();
  });
  });