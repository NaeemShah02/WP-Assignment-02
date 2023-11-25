function fetchBooks() {
    return fetch('books.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }
            return response.json();
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function extractCategories(books) {
    return [...new Set(books.map(book => book.category))];
}

function displayCategories(categories) {
    const categoriesList = document.getElementById('categoriesList');

    categories.forEach(category => {
        const categoryItem = document.createElement('div');
        categoryItem.classList.add('col-md-3', 'mb-3', 'category-item', 'text-center', 'bg-primary', 'text-white', 'p-3', 'rounded');
        categoryItem.textContent = category;
        categoryItem.addEventListener('click', () => displayBooksByCategory(category));
        categoriesList.appendChild(categoryItem);
    });
}

function displayBooksByCategory(category) {
    fetchBooks().then(books => {
        const filteredBooks = (category === 'All') ? books : books.filter(book => book.category === category);

        const bookDetailsContainer = document.getElementById('bookDetails');
        bookDetailsContainer.innerHTML = '';

        filteredBooks.forEach(book => {
            const bookCard = document.createElement('div');
            bookCard.classList.add('col-md-4', 'mb-3');
            bookCard.innerHTML = `
                <div class="card">
                    <img src="${book.cover_image}" class="card-img-top" alt="${book.title}">
                    <div class="card-body">
                        <h5 class="card-title">${book.title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${book.author}</h6>
                        <p class="card-text">$${book.price}</p>
                        <button class="btn btn-primary add-to-cart-btn" data-title="${book.title}" data-price="${book.price}">Add to Cart</button>
                        <button class="btn btn-secondary view-cart-btn" data-title="${book.title}">View Cart</button>  
                    </div>
                </div>
            `;
            bookDetailsContainer.appendChild(bookCard);
        });
    });
}

fetchBooks().then(books => {
    const categories = extractCategories(books);
    displayCategories(['All', ...categories]); 
    displayBooksByCategory('All');
});





















