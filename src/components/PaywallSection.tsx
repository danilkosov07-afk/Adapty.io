const PaywallSection = () => {
  return (
    <section className="paywall">
      <div className="container paywall__inner">
        <div className="paywall__content">
          <h2 className="section-title">
            Тестируйте пейволлы
            <br />
            без релизов приложения
          </h2>
          <p className="section-subtitle">
            Управляйте пейволлами, таргетируйте их, локализуйте и
            персонализируйте не выходя из браузера.
          </p>
          <ul className="paywall__list">
            <li>A/B‑тестирование пейволлов</li>
            <li>Конструктор без кода</li>
            <li>Локализации и таргетинг</li>
          </ul>
        </div>
        <div className="paywall__preview">
          <div className="paywall-card">
            <div className="paywall-card__header">
              <span>Paywall A/B testing</span>
              <span className="paywall-card__tag">Live</span>
            </div>
            <div className="paywall-card__body">
              <p>Сократите ставку возврата на 40%</p>
              <p className="paywall-card__meta">
                Перестаньте терять доход из‑за возвратов — Adapty помогает
                находить и сохранять рискованные подписки.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaywallSection;


