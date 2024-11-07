import './App.css';

import AppHeader from '../appHeader/AppHeader';
import AppContent from '../appContent/AppContent';
import AppAbout from '../appAbout/AppAbout';
import AppSkills from '../appSkills/AppSkills';
import AppFooter from '../appFooter/AppFooter';
import AppInfo from '../appInfo/AppInfo';
function App() {

return (
  <div className = "app">
    <AppHeader/>
    <AppContent/>
    <div  id = "about">
    <AppAbout/>
    </div>
    <AppSkills/>
    <AppInfo/>
    <div id = "contacts">
    <AppFooter/>
    </div>
  </div>
)
}

export default App;
