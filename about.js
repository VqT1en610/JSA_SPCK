// Ngày Quốc tế Thiếu nhi là ngày 1/6
var countDownDate = new Date("June 1, 2023 00:00:00").getTime();

// Cập nhật thời gian đếm ngược mỗi giây
var x = setInterval(function () {
    // Lấy thời gian hiện tại
    var now = new Date().getTime();

    // Tính thời gian còn lại giữa ngày hiện tại và ngày Quốc tế Thiếu nhi
    var distance = countDownDate - now;

    // Tính toán các thành phần thời gian: ngày, giờ, phút và giây
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Hiển thị thời gian đếm ngược trong một phần tử HTML có id="countdown"
    document.getElementById("countdown").innerHTML =
        "Còn " + days + " ngày " + hours + " giờ " + minutes + " phút " + seconds + " giây ";

    // Nếu thời gian đếm ngược kết thúc, hiển thị thông báo
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "Chúc mừng Ngày Quốc tế Thiếu nhi!";
    }
}, 1000);
