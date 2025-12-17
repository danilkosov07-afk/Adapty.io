const HeroSection = () => {
  return (
    <section className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__badge">Гайд «Как вырасти до $100K»</p>
          <h1 className="hero__title">
            Платформа для роста
            <br />
            мобильных приложений
          </h1>
          <p className="hero__subtitle">
            Сэкономьте месяцы на внедрении подписок и удвойте доход от
            приложения благодаря эффективному управлению пейволлами.
          </p>
          <div className="hero__actions">
            <button className="btn btn-primary">Начать бесплатно</button>
            <button className="btn btn-secondary">Записаться на демо</button>
          </div>
          <p className="hero__trust">
            Доверяют более 15,000+ приложений и крупнейших мировых издателей
            приложений
          </p>
        </div>
        <div className="hero__visual">
          <div className="hero-card hero-card--primary">
            <h3>Adapty Paywall Demo</h3>
            <p>Управляйте пейволлами и подписками без релизов приложения.</p>
          </div>
          <div className="hero-card hero-card--secondary">
            <h3>Adapty Overview</h3>
            <p>Аналитика, A/B‑тесты и управление подписками в одном месте.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


