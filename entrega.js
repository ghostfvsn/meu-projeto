
class Funcionario {
    constructor(nome, idade, cargo) {
      this.nome = nome;
      this.idade = idade;
      this.cargo = cargo;
    }
  
    seApresentar() {
      console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e trabalho como ${this.cargo}.`);
    }
  
    trabalhar() {
      console.log(`${this.nome} está trabalhando.`);
    }
  }
  
  
  class Gerente extends Funcionario {
    constructor(nome, idade, cargo, departamento) {
      super(nome, idade, cargo);
      this.departamento = departamento;
    }
  
    gerenciar() {
      console.log(`${this.nome} está gerenciando o departamento de ${this.departamento}.`);
    }
  }
  
 
  class Desenvolvedor extends Funcionario {
    constructor(nome, idade, cargo, linguagem) {
      super(nome, idade, cargo);
      this.linguagem = linguagem;
    }
  
    programar() {
      console.log(`${this.nome} está programando em ${this.linguagem}.`);
    }
  }
  
  
  const gerente1 = new Gerente('João', 35, 'Gerente', 'TI');
  const desenvolvedor1 = new Desenvolvedor('Maria', 28, 'Desenvolvedor', 'JavaScript');
  
  
  gerente1.seApresentar();
  gerente1.trabalhar();
  gerente1.gerenciar();
  
  desenvolvedor1.seApresentar();
  desenvolvedor1.trabalhar();
  desenvolvedor1.programar();
  