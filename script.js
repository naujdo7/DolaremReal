let valorConverter, cotacaoMoeda, valorConvertido;
let opcaoMoeda;
let simboloMoeda;

opcaoMoeda = prompt("Olá, qual conversão você deseja realizar?")

if (opcaoMoeda != 1 && opcaoMoeda != 2) {
    alert("Opção Inválida")
}

else {
    valorConverter = prompt("Digite o valor que deseja converter: (em R$)")
    if (opcaoMoeda == 1) {
        cotacaoMoeda = prompt("Digite a cotação do Dolár");
        simboloMoeda = "U$";


    } else {
        cotacaoMoeda = prompt("Digite a cotação do Euro");
        simboloMoeda = "€";
    }

    valorConvertido = (valorConverter / cotacaoMoeda).toFixed(2);

    alert("O valor convertido para " + simboloMoeda + " resultou em " + simboloMoeda + valorConvertido)
}