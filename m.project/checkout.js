// تعريف المتغيرات
const cartItemsContainer = document.getElementById('cart-items');
const totalAmount = document.getElementById('total-amount');

// دالة عرض ملخص العربة
function displayCartSummary() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    let total = 0;

    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        itemElement.innerHTML = `
            <p>${item.name} × ${item.quantity}</p>
            <p>${item.price * item.quantity} جنيه</p>
        `;
        cartItemsContainer.appendChild(itemElement);
        total += item.price * item.quantity;
    });

    totalAmount.textContent = total.toFixed(2);
}

// دالة تأكيد الطلب
document.getElementById('checkoutForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('تم إتمام الطلب بنجاح! شكراً لتسوقكم معنا.');
    localStorage.removeItem('cart'); // مسح العربة بعد إتمام الشراء
    window.location.href = 'index.html'; // تحويل المستخدم إلى الصفحة الرئيسية
});

// استدعاء دالة عرض ملخص العربة
displayCartSummary();
