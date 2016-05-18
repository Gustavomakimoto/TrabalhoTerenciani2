function SomenteLetras(){
	tecla = event.keyCode;
        //BLOQUEANDO TODAS OS NUMEROS E CARACTERES ESPECIAS
	if (tecla >= 33 && tecla <= 64 || tecla >= 91 && tecla <= 93 || tecla >= 123 && tecla <= 159 || tecla >= 162 && tecla <= 191 || tecla === 95){ 
	    return false;
	}else{
	   return true;
	}
}



function obsMaior200(){
if(document.getElementById("obs").value.length >= 200){
alert('APENAS 200 CARACTERES !!');
document.getElementById("obs").focus();
return false;   
}

}


// PARA EVITAR O ESPACO NO CAMPO DA SENHA PASSWORD
function Trim(str){
	return str.replace(/^\s+|\s+$/g,"");
}
// SER OBRIGATORIAMENTE MAIUSCULO O CAMPO
function maiuscula(z){
        v = z.value.toUpperCase();
        z.value = v;
}


function mascara(o,f){
    v_obj=o;
    v_fun=f;
    setTimeout('execmascara()',1);
}
 
function checkBoxMarcando( obj ){
        var teste = document.getElementsByName( obj.name );
        var cont = 0;
        for ( var i = 0; i < teste.length; i++ )
        {
            if ( teste[i].checked )
                cont++;
            if ( cont > 1 )
            {
                obj.checked = false;
                break;
            }
        }

			if (!obj.checked) {                  
return;
    	}else
 			
                            if(document.getElementById ("simCheckBox").checked == true){
                                {document.getElementById("msg").innerHTML = 'A qualquer momento você podera \n\
          cancelar o recebimento dos e-mails depromoção enviando um e-mail com o assunto STOP MAIL para o endereço contato@estacio.br';}
                              
                           }else{
                               
                               document.getElementById("msg").innerHTML = ' ';
               
                               
                            }
                          
     
}

function valida(erro,df){
erro='#FF0000';
df='#FF0000';

if (document.getElementById ("simCheckBox").checked == false &&
document.getElementById("naoCheckBox").checked == false){
   alert ("Selecione os Algum Campo da Selecção de Mensagem");
return false;
}

if(document.getElementById("cpf").value.length < 14){
alert('Digite o CPF!!');
document.getElementById("cpf").style.borderColor=erro;
document.getElementById("cpf").focus();
return false;   
}

if(document.getElementById("nome").value.length < 3){
alert('Digite seu nome.');
document.getElementById("nome").style.borderColor=erro;
document.getElementById("nome").focus();
return false;
}

if(document.getElementById("endereco").value.length < 3){
alert('Digite seu endereço');
document.getElementById("endereco").style.borderColor=erro;
document.getElementById("endereco").focus();
return false;
}

if(document.getElementById("cidade").value.length < 3){
alert('Informe sua cidade.');
document.getElementById("cidade").style.borderColor=df;
document.getElementById("cidade").focus();
return false;
}

if(document.getElementById("senha").value.length < 6 ){
alert('Digite sua senha igual ou maior que 6 caracteres');
document.getElementById("senha").style.borderColor=erro;
document.getElementById("senha").focus();
return false;
}



if (document.form1.sel.value==""){
   window.alert("Escolha um estado de Sexo !");
   document.form1.sel.focus();
   return false; 
} else{
   return true;
}
}

function execmascara(){
    v_obj.value=v_fun(v_obj.value);
}
 
function cpfM(v){
 
    //Remove tudo o que não é dígito
    v=v.replace(/\D/g,"");
 
    if (v.length <= 14) { //CPF
 
        //Coloca um ponto entre o terceiro e o quarto dígitos
        v=v.replace(/(\d{3})(\d)/,"$1.$2");
 
        //Coloca um ponto entre o terceiro e o quarto dígitos
        //de novo (para o segundo bloco de números)
        v=v.replace(/(\d{3})(\d)/,"$1.$2");
 
        //Coloca um hífen entre o terceiro e o quarto dígitos
        v=v.replace(/(\d{3})(\d{1,2})$/,"$1-$2");
 
    } 
 
    return v;
 
}

function telM(v){
 
    //Remove tudo o que não é dígito
    v=v.replace(/\D/g,"");
 
    if (v.length <= 14) { //CPF
 
    
    v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
    v=v.replace(/(\d)(\d{4})$/,"$1-$2");    //Coloca hífen entre o quarto e o quinto dígitos
    
 
    } 
 
    return v;
 
}

function CPF() { 

StringCpf = $("#cpf").val(); 
StringCpf = StringCpf.replace(/[^\d]+/g,''); 
var Soma; 
var Resto; 
var valor = true; 
Soma = 0; 

if (StringCpf.length != 11 || StringCpf == "00000000000" || StringCpf == "11111111111" || StringCpf == "22222222222" || StringCpf == "33333333333" || StringCpf == "44444444444" || StringCpf == "55555555555" || 
        StringCpf == "66666666666" || StringCpf == "77777777777" || StringCpf == "88888888888" || StringCpf == "99999999999") 
    valor = false; 
    


for (i=1; i<=9; i++) Soma = Soma + parseInt(StringCpf.substring(i-1, i)) * (11 - i); 
Resto = (Soma * 10) % 11; 

if ((Resto == 10) || (Resto == 11)) Resto = 0; 
if (Resto != parseInt(StringCpf.substring(9, 10)) ) valor = false; 

Soma = 0; 
for (i = 1; i <= 10; i++) Soma = Soma + parseInt(StringCpf.substring(i-1, i)) * (12 - i); 
Resto = (Soma * 10) % 11; 

if ((Resto == 10) || (Resto == 11)) Resto = 0; 
if (Resto != parseInt(StringCpf.substring(10, 11) ) ) valor = false; 

if(!valor){ 
$('#cpf').css('background-color','#df1616'); 
$('#cpf').focus(); 
}else{ 
$('#cpf').css('background-color','white'); 
return valor; 
} 

}