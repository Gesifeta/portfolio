import React from 'react';

const CookiePolicy = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Cookie Policy</h1>

      <p>This Cookie Policy explains how and why cookies and similar technologies are used on my portfolio website.</p>

      <h2 style={styles.subheading}>1. What Are Cookies?</h2>
      <p>Cookies are small text files that are placed on your device (computer, smartphone, tablet) when you visit a website. They help the website remember your preferences and improve your browsing experience.</p>

      <h2 style={styles.subheading}>2. How We Use Cookies</h2>
      <p>We use cookies for the following purposes:</p>
      <ul style={styles.list}>
        <li>**Essential Cookies**: These are necessary for the website to function and cannot be switched off in our systems. They are typically set in response to actions made by you, such as setting privacy preferences, logging in, or filling out forms.</li>
        <li>**Analytics Cookies**: These cookies allow us to measure and improve the performance of our website by understanding how visitors interact with the site (e.g., which pages are most popular, how long users spend on the site).</li>
      </ul>

      <h2 style={styles.subheading}>3. Types of Cookies We Use</h2>
      <p>We may use the following types of cookies on this website:</p>
      <ul style={styles.list}>
        <li>**Session Cookies**: Temporary cookies that are deleted from your device when you close your web browser.</li>
        <li>**Persistent Cookies**: Cookies that remain on your device until they expire or you delete them.</li>
        <li>**Third-Party Cookies**: These are cookies set by external services like Google Analytics to help track and analyze site traffic and usage. We do not have control over these cookies but recommend checking the third-party privacy policies for more information.</li>
      </ul>

      <h2 style={styles.subheading}>4. Managing Cookies</h2>
      <p>You can control and manage cookies through your browser settings. You have the option to block or delete cookies, but please note that doing so may affect your browsing experience and limit certain functionalities on the website.</p>
      <p>Here are links to manage cookies on popular browsers:</p>
      <ul style={styles.list}>
        <li><a href="https://support.google.com/chrome/answer/95647" style={styles.link}>Google Chrome</a></li>
        <li><a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences" style={styles.link}>Mozilla Firefox</a></li>
        <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" style={styles.link}>Safari</a></li>
        <li><a href="https://support.microsoft.com/en-us/help/17442/windows-internet-explorer-delete-manage-cookies" style={styles.link}>Internet Explorer</a></li>
      </ul>

      <h2 style={styles.subheading}>5. Changes to This Cookie Policy</h2>
      <p>We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically to stay informed about our use of cookies.</p>

      <h2 style={styles.subheading}>6. Contact Us</h2>
      <p>If you have any questions about this Cookie Policy, please contact me at adamgemechu@gmail.com.</p>
    </div>
  );
};

// Inline styles for the Cookie Policy page
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
    marginBottom: '20px',
  },
  link: {
    color: '#007BFF',
    textDecoration: 'none',
  },
};

export default CookiePolicy;
