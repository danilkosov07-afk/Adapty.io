const StatsSection = () => {
  return (
    <section className="stats">
      <div className="container stats__inner">
        <h2 className="section-title">
          Adapty обрабатывает доход от подписок
          <br />с самым высоким SLA уровнем в индустрии
        </h2>
        <div className="stats__grid">
          <div className="stats__item">
            <div className="stats__value">$0 млрд.</div>
            <div className="stats__label">обрабатываемого дохода</div>
          </div>
          <div className="stats__item">
            <div className="stats__value">99.99%</div>
            <div className="stats__label">времени безотказной работы</div>
          </div>
          <div className="stats__item">
            <div className="stats__value">0.0 млрд.</div>
            <div className="stats__label">обслуживаемых пользователей</div>
          </div>
          <div className="stats__item">
            <div className="stats__value">0 млрд.</div>
            <div className="stats__label">обращений к API / месяц</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;


