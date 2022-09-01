let form = document.querySelector('.enviar')



form.addEventListener('submit', (event) => {

    let nome = document.querySelector('.nome').value

    let n1 = document.querySelector('.n1').value

    let n2 = document.querySelector('.n2').value

    let n3 = document.querySelector('.n3').value

    let n4 = document.querySelector('.n4').value



    const media = (n1, n2, n3, n4) => {
        let res = (parseInt(n1) + parseInt(n2) + parseInt(n3) + parseInt(n4)) / 4
        return res
    }

    let nota = media(n1, n2, n3, n4)

    if (nota < 5) {

        let p = document.querySelector('p').innerHTML = `${nome}` + ` sua nota é      ${nota}` + " voce foi reprovado"
    } else {
        let p = document.querySelector('p').innerHTML = `${nome}` + ` sua nota é   ${nota} ` + "voce foi aprovado parabéns"

    }






    event.preventDefault()





})












