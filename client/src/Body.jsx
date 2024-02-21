import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { EmailContext } from './App';
import { useContext } from 'react';
import SignUp from './Pages/SignUp';
import SignIn from './Pages/SignIn';
import Home from './Pages/Home';

const Body = () => {
  const { email } = useContext(EmailContext);

  return (
    <BrowserRouter>
      <Routes>
      
        <Route path="/" element={email ? <Navigate to="/Home" /> : <SignUp />} />
        <Route path="/login" element={<SignIn />} />
        {email && <Route path="/Home" element={<Home />} />}
      </Routes>
    </BrowserRouter>
  );
};

export default Body;
