
document.querySelectorAll('.nav-item > a').forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault();
        // Đóng tất cả dropdown khác
        document.querySelectorAll('.dropdown').forEach(menu => {
            if (menu !== item.nextElementSibling) {
                menu.style.display = 'none';
            }
        });
        // Toggle hiển thị dropdown hiện tại
        const dropdown = item.nextElementSibling;
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    });
});


document.addEventListener('click', event => {
    if (!event.target.closest('.nav-item')) {
        document.querySelectorAll('.dropdown').forEach(menu => {
            menu.style.display = 'none';
        });
    }
});

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const childAge = document.getElementById('childAge').value;

    if(name && phone && childAge) {
        alert(`Cảm ơn ${name}! Bạn đã đăng ký thành công.`);
    } else {
        alert('Vui lòng điền đầy đủ thông tin.');
    }
});
