function takingData() {
    if (localStorage.getItem('sriram') != null) {
        var dataFromLS = JSON.parse(localStorage.getItem('sriram'));
        console.log(dataFromLS.length);
    }
}




function signupFun() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('mail').value;
    var mobile = document.getElementById('number').value;
    var password = document.getElementById('pass1').value;

    console.log(name, email, mobile, password);

    var muluser = [];
    var user = {
        "name": name,
        "email": email,
        "mobile": mobile,
        "password": password
    }

    localStorage.getItem('sriram');
    if (localStorage.getItem('sriram') != null) {
        var dataFromLS = JSON.parse(localStorage.getItem('sriram'));
        console.log(dataFromLS);
        muluser.push(user);
        for (var i = 0; i < dataFromLS.length; i++) {
            muluser.push(dataFromLS[i]);
        }
        localStorage.setItem("sriram", JSON.stringify(muluser));

    } else {
        muluser.push(user);
        localStorage.setItem("sriram", JSON.stringify(muluser));
    }
}