const Footer = () => {
  return (
    <footer className="premium-footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">
          <h2><i>RegalRent</i></h2>
          <p>Luxury clothing rentals for weddings, parties & special moments.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>About Us</li>
            <li>Our Collection</li>
            <li>How It Works</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Support */}
        <div className="footer-section">
          <h4>Support</h4>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>FAQs</li>
            <li>Returns</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h4>Contact</h4>
          <p>📧 support@regalrent.com</p>
          <p>📞 +91 98765 43210</p>
          <div className="social-icons">
            <span>🌐</span>
            <span>📸</span>
            <span>🐦</span>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 RegalRent. Crafted with elegance ✨</p>
      </div>
    </footer>
  );
};

export default Footer;
