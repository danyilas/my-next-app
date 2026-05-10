import Link from 'next/link';

export default function Home() {
  return (
      <main style={styles.main}>
        <div style={styles.hero}>
          <div style={styles.heroContent}>
            <p style={styles.subtitle}>Валидация форм с React Hook Form</p>
            <Link href="/register" style={styles.link}>
              <button style={styles.button}>
                <span></span> Начать регистрацию
              </button>
            </Link>
          </div>
        </div>
      </main>
  );
}

const styles = {
  main: {
    minHeight: '100vh',
    background: 'rgba(89,65,39,0.8)',
    padding: '40px 20px',
  },
  hero: {
    maxWidth: '1200px',
    margin: '0 auto',
    textAlign: 'center' as const,
  },
  heroContent: {
    marginBottom: '60px',
  },
  title: {
    fontSize: '64px',
    fontWeight: '800' as const,
    color: 'white',
    margin: '0 0 20px 0',
    textShadow: '0 4px 20px rgba(0,0,0,0.2)',
    letterSpacing: '-2px',
  },
  subtitle: {
    fontSize: '24px',
    color: 'rgba(255,255,255,0.9)',
    marginBottom: '40px',
    fontWeight: 300,
  },
  link: {
    textDecoration: 'none',
  },
  button: {
    padding: '18px 40px',
    fontSize: '18px',
    fontWeight: 600,
    color: 'rgba(89,65,39,0.8)',
    background: 'white',
    border: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  features: {
    display: 'flex',
    gap: '30px',
    justifyContent: 'center',
    flexWrap: 'wrap' as const,
  },
  feature: {
    background: 'rgba(255,255,255,0.1)',
    backdropFilter: 'blur(10px)',
    padding: '30px',
    borderRadius: '20px',
    width: '250px',
    border: '1px solid rgba(255,255,255,0.2)',
  },
  featureIcon: {
    fontSize: '48px',
    display: 'block',
    marginBottom: '15px',
  },
};