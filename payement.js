const cartItems = [
    { title: "Book 1", price: 10.99 },
    { title: "Book 2", price: 15.49 },
];

function displayReceipt() {
    const receiptItems = document.getElementById('receiptItems');
    let totalAmount = 0;

    cartItems.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.title}</td>
            <td>$${item.price.toFixed(2)}</td>
        `;
        receiptItems.appendChild(row);

        totalAmount += item.price;
    });

    const totalAmountDisplay = document.getElementById('totalAmount');
    totalAmountDisplay.textContent = `$${totalAmount.toFixed(2)}`;
}

document.addEventListener('DOMContentLoaded', () => {
    displayReceipt();
});
