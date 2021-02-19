function cadastro(){

    var data = new Date()
    var ano = data.getFullYear()

    var fano = document.getElementById('ano')
    var user = document.getElementById('user')
    var email = document.getElementById('email')


    var res = document.getElementById('res')
    
    if (fano.value.length == 0 || user.value.length == 0) {
        window.alert('preencha todos os dados')
    }
}