const fecharmodal = document.querySelector("#fechar");

const modal = document.querySelector("#modal");

const fade = document.querySelector("#modal-fade");




function abrirFechar(){

    modal.showModal()


}

function localNome()
{
    var nome = document.getElementById("Nome").value
    localStorage.setItem("Nome",nome)
}

function localEmail()
{
    var email = document.getElementById("Email").value
    localStorage.setItem("Email",email)
}

function localSenha()
{
    var senha = document.getElementById("senha").value
    localStorage.setItem("senha",senha)
}


function mascara_telefone ()
{
  
 var tel = document.getElementById("telefone").value
 localStorage.setItem("telefone",tel)

    console.log(tel)
  tel=tel.slice(0,14) 
    console.log(tel)
  document.getElementById("telefone").value=tel
tel=document.getElementById("telefone").value.slice(0,10)
    console.log(tel)
   
    
    var tel_formatado = document.getElementById("telefone").value
    if (tel_formatado[0]!="(")
    {
        if(tel_formatado[0]!=undefined)
        {
            document.getElementById("telefone").value="("+tel_formatado[0];
        }
    }

    if (tel_formatado[3]!=")")
    {
        if(tel_formatado[3]!=undefined)
        {
            document.getElementById("telefone").value=tel_formatado.slice(0,3)+")"+tel_formatado[3]
        }
    }

    if (tel_formatado[9]!="-")
    {
        if(tel_formatado[9]!=undefined)
        {
            document.getElementById("telefone").value=tel_formatado.slice(0,9)+"-"+tel_formatado[9]
        }
    }
    localStorage.setItem("telefone", tel_formatado)
}

function mascara_cpf()
{ var cpf_formatado = document.getElementById("cpf").value
localStorage.setItem("cpf",cpf_formatado)
    if (cpf_formatado[3]!=".")
    {
        if (cpf_formatado[3]!=undefined)
        {
            document.getElementById("cpf").value=cpf_formatado.slice(0,3)+"."+cpf_formatado[3];
        }
    }

    if (cpf_formatado[7]!=".")
    {
        if (cpf_formatado[7]!=undefined)
        {
            document.getElementById("cpf").value=cpf_formatado.slice(0,7)+"."+cpf_formatado[7];
        }
    }

    if (cpf_formatado[11]!="-")
    {
        if(cpf_formatado[11]!=undefined)
        {
            document.getElementById("cpf").value=cpf_formatado.slice(0,11)+"-"+cpf_formatado[11]
        }
    }
    localStorage.setItem("cpf", cpf_formatado)
}  

function alerta(){
    window.alert("Seus dados foram enviados!")
}


addEventListener("DOMContentLoaded",function(){
    const recebetel = this.localStorage.getItem("telefone")
    this.document.getElementById("recebetelefone").value=recebetel

    const recebenome = this.localStorage.getItem("Nome")
    this.document.getElementById("recebenome").value=recebenome

    const recebeemail = this.localStorage.getItem("Email")
    this.document.getElementById("recebeemail").value=recebeemail

    const recebecpf = this.localStorage.getItem("cpf")
    this.document.getElementById("recebecpf").value=recebecpf

    const recebesenha = this.localStorage.getItem("senha")
    this.document.getElementById("recebesenha").value=recebesenha
})