
 
    
let aluno= function(nome,notas,n_Faltas,faltas,Media_calcu){
    this.nome=nome;
    this.notas=notas;
    this.n_Faltas= n_Faltas;
    this.faltas=function(){
        return this.n_Faltas++
    };
    this.Media_calcu= function(){
        let total=this.notas.reduce(function(media_notas,notas){
            return media_notas+notas
        })
        return total/ this.notas.length
    };
    
};
    
    
let novoaluno= new aluno('ana isabel', [1,2,3,4],0)
module.exports=aluno
console.log(novoaluno)
console.log(novoaluno.faltas())
console.log(novoaluno)