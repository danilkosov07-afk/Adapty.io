const FeatureFunnelSection = () => {
  return (
    <section className="feature feature--funnel">
      <div className="container feature__inner">
        <div className="feature__left">
          <div className="feature__text">
            <h2 className="section-title">
              Быстро увеличьте доход
              <br />
              от приложения с помощью веб‑воронок
            </h2>
            <p className="section-subtitle">
              Создавайте и запускайте веб‑воронки для приложений, интегрируйте
              платежи и оптимизируйте воронку с помощью A/B‑тестирования — всё
              в одной платформе, без программирования.
            </p>
            <button className="feature__link" type="button">
              Познакомьтесь с FunnelFox
            </button>
          </div>
        </div>
        <div className="feature__right">
          <div className="feature__mock" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
};

export default FeatureFunnelSection;


