import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from '../page.module.css'; // Reusing some styles

export default function PrivacyPolicy() {
  return (
    <main>
      <Navbar />
      <section style={{ paddingTop: '160px' }}>
        <div className="container">
          <div className="eyebrow">Legal</div>
          <h1 style={{ fontSize: '48px', marginBottom: '40px', color: 'var(--cream)' }}>Privacy Policy</h1>
          
          <div style={{ color: 'var(--gray)', lineHeight: '1.8', maxWidth: '800px' }}>
            <p style={{ marginBottom: '24px' }}>Last updated: May 27, 2026</p>
            
            <h3 style={{ color: 'var(--cream)', marginTop: '40px', marginBottom: '16px' }}>1. Introduction</h3>
            <p style={{ marginBottom: '24px' }}>
              OFFEE ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share information about you when you use our website and services.
            </p>

            <h3 style={{ color: 'var(--cream)', marginTop: '40px', marginBottom: '16px' }}>2. Information We Collect</h3>
            <p style={{ marginBottom: '24px' }}>
              We collect information you provide directly to us, such as when you create an account, check in to a workspace, or communicate with us via WhatsApp. This may include your name, email address, phone number, and payment information.
            </p>

            <h3 style={{ color: 'var(--cream)', marginTop: '40px', marginBottom: '16px' }}>3. How We Use Information</h3>
            <p style={{ marginBottom: '24px' }}>
              We use the information we collect to provide, maintain, and improve our services, including to process transactions, send check-in confirmations, and respond to your comments and questions.
            </p>

            <h3 style={{ color: 'var(--cream)', marginTop: '40px', marginBottom: '16px' }}>4. Sharing of Information</h3>
            <p style={{ marginBottom: '24px' }}>
              We do not share your personal information with third parties except as described in this policy, such as with service providers who perform services on our behalf (e.g., payment processing via Razorpay).
            </p>

            <h3 style={{ color: 'var(--cream)', marginTop: '40px', marginBottom: '16px' }}>5. Contact Us</h3>
            <p style={{ marginBottom: '24px' }}>
              If you have any questions about this Privacy Policy, please contact us at hello@offee.space.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
