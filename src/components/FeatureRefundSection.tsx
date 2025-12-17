const FeatureRefundSection = () => {
  return (
    <section className="feature feature--refund">
      <div className="container feature__inner">
        <div className="feature__left">
          <div className="feature__text">
            <h2 className="section-title">
              Сократите ставку
              <br />
              возврата на 40%
            </h2>
            <p className="section-subtitle">
              Перестаньте терять доход из‑за возвратов — Adapty автоматически
              делится данными о действиях пользователей с Apple для обработки
              запросов на возврат и уменьшает их.
            </p>
            <button className="feature__link" type="button">
              Настройка Refund Saver
            </button>
          </div>
        </div>
        <div className="feature__right">
          <div className="feature__mock feature__mock--mint" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
};

export default FeatureRefundSection;


