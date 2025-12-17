const SdkLogos = () => (
  <div className="sdk__logos">
    <span>Swift</span>
    <span>Kotlin</span>
    <span>React Native</span>
    <span>Flutter</span>
    <span>Unity</span>
    <span>Capacitor</span>
    <span>Web API</span>
    <span>Stripe</span>
  </div>
);

const SdkSection = () => {
  return (
    <section className="sdk">
      <div className="container sdk__inner">
        <div className="sdk__content">
          <h2 className="section-title">
            Интегрируйте покупки в приложении
            <br />
            с помощью нескольких строк кода
          </h2>
          <p className="section-subtitle">
            Интегрируйте IAP за несколько часов без серверного кодирования с
            помощью простого и удобного SDK. Дальше Adapty будет управлять
            работой и состоянием каждой подписки — от активации до возврата.
          </p>
          <SdkLogos />
        </div>
        <div className="sdk__code">
          <div className="code-card">
            <div className="code-card__header">
              <span>Swift SDK</span>
              <span className="code-card__badge">100% Open Source</span>
            </div>
            <pre>
{`import Adapty

do {
  try await Adapty.activate("PUBLIC_SDK_KEY")
  let purchaseResult = try await Adapty.makePurchase(product)
} catch {
  // handle the error
}`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SdkSection;


