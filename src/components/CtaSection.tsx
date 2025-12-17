const CtaSection = () => {
  return (
    <section className="cta">
      <div className="container cta__inner">
        <div>
          <h2 className="section-title">
            Начните сегодня
            <br />
            или запланируйте демонстрацию
          </h2>
          <p className="section-subtitle">
            Получите индивидуальный онбординг и рекомендации по росту выручки
            от подписок.
          </p>
        </div>
        <div className="cta__actions">
          <button className="btn btn-primary">Начать бесплатно</button>
          <button className="btn btn-secondary">Записаться на демонстрацию</button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;


