import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WelcomeComponet from './components/welcome-component-files/welcome-component';
import NotFoundPage from './components/not-found-page-files/not-found-page';
import LoginComponent from './components/login-component-files/login-component'
import HeaderComponent from './components/header-component/header-component';

function App() {
  return (
    <>

      <BrowserRouter>
      <HeaderComponent></HeaderComponent>
        <Routes>
          <Route path="/" element={<WelcomeComponet />}></Route>

          <Route path="login" element={<LoginComponent />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
