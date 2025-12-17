const TestimonialsSection = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="section-title">
          Реальные истории роста наших клиентов
        </h2>
        <div className="testimonials__grid">
          <article className="testimonial">
            <h3>Productivity app</h3>
            <p className="testimonial__metric">+50% общей выручки</p>
            <p className="testimonial__text">
              Как ценовые тесты раскрыли потенциал подписок с помощью Adapty.
            </p>
          </article>
          <article className="testimonial">
            <h3>Shmoody</h3>
            <p className="testimonial__metric">ARR вырос с $0 до $2M</p>
            <p className="testimonial__text">
              Как вырасти от бесплатного приложения до $2M ARR с Adapty.
            </p>
          </article>
          <article className="testimonial">
            <h3>Lively</h3>
            <p className="testimonial__metric">−83% возвратов</p>
            <p className="testimonial__text">
              Сэкономлено 82% потенциального дохода благодаря Refund Saver.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;


