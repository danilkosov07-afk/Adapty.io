const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">Adapty</div>
        <div className="footer__cols">
          <div className="footer__col">
            <h4>Менеджмент пейволлов</h4>
            <ul>
              <li>Конструктор пейволлов</li>
              <li>AI генератор</li>
              <li>A/B тестирование</li>
              <li>Таргетинг и локализация</li>
            </ul>
          </div>
          <div className="footer__col">
            <h4>Инфраструктура</h4>
            <ul>
              <li>SDK для подписок</li>
              <li>Синхронизация</li>
              <li>Резервные пейволлы</li>
              <li>Контроль возвратов</li>
            </ul>
          </div>
          <div className="footer__col">
            <h4>Ресурсы</h4>
            <ul>
              <li>Блог</li>
              <li>Гайды</li>
              <li>Документация</li>
              <li>Галерея пейволлов</li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <span>© 2025 Adapty Tech Inc.</span>
          <span>Условия • Конфиденциальность • SOC2</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


