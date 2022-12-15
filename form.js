
 var frm = document.querySelector("#frm");
 var btn = document.querySelector("#calc");
 var slv = document.querySelector("#tprata");
 var red = document.querySelector("#tred");
 var cnz = document.querySelector("#tcinza");
 var prt = document.querySelector("#tpreto");
 var brn = document.querySelector("#tbranco");
 var cores = document.querySelector("#dcor");
 var outro = document.querySelector("#doutro")
 var srv = frm.servicos.value

 function calc(){
    frm.s1.value = frm.q1.value * frm.v1.value
    frm.s2.value = frm.q2.value * frm.v2.value
    frm.s3.value = frm.q3.value * frm.v3.value
    frm.s4.value = frm.q4.value * frm.v4.value
    frm.s5.value = frm.q5.value * frm.v5.value
    frm.s6.value = frm.q6.value * frm.v6.value
    frm.s7.value = frm.q7.value * frm.v7.value
    frm.s8.value = frm.q8.value * frm.v8.value
    frm.s9.value = frm.q9.value * frm.v9.value
    frm.s10.value = frm.q10.value * frm.v10.value
    frm.s11.value = frm.q11.value * frm.v11.value
    frm.s12.value = frm.q12.value * frm.v12.value
    frm.s13.value = frm.q13.value * frm.v13.value
    frm.s14.value = frm.q14.value * frm.v14.value
    frm.totalt.value = parseFloat(frm.s1.value)+parseFloat(frm.s2.value)+parseFloat(frm.s3.value)+parseFloat(frm.s4.value)+parseFloat(frm.s5.value)+parseFloat(frm.s6.value)+parseFloat(frm.s7.value)+parseFloat(frm.s8.value)+parseFloat(frm.s9.value)+parseFloat(frm.s10.value)+parseFloat(frm.s11.value)+parseFloat(frm.s12.value)+parseFloat(frm.s13.value)+parseFloat(frm.s14.value);
 }

 btn.addEventListener("click", function (event) {
    calc()
 })
 
 function btnClick(){
   calc()
    document.write("<p>Tel:3423-3858 | Cel:9.8854-3656</p>");
    document.write("<p>Rua Pedro Flauzino Filho 280</p>");
    document.write("<p>Bairro Nossa Senhora Aparecida</p>");
    document.write("<p>Cep: 37555-419</p>");
    document.write("<p>-------------------------------</p>");
    document.write("<p>","Tipo de Registro: ",frm.tipo.value,"</p>");
    document.write("<p>","Nome do Cliente: ",frm.nome.value,"</p>");
    document.write("<p>","Email do Cliente: ",frm.email.value,"</p>");
    document.write("<p>","Tel do Cliente: ",frm.tel.value,"</p>");
    document.write("<p>","Data do Serviço: ",frm.data.value,"</p>");
    document.write("<p>","Modelo do Veículo: ",frm.mvel.value,"</p>");
    document.write("<p>","Serviço: ",frm.servicos.value,"</p>");
    srv = frm.servicos.value
    if (srv.includes('Pintura')) {
      if(frm.cor.value == "Outro"){
         document.write("<p>","Cor: ",frm.outro.value,"</p>");
      }else if(frm.cor.value == "Prata") {
         if(frm.tprata.value == "Outro") {
            document.write("<p>","Cor: ",frm.outro.value,"</p>");
         }else {
            document.write("<p>","Cor: ",frm.tprata.value,"</p>");
         }
      }else if(frm.cor.value == "Vermelho") {
         if(frm.tred.value == "Outro") {
            document.write("<p>","Cor: ",frm.outro.value,"</p>");
         }else {
            document.write("<p>","Cor: ",frm.tred.value,"</p>");
         }
      }else if(frm.cor.value == "Cinza") {
         if(frm.tcinza.value == "Outro") {
            document.write("<p>","Cor: ",frm.outro.value,"</p>");
         }else {
            document.write("<p>","Cor: ",frm.tcinza.value,"</p>");
         }
      }else if(frm.cor.value == "Preto") {
         if(frm.tpreto.value == "Outro") {
            document.write("<p>","Cor: ",frm.outro.value,"</p>");
         }else {
            document.write("<p>","Cor: ",frm.tpreto.value,"</p>");
         }
      }else if(frm.cor.value == "Branco") {
         if(frm.tbranco.value == "Outro") {
            document.write("<p>","Cor: ",frm.outro.value,"</p>");
         }else {
            document.write("<p>","Cor: ",frm.tbranco.value,"</p>");
         }
      }
    }
    if(frm.s1.value > 0){
    document.write("<p>","Quantidade: ",frm.q1.value,"| Descrição: ",frm.d1.value,"| Total: R$",frm.s1.value);
    }
    if(frm.s2.value > 0){
    document.write("<p>","Quantidade: ",frm.q2.value,"| Descrição: ",frm.d2.value,"| Total: R$",frm.s2.value);
    }
    if(frm.s3.value > 0){
    document.write("<p>","Quantidade: ",frm.q3.value,"| Descrição: ",frm.d3.value,"| Total: R$",frm.s3.value);
    }
    if(frm.s4.value > 0){
    document.write("<p>","Quantidade: ",frm.q4.value,"| Descrição: ",frm.d4.value,"| Total: R$",frm.s4.value);
    }
    if(frm.s5.value > 0){
    document.write("<p>","Quantidade: ",frm.q5.value,"| Descrição: ",frm.d5.value,"| Total: R$",frm.s5.value);
    }
    if(frm.s6.value > 0){
    document.write("<p>","Quantidade: ",frm.q6.value,"| Descrição: ",frm.d6.value,"| Total: R$",frm.s6.value);
    }
    if(frm.s7.value > 0){
    document.write("<p>","Quantidade: ",frm.q7.value,"| Descrição: ",frm.d7.value,"| Total: R$",frm.s7.value);
    }
    if(frm.s8.value > 0){
    document.write("<p>","Quantidade: ",frm.q8.value,"| Descrição: ",frm.d8.value,"| Total: R$",frm.s8.value);
    }
    if(frm.s9.value > 0){
    document.write("<p>","Quantidade: ",frm.q9.value,"| Descrição: ",frm.d9.value,"| Total: R$",frm.s9.value);
    }
    if(frm.s10.value > 0){
    document.write("<p>","Quantidade: ",frm.q10.value,"| Descrição: ",frm.d10.value,"| Total: R$",frm.s10.value);
    }
    if(frm.s11.value > 0){
    document.write("<p>","Quantidade: ",frm.q11.value,"| Descrição: ",frm.d11.value,"| Total: R$",frm.s11.value);
    }
    if(frm.s12.value > 0){
    document.write("<p>","Quantidade: ",frm.q12.value,"| Descrição: ",frm.d12.value,"| Total: R$",frm.s12.value);
    }
    if(frm.s13.value > 0){
    document.write("<p>","Quantidade: ",frm.q13.value,"| Descrição: ",frm.d13.value,"| Total: R$",frm.s13.value);
    }
    if(frm.s14.value > 0){
    document.write("<p>","Quantidade: ",frm.q14.value,"| Descrição: ",frm.d14.value,"| Total: R$",frm.s14.value);
    }
    document.write("<p>Valor Total: R$",frm.totalt.value,"</p>");
    print();
}

