function calculadora() {
    const operacao = Number(prompt('Escolha uma operação:\n 1 - SOMA (+) \n 2 - SUBTRAÇÃO (-) \n 3 - MULTIPLICAÇÃO (*) \n 4 - DIVISÃO REAL (/)\n 5 - DIVISÃO INTEIRA (%)\n 6 - POTENCIAÇÃO (**)'))
    console.log(operacao);

    if (!operacao || operacao >= 7) {
        alert('Operação Invalida. Tente novamente!!');
        calculadora()
    } else {

        let n1 = Number(prompt('Insira o primeiro valor: '));
        let n2 = Number(prompt('Insira o segundo valor: '));
        let resultado;

        if (!n1 || !n2) {
            alert('ERRO - Paramentros Invalidos!')
            calculadora();
        } else {
            function soma() {
                resultado = n1 + n2;
                alert(`${n1} + ${n2} = ${resultado}`);
                novaOperacao();
            }
            function subtracao() {
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`);
                novaOperacao();
            }
            function multiplicacao() {
                resultado = n1 * n2;
                alert(`${n1} * ${n2} = ${resultado}`);
                novaOperacao();
            }
            function divisaoReal() {
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`);
                novaOperacao();
            }
            function divisãoInteira() {
                resultado = n1 % n2;
                alert(`O resto da divisão de ${n1} e ${n2} = ${resultado}`);
                novaOperacao();
            }
            function potenciacao() {
                resultado = n1 ** n2;
                alert(`${n1} elevado a  ${n2} é igual a ${resultado}`);
                novaOperacao();
            }

            function novaOperacao() {
                let opcao = prompt('deseja efetuar uma nova operação? : \n 1 - SIM \n 2 - NÃO')
                if (opcao == 1) {
                    calculadora();
                } else if (opcao == 2) {
                    alert('Obrigado e até mais :)');
                } else {
                    alert('ERROR!!!!');
                    novaOperacao();
                }
            }


            if (operacao == 1) {
                soma();
            } else if (operacao == 2) {
                subtracao();
            } else if (operacao == 3) {
                multiplicacao();
            } else if (operacao == 4) {
                divisaoReal();
            } else if (operacao == 5) {
                divisãoInteira();
            } else if (operacao == 6) {
                potenciacao();
            }
        }
    }
}
calculadora();