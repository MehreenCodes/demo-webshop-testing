const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  // TC001: Add a book item to the shopping cart
  async function TC001_AddBookToCart() {
    await page.goto('https://demowebshop.tricentis.com/');
    await page.click('a[href="/books"]');
    await page.waitForSelector('.product-item');
    await page.click('text=Computing and Internet >> xpath=../.. >> text=Add to cart');
    await page.waitForSelector('.bar-notification.success', { timeout: 5000 });

    const message = await page.textContent('.bar-notification.success');
    console.log('TC001 - Success message:', message.trim());

    const cartCount = await page.textContent('.cart-qty');
    console.log('TC001 - Cart item count:', cartCount.trim());
  }

  // TC002: Validate viewing items in the shopping cart
  async function TC002_ValidateCartContents() {
    await page.goto('https://demowebshop.tricentis.com/cart');
    await page.waitForSelector('.cart-item-row');

    const bookExists = await page.isVisible('text=Computing and Internet');
    console.log('TC002 - Book found in cart:', bookExists);

    const quantity = await page.inputValue('input.qty-input');
    console.log('TC002 - Quantity:', quantity);

    const price = await page.textContent('.product-unit-price');
    console.log('TC002 - Price:', price.trim());
  }

  // TC003: Confirm removing an item from the shopping cart
  async function TC003_RemoveItemFromCart() {
    await page.goto('https://demowebshop.tricentis.com/cart');

    await page.check('input[name="removefromcart"]');
    await page.click('input[name="updatecart"]');
    await page.waitForSelector('text=Your Shopping Cart is empty!');

    const emptyMessage = await page.textContent('.order-summary-content');
    console.log('TC003 - Cart status message:', emptyMessage.trim());
  }

  try {
    await TC001_AddBookToCart();
    await TC002_ValidateCartContents();
    await TC003_RemoveItemFromCart();
  } catch (error) {
    console.error('Test failed:', error);
  }

  await browser.close();
})();
