var btnSalvar = document.querySelector("#btn");
btnSalvar.addEventListener("click", function () {
    var frm = document.querySelector("#frm");
    document.write("<p>",frm.tipo.value,"</p>");
    document.write("<p>",frm.nome.value,"</p>");
    document.write("<p>",frm.email.value,"</p>");
    document.write("<p>",frm.tel.value,"</p>");
    document.write("<p>",frm.data.value,"</p>");
    document.write("<p>",frm.mvel.value,"</p>");
    document.write("<p>",frm.servicos.value,"</p>");
    print()
})