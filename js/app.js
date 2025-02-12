const produto = document.getElementById("produto");
const quantidade = document.getElementById("quantidade");
const listaDeProdutos = document.getElementById("lista-de-produtos");
let somaDeValores = 0;

limpar();

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

  const carrinhoDeCompras = document.getElementById("lista-produtos");
  carrinhoDeCompras.innerHTML =
    carrinhoDeCompras.innerHTML +
    `
    <section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidadeSelecionada}x
          </span> ${nomeProduto} <span class="texto-azul">R$${valorUnitario}</span>
    </section>
  `;

  somaDeValores += valorTotal;
  quantidade.value = "";

  const ValorTotalNoCarrinho = document.getElementById("valor-total");
  ValorTotalNoCarrinho.innerHTML = `R$${somaDeValores.toFixed(2)}`;
}

function limpar() {
  const carrinhoDeCompras = document.getElementById("lista-produtos");
  carrinhoDeCompras.innerHTML = "";

  const ValorTotalNoCarrinho = document.getElementById("valor-total");
  ValorTotalNoCarrinho.innerHTML = `R$0,00`;
}
