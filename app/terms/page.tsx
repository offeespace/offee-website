import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function TermsAndConditions() {
  return (
    <main>
      <Navbar />
      <section style={{ paddingTop: '160px' }}>
        <div className="container">
          <div className="eyebrow">Legal</div>
          <h1 style={{ fontSize: '48px', marginBottom: '40px', color: 'var(--cream)' }}>Terms & Conditions</h1>
          
          <div style={{ color: 'var(--gray)', lineHeight: '1.8', maxWidth: '800px' }}>
            <p style={{ marginBottom: '24px' }}>Last updated: May 27, 2026</p>
            
            <h3 style={{ color: 'var(--cream)', marginTop: '40px', marginBottom: '16px' }}>1. Acceptance of Terms</h3>
            <p style={{ marginBottom: '24px' }}>
              By accessing or using the OFFEE website and services, you agree to be bound by these Terms & Conditions.
            </p>

            <h3 style={{ color: 'var(--cream)', marginTop: '40px', marginBottom: '16px' }}>2. Use of Services</h3>
            <p style={{ marginBottom: '24px' }}>
              You agree to use our services only for lawful purposes and in accordance with these Terms. You are responsible for maintaining the confidentiality of your account information.
            </p>

            <h3 style={{ color: 'var(--cream)', marginTop: '40px', marginBottom: '16px' }}>3. Workspace Access</h3>
            <p style={{ marginBottom: '24px' }}>
              Access to OFFEE Zones is provided for professional work and productivity. We reserve the right to refuse access if our code of conduct is violated.
            </p>

            <h3 style={{ color: 'var(--cream)', marginTop: '40px', marginBottom: '16px' }}>4. Payments and Refunds</h3>
            <p style={{ marginBottom: '24px' }}>
              All payments are processed securely. Refunds are handled on a case-by-case basis in accordance with our refund policy.
            </p>

            <h3 style={{ color: 'var(--cream)', marginTop: '40px', marginBottom: '16px' }}>5. Limitation of Liability</h3>
            <p style={{ marginBottom: '24px' }}>
              OFFEE shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use or inability to use our services.
            </p>

            <h3 style={{ color: 'var(--cream)', marginTop: '40px', marginBottom: '16px' }}>6. Changes to Terms</h3>
            <p style={{ marginBottom: '24px' }}>
              We reserve the right to modify these Terms at any time. We will provide notice of any material changes by posting the new Terms on our website.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
