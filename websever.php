<!DOCTYPE html>
<html>
<head>
    <title>Tính tuổi</title>
</head>
<body>

<?php
// Kiểm tra nếu form đã được submit
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Lấy năm sinh từ biểu mẫu
    $namSinh = $_POST["namSinh"];

    // Kiểm tra xem năm sinh có hợp lệ không
    if (is_numeric($namSinh) && $namSinh > 0) {
        // Lấy năm hiện tại
        $namHienTai = date("Y");

        // Tính tuổi
        $tuoi = $namHienTai - $namSinh;

        // Hiển thị kết quả
        echo "Năm sinh của bạn là: $namSinh <br>";
        echo "Tuổi của bạn là: $tuoi tuổi";
    } else {
        // Hiển thị thông báo lỗi nếu năm sinh không hợp lệ
        echo "Vui lòng nhập một năm sinh hợp lệ.";
    }
}
?>

<!-- Form nhập năm sinh -->
<form method="post" action="<?php echo $_SERVER["PHP_SELF"];?>">
    <label for="namSinh">Nhập năm sinh:</label>
    <input type="text" id="namSinh" name="namSinh">
    <input type="submit" value="Tính tuổi">
</form>

</body>
</html>
