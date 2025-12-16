export function FAQItem({ pregunta }) {
  return (
    <div className="faq-h-item">
      <i className={`bi ${pregunta.icon} faq-h-icon`}></i>
      <div>
        <h5 className="faq-h-question">{pregunta.question}</h5>
        <p className="faq-h-answer">{pregunta.answer}</p>
      </div>
    </div>
  );
}
