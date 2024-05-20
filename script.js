// JavaScript for client-side form validation
const orderForm = document.getElementById('orderForm');

orderForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const quantity = document.getElementById('quantity').value.trim();

    if (name === '' || email === '' || quantity === '') {
        alert('Please fill in all fields.');
        return;
    }

    if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    if (isNaN(quantity) || quantity <= 0) {
        alert('Please enter a valid quantity.');
        return;
    }

    // Submit the form if all validation passes
    this.submit();
});

function isValidEmail(email) {
    // Simple email validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// JavaScript для плавной анимации прокрутки к разделам
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1); // Получаем id целевого раздела
        const targetSection = document.getElementById(targetId); // Получаем элемент целевого раздела

        if (targetSection) {
            const offsetTop = targetSection.offsetTop; // Получаем вертикальное смещение целевого раздела от верха страницы

            // Выполняем плавную анимацию прокрутки
            window.scroll({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});
