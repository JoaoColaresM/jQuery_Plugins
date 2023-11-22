$(document).ready(function(){
    $('h1').click(function(){
        $('form').slideToggle()
    })
    
    $('#telefone').mask('(00) 00000-0000', {placeholder: 'Celular (xx) xxxxx-xxxx'})
    $('#cpf').mask('000.000.000-00', {placeholder: 'xxx.xxx.xxx-xx'})
    $('#cep').mask('00000-000', {placeholder: 'xxxxx-xxx'})

    $('form').validate({
        rules: {
            nome:{
                required: true
            },
            email:{
                required: true
            },
            telefone:{
                required: false
            },
            cpf:{
                required: true
            },
            endereco:{
                required: true
            },
            cep:{
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome.',
            email: 'Por favor, insira o seu e-mail.',
            cpf: 'Por favor, insira o seu cpf.',
            endereco: 'Por favor, insira o seu endereço.',
            cep: 'Por favor, insira o seu cep.'
        }
    })
})