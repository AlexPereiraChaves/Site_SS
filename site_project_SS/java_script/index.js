var index = "b";
function passarImagem(id, fotob, fotoa, fotoc) {

    if (id == "esquerda" && index == "b") {
        document.getElementById("2").src = fotoa;
        index = "a"
    } else {
        if (id == "esquerda" && index == "a") {
            document.getElementById("2").src = fotoc;
            index = "c";
        } else {
            if (id == "esquerda" && index == "c") {
                document.getElementById("2").src = fotob;
                index = "b";
            } else {
                if (id == "direita" && index == "b") {
                    document.getElementById("2").src = fotoc;
                    index = "c";
                } else {
                    if (id == "direita" && index == "c") {
                        document.getElementById("2").src = fotoa;
                        index = "a";
                    } else {
                        if (id == "direita" && index == "a") {
                            document.getElementById("2").src = fotob;
                            index = "b";
                        }
                    }
                }
            }
        }
    }
   
}