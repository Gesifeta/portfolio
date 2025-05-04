
export const TermsOfUse = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Terms of Use</h1>

      <p>Welcome to my portfolio website. By accessing or using this website, you agree to comply with and be bound by the following terms and conditions. Please read them carefully before using this website.</p>

      <h2 style={styles.subheading}>1. Acceptance of Terms</h2>
      <p>By using this website, you agree to be legally bound by these Terms of Use, which shall take effect immediately upon your first use of the website. If you do not agree to be legally bound by all the following terms, please do not access or use the website.</p>

      <h2 style={styles.subheading}>2. Intellectual Property</h2>
      <p>All content, including but not limited to text, graphics, images, code, and design, is the intellectual property of Gemechu Gesifeta unless otherwise stated. You may not copy, reproduce, distribute, or create derivative works from any part of this website without prior written permission from the website owner.</p>

      <h2 style={styles.subheading}>3. User Conduct</h2>
      <ul style={styles.list}>
        <li>You agree not to use this website for any unlawful purposes or in ways that may harm or disrupt the website or other users.</li>
        <li>You agree not to attempt to gain unauthorized access to any portion or feature of the website or any other systems or networks connected to the site.</li>
        <li>You agree not to use any automatic or manual processes to copy or scrape the content of this website without explicit consent.</li>
      </ul>

      <h2 style={styles.subheading}>4. Limitation of Liability</h2>
      <p>This website and its content are provided "as is" without warranties of any kind, either express or implied. I make no warranties or representations about the accuracy or completeness of the website’s content. In no event shall I be liable for any direct, indirect, incidental, or consequential damages arising out of your use of or inability to use this website.</p>

      <h2 style={styles.subheading}>5. External Links</h2>
      <p>This website may contain links to third-party websites. I am not responsible for the content, accuracy, or availability of external sites and do not endorse the content or practices of any third-party websites.</p>

      <h2 style={styles.subheading}>6. Modifications to Terms</h2>
      <p>I reserve the right to change these Terms of Use at any time by posting the updated terms on this website. Your continued use of the website after changes are posted constitutes your acceptance of the new terms.</p>

      <h2 style={styles.subheading}>7. Governing Law</h2>
      <p>These terms and conditions are governed by and construed in accordance with the laws of Ethiopia. Any disputes arising in connection with these terms shall be subject to the exclusive jurisdiction of the courts of Ethiopia.</p>

      <h2 style={styles.subheading}>8. Contact Information</h2>
      <p>If you have any questions about these Terms of Use, please contact me at adamgemechu@gmail.com.</p>
    </div>
  );
};

// Inline styles for the Terms of Use page
const styles = {
  container: {
    maxWidth: '900px',
    margin: '50px auto',
    padding: '20px',
    backgroundColor: '#F5F7FA',
    color: '#1E1E1E',
    borderRadius: '8px',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    fontSize: '2.5rem',
    color: '#007BFF',
  },
  subheading: {
    fontSize: '1.8rem',
    color: '#007BFF',
    marginTop: '20px',
  },
  list: {
    paddingLeft: '20px',
    listStyleType: 'disc',
  },
};

export default TermsOfUse;
