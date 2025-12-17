const FeatureBuilderSection = () => {
  return (
    <section className="feature feature--builder">
      <div className="container feature__inner">
        <div className="feature__right">
          <div className="feature__mock" aria-hidden="true" />
        </div>
        <div className="feature__left">
          <div className="feature__text">
            <h2 className="section-title">Конструктор пейволлов</h2>
            <p className="section-subtitle">
              Создавайте красивые нативные пейволлы для iOS, Android, Flutter и
              React Native без единой строчки кода.
            </p>
            <button className="feature__link" type="button">
              Больше о создании пейволлов
            </button>
          </div>
          <article className="feature__quote">
            <p className="feature__quote-text">
              «Конструктор пейволлов и инструменты A/B‑тестирования Adapty в
              сочетании друг с другом — это революция для команд, которые
              постоянно тестируют и ищут наиболее прибыльные решения».
            </p>
            <p className="feature__quote-author">
              Майк МакСунни, директор по продукту
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default FeatureBuilderSection;


