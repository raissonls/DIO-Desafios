function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
    nome: 'Raisson',
    idade: 23,
};

const pessoa2 = {
    nome: 'Joyce',
    idade: 24,
};

console.log('\n***Uso do call***\n')

console.log(calculaIdade.call(pessoa1,5));

console.log('\n***Uso do apply***\n')

console.log(calculaIdade.apply(pessoa2,[5]));