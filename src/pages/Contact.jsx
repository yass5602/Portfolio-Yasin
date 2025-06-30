export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(e.target.subject.value);
    const message = encodeURIComponent(e.target.message.value);
    window.location.href = `mailto:yasinchk57@gmail.com?subject=${subject}&body=${message}`;
  };

  return (
    <section style={{ 
      padding: '2rem',
      maxWidth: '600px',
      margin: '0 auto'
    }}>
      <h2 style={{
        textAlign: 'center',
        marginBottom: '2rem',
        color: '#333'
      }}>Contact</h2>

      <form onSubmit={handleSubmit} style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem'
        }}>
          <label htmlFor="subject" style={{
            fontWeight: 'bold',
            color: '#555'
          }}>Objet :</label>
          <input
            type="text"
            id="subject"
            name="subject"
            required
            style={{
              padding: '0.8rem',
              borderRadius: '4px',
              border: '1px solid #ddd',
              fontSize: '1rem'
            }}
          />
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem'
        }}>
          <label htmlFor="message" style={{
            fontWeight: 'bold',
            color: '#555'
          }}>Message :</label>
          <textarea
            id="message"
            name="message"
            required
            rows="6"
            style={{
              padding: '0.8rem',
              borderRadius: '4px',
              border: '1px solid #ddd',
              fontSize: '1rem',
              resize: 'vertical'
            }}
          />
        </div>

        <button type="submit" style={{
          padding: '1rem 2rem',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          fontSize: '1rem',
          cursor: 'pointer',
          transition: 'background-color 0.2s',
          marginTop: '1rem'
        }}>
          Envoyer
        </button>
      </form>
    </section>
  );
}