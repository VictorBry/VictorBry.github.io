
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
 btn.addEventListener("click", function (event) {
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
 })
 
 function btnClick(){
    document.write("<p>Tel:3423-3858</p>");
    document.write("<p>Cel:9.8854-3656</p>");
    document.write("<p>Rua Pedro Flauzino Filho 280</p>");
    document.write("<p>Bairro Nossa Senhora Aparecida</p>");
    document.write("<p>Cep 37555-419</p>");
    document.write("<p>",frm.tipo.value,"</p>");
    document.write("<p>",frm.nome.value,"</p>");
    document.write("<p>",frm.email.value,"</p>");
    document.write("<p>",frm.tel.value,"</p>");
    document.write("<p>",frm.data.value,"</p>");
    document.write("<p>",frm.mvel.value,"</p>");
    document.write("<p>",frm.servicos.value,"</p>");
    srv = frm.servicos.value
    if (srv.includes('Pintura')) {
      if(frm.cor.value == "Outro"){
         document.write("<p>",frm.outro.value,"</p>");
      }else if(frm.cor.value == "Prata") {
         if(frm.tprata.value == "Outro") {
            document.write("<p>",frm.outro.value,"</p>");
         }else {
            document.write("<p>",frm.tprata.value,"</p>");
         }
      }else if(frm.cor.value == "Vermelho") {
         if(frm.tred.value == "Outro") {
            document.write("<p>",frm.outro.value,"</p>");
         }else {
            document.write("<p>",frm.tred.value,"</p>");
         }
      }else if(frm.cor.value == "Cinza") {
         if(frm.tcinza.value == "Outro") {
            document.write("<p>",frm.outro.value,"</p>");
         }else {
            document.write("<p>",frm.tcinza.value,"</p>");
         }
      }else if(frm.cor.value == "Preto") {
         if(frm.tpreto.value == "Outro") {
            document.write("<p>",frm.outro.value,"</p>");
         }else {
            document.write("<p>",frm.tpreto.value,"</p>");
         }
      }else if(frm.cor.value == "Branco") {
         if(frm.tbranco.value == "Outro") {
            document.write("<p>",frm.outro.value,"</p>");
         }else {
            document.write("<p>",frm.tbranco.value,"</p>");
         }
      }
    }
    document.write("<table id='tabela' border='1'><thead><tr><td>Quant.</td><td>Descrição</td><td>Valor</td></tr></thead>")
    document.write("<tr><td>",frm.q1.value,"</td><td>",frm.d1.value,"</td><td>",frm.s1.value,"</td></tr>")
    document.write("<tr><td>",frm.q2.value,"</td><td>",frm.d2.value,"</td><td>",frm.s2.value,"</td></tr>")
    document.write("<tr><td>",frm.q3.value,"</td><td>",frm.d3.value,"</td><td>",frm.s3.value,"</td></tr>")
    document.write("<tr><td>",frm.q4.value,"</td><td>",frm.d4.value,"</td><td>",frm.s4.value,"</td></tr>")
    document.write("<tr><td>",frm.q5.value,"</td><td>",frm.d5.value,"</td><td>",frm.s5.value,"</td></tr>")
    document.write("<tr><td>",frm.q6.value,"</td><td>",frm.d6.value,"</td><td>",frm.s6.value,"</td></tr>")
    document.write("<tr><td>",frm.q7.value,"</td><td>",frm.d7.value,"</td><td>",frm.s7.value,"</td></tr>")
    document.write("<tr><td>",frm.q8.value,"</td><td>",frm.d8.value,"</td><td>",frm.s8.value,"</td></tr>")
    document.write("<tr><td>",frm.q9.value,"</td><td>",frm.d9.value,"</td><td>",frm.s9.value,"</td></tr>")
    document.write("<tr><td>",frm.q10.value,"</td><td>",frm.d10.value,"</td><td>",frm.s10.value,"</td></tr>")
    document.write("<tr><td>",frm.q11.value,"</td><td>",frm.d11.value,"</td><td>",frm.s11.value,"</td></tr>")
    document.write("<tr><td>",frm.q12.value,"</td><td>",frm.d12.value,"</td><td>",frm.s12.value,"</td></tr>")
    document.write("<tr><td>",frm.q13.value,"</td><td>",frm.d13.value,"</td><td>",frm.s13.value,"</td></tr>")
    document.write("<tr><td>",frm.q14.value,"</td><td>",frm.d14.value,"</td><td>",frm.s14.value,"</td></tr>")
    document.write("<p>Total :",frm.totalt.value,"</p>")
    print();
}

function mcor(){
   srv = frm.servicos.value
      if (srv.includes('Pintura')) {
         cores.removeAttribute("hidden");
      } else {
         cores.setAttribute("hidden", "true")
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

 