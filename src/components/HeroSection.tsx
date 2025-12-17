const HeroSection = () => {
  return (
    <section className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__badge">
            <span className="hero__badge-label">Гайд</span>
            <span className="hero__badge-link">
              Как вырасти до $100K | Скачать
            </span>
          </p>
          <h1 className="hero__title">
            Платформа
            <br />
            для роста
            <br />
            мобильных
            <br />
            приложений
          </h1>
          <p className="hero__subtitle">
            Сэкономьте месяцы на внедрении подписок и удвойте доход от
            приложения благодаря
            <br />
            эффективному управлению пейволлами.
          </p>
          <div className="hero__form">
            <div className="hero__input-wrap">
              <input
                type="email"
                className="hero__input"
                placeholder="Email адрес"
              />
              <button className="btn hero__start-btn">Начать</button>
            </div>
            <button className="hero__demo-link" type="button">
              Запись на демо
            </button>
          </div>
        </div>
        <p className="hero__trust">
          Доверяют более 15,000+ приложений и крупнейших мировых издателей
          приложений
        </p>
      </div>
    </section>
  );
};

export default HeroSection;


