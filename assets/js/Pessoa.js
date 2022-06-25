import { db } from "./db.js";

 class Pessoa{
    constructor({nome, sobrenome, datadeNascimento, email, contato,telefone,cargo}){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.datadeNascimento = datadeNascimento;
        this.email = email;
        this.contato = contato;
        this.telefone = telefone;
        this.cargo  = cargo;
    }

   

}

export {Pessoa}