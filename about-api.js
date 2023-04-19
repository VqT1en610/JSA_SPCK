// Gọi API để lấy thông tin về Ngày Quốc tế Thiếu nhi
fetch("https://date.nager.at/api/v3/NextPublicHolidaysWorldwide?countryCode=VN")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    // Tìm Ngày Quốc tế Thiếu nhi trong dữ liệu trả về từ API
    const childrensDay = data.find(
      (holiday) => holiday.name === "International Children's Day"
    );

    if (childrensDay) {
      // Hiển thị thông tin về Ngày Quốc tế Thiếu nhi
      const countdownDiv = document.getElementById("countdown");
      const countdownText = document.createTextNode(
        "Ngày Quốc tế Thiếu nhi sắp đến: " + childrensDay.date
      );
      countdownDiv.appendChild(countdownText);
    } else {
      console.log(
        "Không tìm thấy Ngày Quốc tế Thiếu nhi trong dữ liệu từ API."
      );
    }
  })
  .catch((error) => console.log(error));
