import { useState } from "react";

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

const tabs = ["Swift", "Kotlin", "React Native", "Flutter", "Unity"] as const;
type TabId = (typeof tabs)[number];

const codeByTab: Record<TabId, string> = {
  Swift: `// Your app's code
import Adapty

do {
  try await Adapty.activate("PUBLIC_SDK_KEY")
  let purchaseResult = try await Adapty.makePurchase(product)
  // successful purchase
} catch {
  // handle the error
}`,
  Kotlin: `// Your app's code
Adapty.activate(this, AdaptyConfig.Builder("YOUR_APP_KEY").build())

// Make a purchase, Adapty handles the rest
Adapty.makePurchase(activity, product) { result ->
    when (result) {
        is AdaptyResult.Success -> {
            if (result.value is AdaptyPurchaseResult.Success) {
                // successful purchase
            }
        }
        is AdaptyResult.Error -> {
            // handle the error
        }
    }
}`,
  "React Native": `// Your app's code
import { adapty } from 'react-native-adapty';
await adapty.activate('YOUR_APP_KEY');

try {
  const profile = await adapty.makePurchase(product);
  // successful purchase
} catch (error) {
  // handle the error
}`,
  Flutter: `// Your app's code
import 'package:adapty_flutter/adapty_flutter.dart';

try {
  await Adapty().activate();
  final purchaseResult = await Adapty().makePurchase(product: product);
  // successful purchase
} on AdaptyError catch (adaptyError) {
  // handle the error
} catch (error) {
  // handle other errors
}`,
  Unity: `// Your app's code
using AdaptySDK;

Adapty.makePurchase(product, (profile, error) => {
    if (error == null) {
        // successful purchase
    }
});`,
};

const SdkSection = () => {
  const [activeTab, setActiveTab] = useState<TabId>("Swift");

  return (
    <section className="sdk">
      <div className="container">
        <h2 className="section-title sdk__title">
          Интегрируйте покупки в приложении
          <br />
          с помощью нескольких строк кода
        </h2>
        <div className="sdk__inner">
          <div className="sdk__content">
            <p className="section-subtitle">
              Интегрируйте IAP за несколько часов
              <br />
              без серверного кодирования
              <br />
              с помощью простого и удобного SDK.
              <br />
              Дальше Adapty будет управлять работой
              <br />
              и состоянием каждой подписки — от активации до возврата.
            </p>
            <SdkLogos />
          </div>
          <div className="sdk__code">
            <div className="code-card">
              <div className="code-card__tabs">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    className={
                      tab === activeTab
                        ? "code-card__tab code-card__tab--active"
                        : "code-card__tab"
                    }
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <div className="code-card__header">
                <span>{activeTab}</span>
                <button
                  type="button"
                  className="code-card__copy"
                  onClick={() => {
                    const text = codeByTab[activeTab];
                    if (navigator.clipboard?.writeText) {
                      navigator.clipboard.writeText(text).catch(() => {
                        // ignore errors silently
                      });
                    }
                  }}
                >
                  <span className="code-card__copy-icon" />
                </button>
              </div>
              <div className="code-card__body">
                <pre>{codeByTab[activeTab]}</pre>
              </div>
              <div className="code-card__footer">
                <a
                  href="https://github.com/adaptyteam"
                  target="_blank"
                  rel="noreferrer"
                  className="code-card__github"
                >
                  <span className="code-card__github-icon" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://github.com/adaptyteam/AdaptySDK-Unity"
                  target="_blank"
                  rel="noreferrer"
                  className="code-card__cta"
                >
                  Go to GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SdkSection;


