const CasesSection = () => {
  return (
    <section className="cases">
      <div className="container cases__inner">
        <div className="cases__header">
          <h2 className="section-title">Кейсы клиентов</h2>
          <p className="section-subtitle">
            Изучите, как компании используют Adapty для роста выручки от
            подписок и оптимизации пейволлов.
          </p>
        </div>
        <div className="cases__grid">
          <article className="case-card">
            <h3>Going Merry</h3>
            <p className="case-card__metric">Рост MRR в 5 раз</p>
            <p className="case-card__text">
              Как масштабировать доход от подписок с помощью Paywall Builder.
            </p>
          </article>
          <article className="case-card">
            <h3>Glam AI</h3>
            <p className="case-card__metric">ROAS — 108%</p>
            <p className="case-card__text">
              До $1.2 млн выручки в год за 3 месяца с оптимизацией платящей
              аудитории.
            </p>
          </article>
          <article className="case-card">
            <h3>Pepapp</h3>
            <p className="case-card__metric">Окупаемость — 400%</p>
            <p className="case-card__text">
              Как сделать Adapty бесплатным за счёт увеличения удержания и
              дохода от подписок.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default CasesSection;


