const FeatureIntegrationsSection = () => {
  return (
    <section className="feature feature--integrations">
      <div className="container feature__inner">
        <div className="feature__right">
          <div className="feature__mock" aria-hidden="true" />
        </div>
        <div className="feature__left">
          <div className="feature__text">
            <h2 className="section-title">
              Синхронизируйте данные
              <br />
              о покупках с другими сервисами
            </h2>
            <p className="section-subtitle">
              Отправляйте события подписок в сервисы аналитики, атрибуции и
              маркетинга без дополнительного кода.
            </p>
            <button className="feature__link" type="button">
              Больше об интеграциях
            </button>
          </div>
          <article className="feature__quote">
            <p className="feature__quote-text">
              «У них есть отличный внешний API, который позволяет легко
              передавать связанные события в другие инструменты аналитики,
              такие как Amplitude и Mixpanel».
            </p>
            <p className="feature__quote-author">
              Крис Бик, основатель и генеральный директор
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default FeatureIntegrationsSection;


