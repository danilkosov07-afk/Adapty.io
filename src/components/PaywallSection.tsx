const PaywallSection = () => {
  return (
    <section className="paywall">
      <div className="container paywall__inner">
        <div className="paywall__left">
          <div className="paywall__text">
            <h2 className="section-title">
              Тестируйте пейволлы без
              <br />
              релизов приложения
            </h2>
            <p className="section-subtitle">
              Управляйте пейволлами, таргетируйте их, локализуйте и
              персонализируйте не выходя из браузера.
            </p>
            <button className="paywall__link" type="button">
              Больше про A/B‑тесты
            </button>
          </div>
          <article className="paywall__quote">
            <p className="paywall__quote-text">
              «Будь то A/B‑тестирование пейволлов, прогнозирование LTV или
              анализ показателей подписки, Adapty — идеальный набор
              инструментов для роста приложения».
            </p>
            <p className="paywall__quote-author">
              Ильгар Тали, основатель и директор по позиционированию
            </p>
          </article>
        </div>
        <div className="paywall__right">
          <div className="paywall__mock" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
};

export default PaywallSection;


