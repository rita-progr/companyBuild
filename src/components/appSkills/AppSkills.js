import "./appSkills.css";
const AppSkills = () => {
  return (
    <div className="app-skills">
      <h2>Наши возможности</h2>
      <div className="app-skills__container">
        <div className="app-skills__item1">
        <div className="number"><h3>01</h3></div>
          <h3>ОТДЕЛОЧНЫЕ РАБОТЫ</h3>
          <p>
            Отделочные работы помещений <br />
            производятся на завершающих этапах
            <br />
            реконструкции или ремонта объекта.
          </p>
        </div>
        <div className="app-skills__item2">
          <div className="number"><h3>02</h3></div>
          <h3>КРОВЕЛЬНЫЕ РАБОТЫ</h3>
          <p>
            Чтобы обеспечить крыше максимальную <br />
            долговечность и надежность, кровельные <br />
            работы выполняются с учетом конфигурации <br />
            объекта и режима его эксплуатации.
          </p>
        </div>
        <div className="app-skills__item3">
          <div className="number"><h3>03</h3></div>
          <h3>ФАСАДНЫЕ РАБОТЫ</h3>
          <p>
            Фасадные работы – это целый <br/> 
            комплекс мер, применяемый при<br/>
            строительстве здания, при его <br/>
            реконструкции или ремонте.
          </p>
        </div>
      </div>
    </div>
  );
};
export default AppSkills;
