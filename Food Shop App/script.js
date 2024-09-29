document.addEventListener('DOMContentLoaded', () => {
  const products = [
    { id: 1, name: 'Pizza', price: 9.99, image: 'assets/images/pizza.jpg' },
    { id: 2, name: 'Burger', price: 5.99, image: 'assets/images/burger.jpg' },
    { id: 3, name: 'Sushi', price: 12.99, image: 'assets/images/sushi.jpg' },
    { id: 4, name: 'Pasta', price: 7.99, image: 'assets/images/pasta.jpg' },
    { id: 5, name: 'Tacos', price: 8.99, image: 'assets/images/tacos.jpg' },
    { id: 6, name: 'Salad', price: 6.99, image: 'assets/images/salad.jpg' }
  ];

  let cart = [];

  const productList = document.getElementById('product-list');
  const featuredList = document.querySelector('.featured-list');
  const cartSection = document.getElementById('cart');
  const checkoutSection = document.getElementById('checkout');
  const contactForm = document.getElementById('contact-form');

  const renderProducts = () => {
    productList.innerHTML = products.map(product => `
      <div class="product-card">
        <img src="${product.image}" alt="${product.name}">
        <h2>${product.name}</h2>
        <p>$${product.price.toFixed(2)}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      </div>
    `).join('');
  };

  const renderFeaturedProducts = () => {
    const featuredProducts = products.slice(0, 3); // Display the first 3 products as featured
    featuredList.innerHTML = featuredProducts.map(product => `
      <div class="featured-card">
        <img src="${product.image}" alt="${product.name}">
        <h2>${product.name}</h2>
        <p>$${product.price.toFixed(2)}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      </div>
    `).join('');
  };

  const renderCart = () => {
    cartSection.innerHTML = `
      <h2>Your Cart</h2>
      ${cart.length > 0 ? cart.map(item => `
        <div class="cart-item">
          <span>${item.name}</span>
          <span>$${item.price.toFixed(2)}</span>
        </div>
      `).join('') : '<p>Your cart is empty.</p>'}
    `;
    renderCheckout();
  };

  const renderCheckout = () => {
    const total = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);
    checkoutSection.innerHTML = `
      <h2>Checkout</h2>
      <p>Total: $${total}</p>
      <button onclick="proceedToPayment()">Proceed to Payment</button>
    `;
  };

  window.addToCart = (id) => {
    const product = products.find(p => p.id === id);
    cart.push(product);
    renderCart();
  };

  window.proceedToPayment = () => {
    alert('Proceeding to payment');
    cart = [];
    renderCart();
  };

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Message sent!');
    contactForm.reset();
  });

  renderProducts();
  renderFeaturedProducts();
});