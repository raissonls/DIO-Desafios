class contaBancaria {
    constructor(agencia, numero, tipo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }
    get saldo (){
        return  this._saldo;
    }
    set saldo (valor){
        this._saldo = valor;
    }

    sacar (valor){
        if (valor > this._saldo) {
            return 'OPERAÇÃO NEGADA';
        }
        this._saldo -= valor; 
    }

    depositar (valor){
        this._saldo += valor;
        return this._saldo
    }
}

class contaCorrente extends contaBancaria{
    constructor (agencia, numero, cartãoCredito){
        super(agencia, numero);
        this.tipo = 'corrente';
        this._cartãoCredito = cartãoCredito;
    }

    get cartãoCredito (){
        return this._cartãoCredito
    }
    set cartãoCredito (valor){
        this._cartãoCredito=valor;
    }

    definiLimite (valor){
        this._cartãoCredito = valor;
        return this._cartãoCredito
    }
}

class contaVIP extends contaCorrente {
    constructor (agencia, numero, cartãoCredito){
        super(agencia, numero);
        this.tipo = 'VIP';
        this._cartãoCredito = 1000000;
    }
}

class contaPoupança extends contaBancaria{
    constructor (agencia, numero){
        super(agencia, numero);
        this.tipo = 'poupança';
    }
}

class contaUniversitaria extends contaBancaria{
    constructor (agencia, numero){
        super(agencia, numero);
        this.tipo = 'universitaria';
    }

        sacar (valor){
        if (valor > this._saldo || valor > 500) {
            return 'OPERAÇÃO NEGADA';
        }
        this._saldo -= valor; 
    }
}