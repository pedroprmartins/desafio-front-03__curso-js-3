const produto = document.getElementById("produto");
const quantidade = document.getElementById("quantidade");
const listaDeProdutos = document.getElementById("lista-de-produtos");

function adicionar() {
  const produtoSelecionado = produto.value;
  const quantidadeSelecionada = quantidade.value;

  if (produtoSelecionado === "" || quantidadeSelecionada === "") {
    alert("Preencha todos os campos!");
    return;
  }

  const nomeProduto = produtoSelecionado.split(" - ")[0];
  const valorUnitario = produtoSelecionado.split("R$")[1];
  const valorTotal = valorUnitario * quantidadeSelecionada;
  //const item = `${quantidadeSelecionada}x ${nomeProduto} R$${valorTotal}`;

  const novoProduto = document.createElement("section");
  novoProduto.classList.add("carrinho__produtos__produto");
  novoProduto.innerHTML = `
    <span class="texto-azul">${quantidadeSelecionada}x
    </span> ${nomeProduto} <span class="texto-azul">R$${valorUnitario}</span>`;
  listaDeProdutos.appendChild(novoProduto);
}

function limpar() {}
