function pa() {
    var valor = parseInt(document.getElementById('inicial').value);
    var razao = parseInt(document.getElementById('razao').value);
    var termo = parseInt(document.getElementById('termo').value);
    var res = document.getElementById("res")
    var pa = '';

    for (var i = 1; i <= termo; i++) {
        valor += razao;
        pa += "Termo " + i + " = " + valor + "<br />";

    }
    res.innerHTML = (`Sua progressão é aritmética: <br>${pa}`)
}

function pg() {
    var valor = parseInt(document.getElementById('inicial2').value);
    var razao = parseInt(document.getElementById('razao2').value);
    var termo = parseInt(document.getElementById('termo2').value);
    var res = document.getElementById("res2");
    var pg = '';

    for (var i = 1; i <= termo; i++) {
        var termoAtual = valor * Math.pow(razao, i - 1);
        pg += "Termo " + i + " = " + termoAtual + "<br />";
    }

    res.innerHTML = "Sua progressão geomética é: <br>" + pg;
}