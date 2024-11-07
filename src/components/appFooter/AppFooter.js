import "./appFooter.css";
const AppFooter = () => {
  return (
    <div className="app-footer">
      <div className="app-footer__container">
        <div className="app-footer__contacts">
          <h3>Контакты</h3>
          <ul>
            <li>
              <a href="mailto:example@example.com">example@example.com</a>
            </li>
            <li>
              <a href="tel:+1234567890">+1234567890</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default AppFooter;
