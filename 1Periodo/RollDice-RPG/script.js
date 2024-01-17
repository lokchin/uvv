function rolar(){
    let dn = document.getElementById("dn")
    let numDados = dn.value

    let radioFaces = document.querySelector('input[name="faces"]:checked')
    let numFaces = radioFaces.value

    let somatorio = 0
    let rolagens = ""
    let i = 0
    while(i < numDados){
        let rolagem = Math.floor(Math.random()*numFaces)+1
        rolagens = rolagem + "- " + rolagem
        somatorio = somatorio + rolagem
        i = i + 1
    }
    let divRes = document.getElementById("res")
    divRes.innerHTML = somatorio
    let divRolls = document.getElementById("rolagens")
    divRolls.innerHTML = rolagens
}