import {Pessoa} from "./Pessoa.js"
import {db} from "./db.js"

class CadastroControle {


    static cadastrarPessoa(pessoa) {
        const novaPessoa = new Pessoa(pessoa);
       

        db.pessoas.forEach((cadastro) => {
            if (pessoa.email === cadastro.email) {
                 window.confirm('Email já cadastrado');
                db.pessoas.pop(novaPessoa);
            }
        });

        db.pessoas.push(novaPessoa);
        return db.pessoas
    }

}

export {CadastroControle}