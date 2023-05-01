const submit_button = document.querySelector(".button");
submit_button.onclick = (e) => {
    e.preventDefault();
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const pass = document.getElementById("pass").value;
    const cpass = document.getElementById("cpass").value;

    localStorage.setItem("FirstName", fname);
    localStorage.setItem("LastName", lname);
    localStorage.setItem("Email", email);
    localStorage.setItem("Password", pass);
    localStorage.setItem("Cpassword", cpass);

    if (fname == "" && lname == "" && email == "" && pass == "" && cpass == "") {
        alert("Cần nhập tất cả các ô!");
    } else {
        if (pass.length >= 6 && pass.length <= 20) {
            if (pass !== cpass) {
                alert("Mật khẩu không trùng khớp!");
            } else {
                alert("Đăng ký thành công!");
                setTimeout(() => {
                    location.href = "login.html";
                }, 1000);
            }
        } else {
            alert("Mật khẩu ít nhất 6 kí tự!");
        }
    }
};
// login function

const login = document.querySelector(".login");
login.onclick = (e) => {
    e.preventDefault();
    // catch the value which is type user login page
    const emailAddress = document.getElementById("emailAddress").value;
    const passWord = document.getElementById("passWord").value;

    // let's get value in localstorage which store user in registration field
    const Email = localStorage.getItem("Email");
    const Password = localStorage.getItem("Password");

    if (emailAddress == "" && passWord == "") {
        alert("Cần nhập tất cả các ô!");
    } else {
        if (emailAddress == Email && passWord == Password) {
            alert("Đăng nhập thành công!");
            setTimeout(() => {
                location.href = "index.html";
            }, 1000);
        } else {
            alert("Tài khoản không tồn tại!");
        }
    }
};
