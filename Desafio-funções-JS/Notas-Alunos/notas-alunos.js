const alunos = [
	{
		nome: 'João',
		nota: 5,
		turma: '1B',
	},
	{
		nome: 'Pedro',
		nota: 9,
		turma: '3B',
	},
	{
		nome: 'Marcos',
		nota: 3,
		turma: '1B',
	},
	{
		nome: 'Muzy',
		nota: 10,
		turma: '2C',
	},
	{
		nome: 'Sofia',
		nota: 9,
		turma: '1B',
	},
	{
		nome: 'Paulo',
		nota: 6,
		turma: '2C',
	},
];



function alunosAprovados(array, media) {
    let aprovados = [];

    for(let i=0 ; i < array.length ; i++){
        const {nome, nota} = array[i];

        if(nota>=media){
            aprovados.push(nome);
        }
    }
    return aprovados
}

console.log(alunosAprovados(alunos, 7))