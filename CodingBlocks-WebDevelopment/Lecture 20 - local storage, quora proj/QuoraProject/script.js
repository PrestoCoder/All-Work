$('.signup-btn')
    .click((ev) => {
        ev.preventDefault();
        // Username password validate ka code yahan aayega.
        let users = localStorage.getItem('users') || [];
        // Agar ek bhi user nahi hai
        if(users.length === 0) {
            // Ek user banao
            users.push({
                "username":$('#username').val(),
                "password":$('#password').val()
            })
            localStorage.setItem('users', JSON.stringify(users))
           
        } 
        else {
            users = JSON.parse(users);
            let userAlreadyExists = false;
            // Checking if username or password already exists
            users.forEach((data) => {
                if(data.username === $('#username').val()) {
                    alert("Username already exists, please choose a new one");
                    userAlreadyExists = true;
                    return;
                }
                if(data.password === $('#password').val()) {
                    alert("Password already exists, please choose a new one");
                    userAlreadyExists = true;
                    return;
                }
            })
            // Agar naya user, daaldo user ko
            if(!userAlreadyExists) {
                users.push({
                    "username":$('#username').val(),
                    "password":$('#password').val()
                })
                localStorage.setItem('users', JSON.stringify(users))
            }
            window.location.href = 'http://www.google.com';
        }
    })


    $('.login-btn')
        .click(() => {
            ev.preventDefault();
            // Check if user hai bhi ki ni
            users = JSON.parse(users);
            let doesUserExist = false;
            // Checking if username or password already exists
            users.forEach((data) => {
                if(data.username === $('#username').val()) {
                    alert("Username already exists, please choose a new one");
                    userAlreadyExists = true;
                    return;
                }
                if(data.password === $('#password').val()) {
                    alert("Password already exists, please choose a new one");
                    userAlreadyExists = true;
                    return;
                }
            })
        })