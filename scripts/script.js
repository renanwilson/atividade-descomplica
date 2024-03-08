var valorTotal = [0, 0];
var valorProduto = [50.0, 20.0];
var qtd = [0, 0];
var fullValue = 0;

function getNewValue() {
  var total = valorTotal.reduce(
    (previous, currentValue) => previous + currentValue
  );
  var valorTotalCompra = document.getElementById("valorTotalCompra");
  valorTotalCompra.innerHTML = total.toFixed(2);
}

function addItem(item) {
  var quantidade = document.getElementById("quantidade" + item);
  var total = document.getElementById("total" + item);
  qtd[item] += 1;
  valorTotal[item] = Number.parseFloat(valorProduto[item]) * qtd[item];
  quantidade.innerHTML = qtd[item];
  total.innerHTML = valorTotal[item].toFixed(2);
  getNewValue();
}
function decreaseItem(item) {
  if (qtd[item] > 0) {
    var quantidade = document.getElementById("quantidade" + item);
    var total = document.getElementById("total" + item);
    qtd[item] -= 1;
    valorTotal[item] = Number.parseFloat(valorProduto[item]) * qtd[item];
    quantidade.innerHTML = qtd[item];
    total.innerHTML = valorTotal[item].toFixed(2);
  }
}
