import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import Home from './pages/Home/Home';
import Features from './pages/Features/Features';
import About from './pages/About/About';
import Quizzes from './pages/Quizes/Quizes';
import Profile from './pages/Profile/Profile';
import Class from './components/Class/Class';
import Chatbot from './components/ChatBot/Chatbot';
import Ebook from './components/Ebook/Ebook';
import Loader from './components/Loader/Loader';
import JoinSubject from './components/JoinSubject/JoinSubject'; 
import Create from './components/Create/Create';
import Sidebar from './components/Sidebar/Sidebar';
import Info from './components/Info/Info';
import Chat from './components/Chat/Chat';
import Navbar2 from './components/Navbar2/Navbar2';
import Stream from './components/stream/Stream';
import JoinMeeting from './components/stream/JoinMeeting';


const App = () => {
  const [showLogin, setShowLogin] = useState(false);
 
  return (
    <Router>
      <>
        <Navbar setShowLogin={setShowLogin} />
        {showLogin && <Login setShowLogin={setShowLogin} />}
    
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/about" element={<About />} />
          <Route path="/quizzes" element={<Quizzes />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/subject/:id" element={<Class />} />
          <Route path="/ebook/:id" element={<Ebook />} />  
          <Route path="/join/:id" element={<JoinSubject />} /> 
          <Route path="/meeting/:callId" element={<JoinMeeting />} />
          <Route path='/stream' element={<Stream />} />
          <Route path="navbar2" element={<Navbar2/>} />  
          <Route path="/info" element={<Info/>} />  
          <Route path="/chat/:subjectId" element={<Chat/>} />  
          
        </Routes>
        <Chatbot />
      </> 
    </Router>
  );
};

export default App;
