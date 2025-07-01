import '../styles/Contact.css';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(e.target.subject.value);
    const message = encodeURIComponent(e.target.message.value);
    window.location.href = `mailto:yasinchk57@gmail.com?subject=${subject}&body=${message}`;
  };

  return (
    <section className="contact-section">
      <h2 className="contact-title">Contact</h2>

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="contact-form-group">
          <label htmlFor="subject" className="contact-label">Objet :</label>
          <input
            type="text"
            id="subject"
            name="subject"
            required
            className="contact-input"
          />
        </div>

        <div className="contact-form-group">
          <label htmlFor="message" className="contact-label">Message :</label>
          <textarea
            id="message"
            name="message"
            required
            rows="6"
            className="contact-textarea"
          />
        </div>

        <button type="submit" className="contact-button">
          Envoyer
        </button>
      </form>
    </section>
  );
}