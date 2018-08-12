function takingData() {
    if (localStorage.getItem('sriramnaidu') != null) {
        var dataFromLS = JSON.parse(localStorage.getItem('sriramnaidu'));
        console.log(dataFromLS.length);
    }
}




function empDetails() {
    var Fname = document.getElementById('fname').value;
    var Lname = document.getElementById('lname').value;
    var email = document.getElementById('mail').value;
    var mobile = document.getElementById('phoneNumber').value;
    var DOB = document.getElementById('birthDate').value;

    console.log(Fname, Lname, email, mobile, DOB);

    var muluser = [];
    var user = {
        "Fname": Fname,
        "Lname": Lname,
        "email": email,
        "mobile": mobile,
        "DOB": DOB
    }

    localStorage.getItem('sriramnaidu');
    if (localStorage.getItem('sriramnaidu') != null) {
        var dataFromLS = JSON.parse(localStorage.getItem('sriramnaidu'));
        console.log(dataFromLS);
        muluser.push(user);
        for (var i = 0; i < dataFromLS.length; i++) {
            muluser.push(dataFromLS[i]);
        }
        localStorage.setItem("sriramnaidu", JSON.stringify(muluser));

    } else {
        muluser.push(user);
        localStorage.setItem("sriramnaidu", JSON.stringify(muluser));
    }
}