subscribeBtn.addEventListener('click', function(event) {
    const subscribeUser = {}
    subscribeUser.firstName = `${contactFirstName.value}`
    subscribeUser.secondName = `${contactSecondName.value}`
    subscribeUser.userEmail = `${email.value}`
    results.innerHTML = `Hello ${subscribeUser.firstName}, <br> Thanks for showing interest in our newsletter, please confirm if ${subscribeUser.userEmail} is your email address, <br/> <a href="confirmemail.htm" class="btn btn-secondary mt-4">Confirm Email</a>`

    function show() {
        if (subscribeUser.firstName && subscribeUser.secondName && subscribeUser.userEmail) {
            resultContainer.style.display = 'block';
            document.getElementById('mainContent').style.filter = 'blur(2px)'
        } else {
            resultContainer.style.display = 'none'
        }
    }
    show()
    timesBtn.addEventListener('click', function() {
        resultContainer.style.display = 'none';
        document.getElementById('mainContent').style.filter = 'none'
    })

    event.preventDefault()
})
