XPath = XML Path
● Có 2 loại:
○ Tuyệt đối: đi dọc theo cây DOM
■ bắt đầu bởi 1 /
○ Tương đối: tìm dựa vào đặc tính
■ bắt đầu bởi 2 //
■ //tenthe[@thuoctinh=”gia
tri”]

● Nên dùng XPath tương đối


XPath Tuyệt Đối
Bắt đầu từ root (gốc), dùng dấu /
/html/body/div/input

Đặc điểm:
● Bắt đầu bằng /
● Phải viết đầy đủ đường dẫn từ root
● Dễ bị lỗi khi cấu trúc HTML thay đổi
● Ít linh hoạt


XPath Tuưng Đối
Bắt đầu từ bất kỳ đâu trong DOM, dùng //
//input[@id=’user’]
Đặc điểm:
● Bắt đầu bằng //
● Tìm element ở bất kỳ vị trí nào
● Linh hoạt, ít bị ảnh hưởng khi HTML
thay đổi
● Nên dùng trong thực tế