function mcor(){
   srv = frm.servicos.value
      if (srv.includes('Pintura')) {
         cores.removeAttribute("hidden");
         mcores();
      } else {
         cores.setAttribute("hidden", "true")
         slv.setAttribute("hidden", "true");
         red.setAttribute("hidden", "true")
         cnz.setAttribute("hidden", "true")
         prt.setAttribute("hidden", "true")
         brn.setAttribute("hidden", "true")
         outro.setAttribute("hidden", "true")
      }
      
}
 function chidden(){
   slv.setAttribute("hidden", "true");
   red.setAttribute("hidden", "true")
   cnz.setAttribute("hidden", "true")
   prt.setAttribute("hidden", "true")
   brn.setAttribute("hidden", "true")
   outro.setAttribute("hidden", "true")
 }

 function mcores(){
   var cvl = frm.cor.value
      if(cvl == "Prata") {   
         chidden();
         slv.removeAttribute("hidden");
      } else if(cvl == "Vermelho") {
         chidden();
         red.removeAttribute("hidden");
      } else if(cvl == "Cinza") {
         chidden();
         cnz.removeAttribute("hidden");
      } else if(cvl == "Preto") {
         chidden();
         prt.removeAttribute("hidden");
      } else if(cvl == "Branco") {
         chidden();
         brn.removeAttribute("hidden");
      } else if(cvl == "Outro") {
         chidden();
         outro.removeAttribute("hidden");
      }
 }
 function outracorpr(){
      if(frm.tprata.value == "Outro") {
         outro.removeAttribute("hidden");
      } else {
         outro.setAttribute("hidden", "true");
      }
 }
 function outracorr(){
   if(frm.tred.value == "Outro") {
      outro.removeAttribute("hidden");
   } else {
      outro.setAttribute("hidden", "true");
   }
}
function outracorc(){
   if(frm.tcinza.value == "Outro") {
      outro.removeAttribute("hidden");
   } else {
      outro.setAttribute("hidden", "true");
   }
}
function outracorpt(){
   if(frm.tpreto.value == "Outro") {
      outro.removeAttribute("hidden");
   } else {
      outro.setAttribute("hidden", "true");
   }
}
function outracorb(){
   if(frm.tbranco.value == "Outro") {
      outro.removeAttribute("hidden");
   } else {
      outro.setAttribute("hidden", "true");
   }
}