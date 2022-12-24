
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
 var selcor = document.querySelector("#cor")
 var sslv = document.querySelector("#stprata");
 var sred = document.querySelector("#stred");
 var scnz = document.querySelector("#stcinza");
 var sprt = document.querySelector("#stpreto");
 var sbrn = document.querySelector("#stbranco");
 var ioutro = document.querySelector("#outro")

 function calc(){
    frm.s1.value = parseFloat(frm.q1.value.replace(",",".")) * parseFloat(frm.v1.value.replace(",","."))
    frm.s2.value = parseFloat(frm.q2.value.replace(",",".")) * parseFloat(frm.v2.value.replace(",","."))
    frm.s3.value = parseFloat(frm.q3.value.replace(",",".")) * parseFloat(frm.v3.value.replace(",","."))
    frm.s4.value = parseFloat(frm.q4.value.replace(",",".")) * parseFloat(frm.v4.value.replace(",","."))
    frm.s5.value = parseFloat(frm.q5.value.replace(",",".")) * parseFloat(frm.v5.value.replace(",","."))
    frm.s6.value = parseFloat(frm.q6.value.replace(",",".")) * parseFloat(frm.v6.value.replace(",","."))
    frm.s7.value = parseFloat(frm.q7.value.replace(",",".")) * parseFloat(frm.v7.value.replace(",","."))
    frm.s8.value = parseFloat(frm.q8.value.replace(",",".")) * parseFloat(frm.v8.value.replace(",","."))
    frm.s9.value = parseFloat(frm.q9.value.replace(",",".")) * parseFloat(frm.v9.value.replace(",","."))
    frm.s10.value = parseFloat(frm.q10.value.replace(",",".")) * parseFloat(frm.v10.value.replace(",","."))
    frm.s11.value = parseFloat(frm.q11.value.replace(",",".")) * parseFloat(frm.v11.value.replace(",","."))
    frm.s12.value = parseFloat(frm.q12.value.replace(",",".")) * parseFloat(frm.v12.value.replace(",","."))
    frm.s13.value = parseFloat(frm.q13.value.replace(",",".")) * parseFloat(frm.v13.value.replace(",","."))
    frm.s14.value = parseFloat(frm.q14.value.replace(",",".")) * parseFloat(frm.v14.value.replace(",","."))
    frm.totalt.value = parseFloat(frm.s1.value)+parseFloat(frm.s2.value)+parseFloat(frm.s3.value)+parseFloat(frm.s4.value)+parseFloat(frm.s5.value)+parseFloat(frm.s6.value)+parseFloat(frm.s7.value)+parseFloat(frm.s8.value)+parseFloat(frm.s9.value)+parseFloat(frm.s10.value)+parseFloat(frm.s11.value)+parseFloat(frm.s12.value)+parseFloat(frm.s13.value)+parseFloat(frm.s14.value);
 }

 btn.addEventListener("click", function (event) {
    calc()
 })
 
 function btnClick(){
   calc()
   document.write("<p>Origginal Car</p>");
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
    document.write("<p>","Quantidade: ",frm.q1.value,"</p>","<p>","Descrição: ",frm.d1.value,"</p>","<p>","Total: R$",frm.s1.value),"</p>";
    }
    if(frm.s2.value > 0){
    document.write("<p>","Quantidade: ",frm.q2.value,"</p>","<p>","Descrição: ",frm.d2.value,"</p>","<p>","Total: R$",frm.s2.value),"</p>";
    }
    if(frm.s3.value > 0){
    document.write("<p>","Quantidade: ",frm.q3.value,"</p>","<p>","Descrição: ",frm.d3.value,"</p>","<p>","Total: R$",frm.s3.value),"</p>";
    }
    if(frm.s4.value > 0){
    document.write("<p>","Quantidade: ",frm.q4.value,"</p>","<p>","Descrição: ",frm.d4.value,"</p>","<p>","Total: R$",frm.s4.value),"</p>";
    }
    if(frm.s5.value > 0){
    document.write("<p>","Quantidade: ",frm.q5.value,"</p>","<p>","Descrição: ",frm.d5.value,"</p>","<p>","Total: R$",frm.s5.value),"</p>";
    }
    if(frm.s6.value > 0){
    document.write("<p>","Quantidade: ",frm.q6.value,"</p>","<p>","Descrição: ",frm.d6.value,"</p>","<p>","Total: R$",frm.s6.value),"</p>";
    }
    if(frm.s7.value > 0){
    document.write("<p>","Quantidade: ",frm.q7.value,"</p>","<p>","Descrição: ",frm.d7.value,"</p>","<p>","Total: R$",frm.s7.value),"</p>";
    }
    if(frm.s8.value > 0){
    document.write("<p>","Quantidade: ",frm.q8.value,"</p>","<p>","Descrição: ",frm.d8.value,"</p>","<p>","Total: R$",frm.s8.value),"</p>";
    }
    if(frm.s9.value > 0){
    document.write("<p>","Quantidade: ",frm.q9.value,"</p>","<p>","Descrição: ",frm.d9.value,"</p>","<p>","Total: R$",frm.s9.value),"</p>";
    }
    if(frm.s10.value > 0){
    document.write("<p>","Quantidade: ",frm.q10.value,"</p>","<p>","Descrição: ",frm.d10.value,"</p>","<p>","Total: R$",frm.s10.value),"</p>";
    }
    if(frm.s11.value > 0){
    document.write("<p>","Quantidade: ",frm.q11.value,"</p>","<p>","Descrição: ",frm.d11.value,"</p>","<p>","Total: R$",frm.s11.value),"</p>";
    }
    if(frm.s12.value > 0){
    document.write("<p>","Quantidade: ",frm.q12.value,"</p>","<p>","Descrição: ",frm.d12.value,"</p>","<p>","Total: R$",frm.s12.value),"</p>";
    }
    if(frm.s13.value > 0){
    document.write("<p>","Quantidade: ",frm.q13.value,"</p>","<p>","Descrição: ",frm.d13.value,"</p>","<p>","Total: R$",frm.s13.value),"</p>";
    }
    if(frm.s14.value > 0){
    document.write("<p>","Quantidade: ",frm.q14.value,"</p>","<p>","Descrição: ",frm.d14.value,"</p>","<p>","Total: R$",frm.s14.value),"</p>";
    }
    document.write("<p>Valor Total: R$",frm.totalt.value,"</p>");
    print();
}

