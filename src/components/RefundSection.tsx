const RefundSection = () => {
  return (
    <section className="refund">
      <div className="container refund__inner">
        <div className="refund__left">
          <div className="refund__mock" aria-hidden="true" />
        </div>
        <div className="refund__right">
          <div className="refund__text">
            <h2 className="section-title">
              Сократите ставку
              <br />
              возврата на 40%
            </h2>
            <p className="section-subtitle">
              Перестаньте терять доход из‑за возвратов — Adapty автоматически
              делится данными о действиях пользователей с Apple для запросов на
              возврат и уменьшает их.
            </p>
            <button className="refund__link" type="button">
              Настройка Refund Saver
            </button>
          </div>
          <article className="refund__quote">
            <p className="refund__quote-text">
              «Я никогда не думала, что возврат денег может иметь такое
              значение. Мы просто щёлкнули выключателем, настроили его, и вдруг
              нам показалось, что мы перестали позволять деньгам ускользать».
            </p>
            <p className="refund__quote-author">
              Берк Чагатай Албайрак, старший менеджер по продуктам
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default RefundSection;


