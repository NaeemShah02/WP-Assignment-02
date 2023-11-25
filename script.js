fetch('books.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }
    return response.json();
  })
  .then(books => {
    let html = '';
    books.forEach(book => {
      let htmlSegment = `
      <div class="col-lg-4 col-md-6 mb-4">
      <div class="card">
        <img src="${book.cover_image}" class="card-img-top" alt="${book.title}">
        <div class="card-body">
          <h5 class="card-title">${book.title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${book.author}</h6>
          <p class="card-text">$${book.price}</p>
          <button class="btn btn-primary add-to-cart-btn" data-title="${book.title}" data-price="${book.price}"> Add to Cart</button>
          <button class="btn btn-secondary view-cart-btn" data-title="${book.title}">View Cart</button>
        </div>
      </div>
    </div>
      `;

      html += htmlSegment;
    });

    let container = document.querySelector('.container');
    container.innerHTML = html;

    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    addToCartButtons.forEach(button => {
      button.addEventListener('click', () => {
        const title = button.getAttribute('data-title');
        const price = parseFloat(button.getAttribute('data-price'));

        addToCart(title, price);
      });
    });

    const viewCartButtons = document.querySelectorAll('.view-cart-btn');
    viewCartButtons.forEach(button => {
      button.addEventListener('click', () => {
        viewCart();
      });
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

function addToCart(title, price) {
  console.log(`Added "${title}" to cart with price $${price}`);
}

function viewCart() {
  console.log('View Cart clicked');
}


