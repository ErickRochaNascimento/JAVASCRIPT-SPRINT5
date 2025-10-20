
//class contato

class contato {
    constructor(nome, email, cpf, sobrenome, telefone, contato) {
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.sobrenome = sobrenome;
        this.telefone = telefone;
        this.contato = contato;
    }

}

function Post(form) {



    let data = new contato(
        form.elements.nome.value,
        form.elements.email.value,
        form.elements.cpf.value,
        form.elements.sobrenome.value,
        form.elements.telefone.value,
        form.elements.contato.value
    );
    console.log(data);
    form.reset();

    alert(`Obrigado sr(a) ${data.nome} ${data.sobrenome}  os seus dados foram encaminhados com sucesso`);
    return false;
}

/*function Enviar() {

    var nome = document.getElementById("nome");

    if (nome.value != "") {
 alert(`Obrigado sr(a) ${data.nome} ${data.sobrenome}  os seus dados foram encaminhados com sucesso`);
       
    }



}*/