function mcor(){
   srv = frm.servicos.value
      if (srv.includes('Pintura')) {
         cores.removeAttribute("hidden");
         selcor.setAttribute("required", "true")
         mcores();
      } else {
         selcor.removeAttribute("required")
         cores.setAttribute("hidden", "true")
         chidden()
      }
      

}
 function chidden(){
   slv.setAttribute("hidden", "true");
   red.setAttribute("hidden", "true")
   cnz.setAttribute("hidden", "true")
   prt.setAttribute("hidden", "true")
   brn.setAttribute("hidden", "true")
   outro.setAttribute("hidden", "true")
   sslv.removeAttribute("required")
   sred.removeAttribute("required")
   scnz.removeAttribute("required")
   sprt.removeAttribute("required")
   sbrn.removeAttribute("required")
   ioutro.removeAttribute("required")
 }

 function mcores(){
   var cvl = frm.cor.value
      if(cvl == "Prata") {   
         chidden();
         slv.removeAttribute("hidden");
         sslv.setAttribute("required","true");
      } else if(cvl == "Vermelho") {
         chidden();
         red.removeAttribute("hidden");
         sred.setAttribute("required","true");
      } else if(cvl == "Cinza") {
         chidden();
         cnz.removeAttribute("hidden");
         scnz.setAttribute("required","true");
      } else if(cvl == "Preto") {
         chidden();
         prt.removeAttribute("hidden");
         sprt.setAttribute("required","true");
      } else if(cvl == "Branco") {
         chidden();
         brn.removeAttribute("hidden");
         sbrn.setAttribute("required","true");
      } else if(cvl == "Outro") {
         chidden();
         outro.removeAttribute("hidden");
         ioutro.setAttribute("required","true");
      }
 }
 function outracorpr(){
      if(frm.tprata.value == "Outro") {
         outro.removeAttribute("hidden");
         ioutro.setAttribute("required","true");
      } else {
         outro.setAttribute("hidden", "true");
         ioutro.removeAttribute("required");
      }
 }
 function outracorr(){
   if(frm.tred.value == "Outro") {
      outro.removeAttribute("hidden");
      ioutro.setAttribute("required","true");
   } else {
      outro.setAttribute("hidden", "true");
      ioutro.removeAttribute("required");
   }
}
function outracorc(){
   if(frm.tcinza.value == "Outro") {
      outro.removeAttribute("hidden");
      ioutro.setAttribute("required","true");
   } else {
      outro.setAttribute("hidden", "true");
      ioutro.removeAttribute("required");
   }
}
function outracorpt(){
   if(frm.tpreto.value == "Outro") {
      outro.removeAttribute("hidden");
      ioutro.setAttribute("required","true");
   } else {
      outro.setAttribute("hidden", "true");
      ioutro.removeAttribute("required");
   }
}
function outracorb(){
   if(frm.tbranco.value == "Outro") {
      outro.removeAttribute("hidden");
      ioutro.setAttribute("required","true");
   } else {
      outro.setAttribute("hidden", "true");
      ioutro.removeAttribute("required");
   }
}