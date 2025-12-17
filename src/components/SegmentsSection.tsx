const SegmentsSection = () => {
  return (
    <section className="segments">
      <div className="container">
        <h2 className="section-title">
          Управляйте своим подписочным бизнесом.
          <br />
          Быстрее и дешевле.
        </h2>
        <div className="segments__grid">
          <div className="segments__card">
            <h3>Для разработчиков</h3>
            <ul>
              <li>Подписки SDK</li>
              <li>Сбережение на возвратах</li>
              <li>Удалённая конфигурация</li>
              <li>Резервные пейволлы</li>
            </ul>
          </div>
          <div className="segments__card">
            <h3>Для владельцев</h3>
            <ul>
              <li>Аналитика доходов</li>
              <li>Аналитика LTV</li>
              <li>Прогнозы ИИ для LTV и доходов</li>
            </ul>
          </div>
          <div className="segments__card">
            <h3>Для маркетологов</h3>
            <ul>
              <li>A/B тестирование</li>
              <li>Конструктор без кода</li>
              <li>Локализации</li>
              <li>Ориентирование</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SegmentsSection;


