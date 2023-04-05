/*
2) O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. 

Formula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adultos Condição:
- Abaixo de 18.5 Abaixo do peso;
- Entre 18.5 e 25 Peso normal;
- Entre 25 e 30 Acima do peso;
- Entre 30 e 40 Obeso;
- Acima de 40 Obsesidade Grave;
*/

class Pessoas {

    nomePessoa;
    pesoPessoa;
    alturaPessoa;

    constructor(nomePessoa, pesoPessoa, alturaPessoa) {

        this.nomePessoa = nomePessoa;
        this.pesoPessoa = pesoPessoa;
        this.alturaPessoa = alturaPessoa;

    }

    calcularIMC() { // método que retorna o IMC da pessoa.

        let imc = this.pesoPessoa / (this.alturaPessoa * this.alturaPessoa);
        return imc = imc.toFixed(2);

    }

    classificarIMC() { // método de classificar IMC, usa o return do método "calcularIMC()" para fazer a classificação.
        let imc = this.calcularIMC();


        if (imc < 18.5) { // poderia usar um console.log(), mas usando o return, futuramente posso usar esse valor se eu quiser.
            return('Abaixo do Peso')
        } else if (imc >= 18.5 && imc < 25) {

            return('Peso normal')

        } else if (imc >= 25 && imc < 30) {

            return('Sobrepreso')
        } else if (imc >= 30 && imc < 35) {

            return('Obesidade grau 1')

        } else if (imc >= 35 && imc < 40) {

            return('Obesidade grau 2')
        } else {

            return('Obesidade grau 3')
        }


    }


}

let franco = new Pessoas('Franco Roldão', 90, 1.60);
console.log(`${
    franco.nomePessoa
} pesa ${
    franco.pesoPessoa
} KG e está com o imc igual a ${
    franco.calcularIMC()
} que resulta na classificacao: ${
    franco.classificarIMC()
}`)

