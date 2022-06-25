import {CadastroControle} from "./cadastroControle.js"

class Quadro{
    static tagSelect = document.getElementById("cargoOption");
    static cadastros= []
    static ul = document.getElementById("lista-de-alunos");
    static totalCadastrado = document.getElementById('total-alunos');


    static capturarDados(event){
        event.preventDefault();

        const inputs = event.target;
        const dataForm = {};

        for(let i = 0;i<inputs.length;i++){
            const {name,value} = inputs[i]
            if(name){
                dataForm[name] = value
            }
            
        }
        
        this.cadastros = CadastroControle.cadastrarPessoa(dataForm)
        this.atualizarSelect()

    }

    static atualizarSelect(){        
        
        
        this.ul.innerHTML = ""
        this.cadastros.forEach((cadastro)=>{
            const {nome,posicao}= cadastro;

            const lista = document.createElement("li");
            
            lista.innerText = `${cadastro.cargo} ${cadastro.nome}     ${cadastro.email}`
            this.ul.appendChild(lista)

        })

       this.totalCadastrado.innerText = this.cadastros.length
        
    }

    static filtrarPessoas(){
        this.cadastros.forEach((cadastro)=>{
          const lista = document.createElement("li");
          this.ul.innerHTML = ""

          if(this.tagSelect.value === "Todos" ){
              this.atualizarSelect()

        }
        if(this.tagSelect.value  === "Aluno"){
            this.cadastros.forEach((cadastro)=>{

                if(cadastro.cargo === "Aluno"){
                const listaAluno = document.createElement("li");

                listaAluno.innerText = `${cadastro.cargo} ${cadastro.nome}     ${cadastro.email}`

                this.ul.appendChild(listaAluno)
                }
    
            })

        }
        if(this.tagSelect.value  === "Facilitador"){
            this.cadastros.forEach((cadastro)=>{
                
                if(cadastro.cargo === "Facilitador"){
                const listaFacilitador = document.createElement("li");

                listaFacilitador.innerText = `${cadastro.cargo} ${cadastro.nome}     ${cadastro.email}`

                this.ul.appendChild(listaFacilitador)
                }
    
            })
        }
        if(this.tagSelect.value  === "Instrutor" ){
            this.cadastros.forEach((cadastro)=>{
                
                if(cadastro.cargo === "Instrutor"){
                const listaInstrutor = document.createElement("li");

                listaInstrutor.innerText = `${cadastro.cargo} ${cadastro.nome}     ${cadastro.email}`

                this.ul.appendChild(listaInstrutor)
                }
    
            })
        }

        })
        

        
    }
}

export {Quadro}