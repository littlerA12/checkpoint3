
const alunos_cursos= require('./alunos');
let newalunos=[]
newalunos.push(new alunos_cursos('lenin', [8,9,7], 0))
let curso={
    nome:'Jogos digitais',
    nota_aprovado: 7,
    max_faltas:2,
    estudantes:newalunos,
    alunos_novos: function(newalunos){
        this.estudantes.push(newalunos)
    },
    alunos_apro: function(alunos_cursos){
        let media= alunos_cursos.Media_calcu
        let faltas=alunos_cursos.n_Faltas
        if (media>= this.nota_aprovado && faltas< this.max_faltas){
            return true 
        }else if(faltas==this.max_faltas && media>=(this.nota_aprovado*1.1)){
            return true
        }else{
            return false
        }
        },
    aprovados:function(){
        let aprov=this.estudantes.map(function(alunos_novos){
            return curso.alunos_apro(alunos_novos)
        })
        return aprov
    }

    }
console.log(curso.aprovados())