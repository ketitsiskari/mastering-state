import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import MainComponent from './components/MainComponent';
import CommunitySection from './components/BigCommunitySection';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import UserDetail from './components/UserDetail';
import NotFound from './components/NotFound';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<MainComponent />} />
            <Route path="/community" element={<CommunitySection />} />
            <Route path="/community/:id" element={<UserDetail />} />
            <Route path="/not-found" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/not-found" replace />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;


