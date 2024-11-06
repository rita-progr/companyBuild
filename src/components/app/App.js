import './App.css';
import AppHeader from '../appHeader/AppHeader';
import AppContent from '../appContent/AppContent';
import AppAbout from '../appAbout/AppAbout';
import AppSkills from '../appSkills/AppSkills';
import AppFooter from '../appFooter/AppFooter';
function App() {
return (
  <div className = "app">
    <AppHeader/>
    <AppContent/>
    <AppAbout/>
    <AppSkills/>
    <AppFooter/>
  </div>
)
}

export default App;
