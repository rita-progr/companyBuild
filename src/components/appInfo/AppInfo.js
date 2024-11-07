import './appInfo.css';
const AppInfo = () => {
    return (
        <div className="app-info">
            <h3>Реквизиты</h3>
            <p>ООО "КАЙЛАСБИЛД"</p>
            <div className="app-info-container">
            <div className="app-info-container1">
            <p>Юр. Адрес: 188022 Ленинградская область, <br/> Тосненский р, п.Форносово, <br/> ул. Заводская, д. 3А</p>
            <p>ИНН: 4705120696</p>
            <p>КПП: 470501001</p>
            <p>ОГРН: 1244700030222</p>
            </div>
            <div className="app-info-container2">
            <p>Расчётный счёт:  40702810255000139537</p>
            <p>Банк: СЕВЕРО-ЗАПАДНЫЙ БАНК ПАО СБЕРБАНК</p>
            <p>БИК банка:  044030653</p>
            <p>Корр. счёт банка: 30101810500000000653</p>
            <p>Генеральный директор: Рахимов Кахрамон Раупович</p>
            </div>
            </div>
        </div>
    )
}
export default AppInfo;