const FeatureAnalyticsSection = () => {
  return (
    <section className="feature feature--analytics">
      <div className="container feature__inner">
        <div className="feature__left">
          <div className="feature__text">
            <h2 className="section-title">
              Смотрите показатели подписок
              <br />
              в любой момент
            </h2>
            <p className="section-subtitle">
              Следите за экономикой приложения в реальном времени, используя
              готовую систему аналитики с десятками ключевых метрик.
            </p>
            <button className="feature__link" type="button">
              Больше об аналитике
            </button>
          </div>
          <article className="feature__quote">
            <p className="feature__quote-text">
              «Аналитика Adapty предоставляет неоценимые сведения об
              успешности приложения. Благодаря подробным показателям дохода,
              оттока и ARPU мы принимаем обоснованные решения для роста
              выручки».
            </p>
            <p className="feature__quote-author">
              Николай Чеботарев, руководитель UA в Moonly.app
            </p>
          </article>
        </div>
        <div className="feature__right">
          <div className="feature__mock" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
};

export default FeatureAnalyticsSection;


