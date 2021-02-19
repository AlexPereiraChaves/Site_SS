function calc_total(){
    if (document.getElementById("op").value =="caixa_branca"){
    var qtd= parseInt(document.getElementById('quant').value);
    tot= qtd*240;
    document.getElementById('total').value = tot;
    }
    if (document.getElementById("op").value =="conj_som"){
        var qtd= parseInt(document.getElementById('quant').value);
        tot= qtd*1050;
        document.getElementById('total').value = tot;
        }
}