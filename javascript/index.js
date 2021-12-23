$(document).ready(function () {
    $('.form-inscription').submit((e) => {
        e.preventDefault();
        const username = $('#username').val();
        const password = $('#password').val();
        const passwordConfirm = $('#confirmPass').val();
        
        if(password === passwordConfirm){
            console.log('good')
            $.get(`http://greenvelvet.alwaysdata.net/kwick/api/signup/${username}/${paswword}`).done(function(data){
                console.log('data loaded' + JSON.parse(data));
            })
        } else {
            console.log('no');
        };
    });

    $('.form-login').submit((e) => {
        e.prevantDefault();
        const username = $('#usernameLog').val();
        const password = $('#passwordLog').val();

        $get(`http://greenvelvet.alwaysdata.net/kwick/api/login/${username}/${password}`).done(function (data){
            console.log('data loaded' + JSON.parse(data.result)
        })

    });
});