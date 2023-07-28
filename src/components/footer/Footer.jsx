import "./footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_container custom-container">
        <div className="sign_up">
          <span className="brand">Hekto</span>
          <div className="email_container">
            <input type="text" placeholder="Enter Email Address" />
            <button>Sign Up</button>
          </div>
          <div className="contact_info">
            <span>Contact Info</span>
            <span>17 Princess Road, London, Greater London NW1 8JR, UK</span>
          </div>
        </div>

        <div className="categories list">
          <span className="title">Categories</span>

          <ul>
            <li>Laptops & Computers</li>
            <li>Cameras & Photography</li>
            <li>Smart Phones & Tablets</li>
            <li>Video Games & Consoles</li>
            <li>Waterproof Headphones</li>
          </ul>
        </div>

        <div className="categories list">
          <span className="title">Customer Care</span>
          <ul>
            <li>My Account</li>
            <li>Discount</li>
            <li>Returns</li>
            <li>Orders History</li>
            <li>Order Tracking</li>
          </ul>
        </div>

        <div className="categories list">
          <span className="title">Pages</span>

          <ul>
            <li>Blog</li>
            <li>Browse the Shop</li>
            <li>Category</li>
            <li>Pre-Built Pages</li>
            <li>Visual Composer Elements</li>
            <li>WooCommerce Pages</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
