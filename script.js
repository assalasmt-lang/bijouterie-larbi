import React from 'react';

export default function App() {
  return (
    <div style={styles.container}>
      {/* الترويسة */}
      <header style={styles.header}>
        <h1 style={styles.title}>معرض الأعمال الشخصي</h1>
        <p style={styles.subtitle}>مطور تطبيقات وواجهات ويب | Full-Stack Developer</p>
      </header>

      {/* قسم نبذة عني */}
      <section style={styles.card}>
        <h2 style={styles.cardTitle}>نبذة عني</h2>
        <p style={styles.cardText}>
          مطور ويب شغوف ببناء تطبيقات سريعة وعصرية باستخدام تقنيات React و Vite و Supabase، مهتم بتقديم حلول برمجية سلسة ومخصصة للمحلات والأعمال التجارية.
        </p>
      </section>

      {/* قسم المشاريع */}
      <section style={styles.card}>
        <h2 style={styles.cardTitle}>أبرز المشاريع</h2>
        <div style={styles.projectList}>
          <div style={styles.projectCard}>
            <h3 style={styles.projectTitle}>Bijouterie Larbi</h3>
            <p style={styles.projectDesc}>موقع إلكتروني مخصص لعرض وتنسيق المنتجات والمجوهرات بشكل عصري.</p>
          </div>
          <div style={styles.projectCard}>
            <h3 style={styles.projectTitle}>My Novel App</h3>
            <p style={styles.projectDesc}>تطبيق ويب تفاعلي مع قاعدة بيانات متكاملة بـ Supabase.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

// تنسيقات CSS بسيطة ومباشرة داخل الكود
const styles = {
  container: {
    direction: 'rtl',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    backgroundColor: '#0f172a',
    color: '#f8fafc',
    minHeight: '100vh',
    padding: '40px 20px',
  },
  header: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  title: {
    fontSize: '2.5rem',
    color: '#38bdf8',
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#94a3b8',
  },
  card: {
    backgroundColor: '#1e293b',
    borderRadius: '12px',
    padding: '24px',
    maxWidth: '800px',
    margin: '0 auto 24px auto',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  },
  cardTitle: {
    color: '#38bdf8',
    borderBottom: '2px solid #334155',
    paddingBottom: '8px',
    marginTop: 0,
  },
  cardText: {
    lineHeight: '1.7',
    color: '#cbd5e1',
  },
  projectList: {
    display: 'grid',
    gap: '16px',
    marginTop: '16px',
  },
  projectCard: {
    backgroundColor: '#334155',
    padding: '16px',
    borderRadius: '8px',
  },
  projectTitle: {
    margin: '0 0 8px 0',
    color: '#f1f5f9',
  },
  projectDesc: {
    margin: 0,
    color: '#94a3b8',
  }
};
