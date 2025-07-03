Manual Test Cases – Demo Web Shop

TC001: Verify adding a book item to the shopping cart

Steps:
- Go to https://demowebshop.tricentis.com/
- Click on "Books"
- Click "Add to cart" for the book named "Computing and Internet"

Expected Result:
Item is added to the cart and a success message appears.

Actual Result:
Green message: “The product has been added to your shopping cart”
Cart shows item count as 1

Status: Pass

TC002: Validate viewing items in the shopping cart

Steps:
-Click on "Shopping cart"
-Click on "Go to cart"
-Look for book named "Computing and Internet"

Expected Result:
The shopping cart page displays the item "Computing and Internet" with the correct quantity (1) and price ($10.00). The total matches the expected cost, and the cart is not empty.

Actual Result:
The book "Computing and Internet" is visible in the cart with quantity 1 and price $10.00. The total is correctly calculated and displayed.

Status: Pass

TC003: Confirm removing an item from the shopping cart

Steps:
-Click on "Shopping cart" then click on "Go to cart"
-Check the checkbox next to the item you want to remove
-Click on "Update shopping cart"

Expected Result:
The selected item is removed from the shopping cart. A confirmation message appears saying “Your Shopping Cart is empty!”. The cart total updates to $0.00, and the cart icon reflects zero items.

Actual Result:
After clicking "Update shopping cart", the item was successfully removed. The message “Your Shopping Cart is empty!” appeared, the cart showed no items, and the total was reset to $0.00. The cart icon also updated to reflect 0 items.

Status: Pass

TC004: Test creating a new user account

Steps:
-Click on "Register" from the top navigation menu
-Insert personal details including name, email, and password
-Click on "Register" to submit the form
-Check if the account has been successfully created

Expected Result:
The user is registered successfully, and a confirmation message saying "Your registration completed" is displayed. The user is automatically logged in, and their name appears at the top of the page with a "Log out" option.

Actual Result:
After submitting the registration form, the message "Your registration completed" appeared on the screen. The system automatically logged in the user, and their name was shown in the header with a visible "Log out" link.

Status: Pass

TC005: Verify buying an item as a registered user

Steps:
-Click on "Shopping cart", then click on "Go to cart"
-Enter shipping detail and click "Checkout" 
-Fill in checkout form, inlcuding Billing address, Shipping address, Shipping method, Payment method, Payment information
-Click “Continue” after each section
-Verify that an order number is displayed along with the message “Your order has been successfully processed”

Expected Result:
User should be able to complete the purchase, and the system should display an order number with a confirmation message: “Your order has been successfully processed.”

Actual Result:
Order was placed successfully. Order number and confirmation message were displayed as expected.

Status: Pass