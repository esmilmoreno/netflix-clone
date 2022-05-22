import './App.css';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Home from './routes/authenticated/home';
import AllContent from './routes/authenticated/all-content';
import Landing from './routes/landing/landing';
import SignUp from './routes/landing/signup/signup';
import SignUpStep1 from './routes/landing/signup/step1'
import SignUpStep2 from './routes/landing/signup/step2';
import SignUpStep3 from './routes/landing/signup/step3';
import SignUpStep4 from './routes/landing/signup/step4';

function App() {
  const { state } = useLocation()

  return (
    <div className="app">
      <Routes>
        <Route path='' element={<Landing />} />
        <Route path='signup' element={<SignUp />}>
          <Route path='' element={<Navigate to='step1' replace state={state} />} />
          <Route path='step1' element={<SignUpStep1 />} />
          <Route path='step2' element={<SignUpStep2 />} />
          <Route path='step3' element={<SignUpStep3 />} />
          <Route path='step4' element={<SignUpStep4 />} />
        </Route>
        <Route path='browse' element={<Home />}>
          <Route path='all' element={<AllContent />} />
          <Route path='genres' element={<AllContent />} />
          <Route path='movies' element={<AllContent />} />
          <Route path='year' element={<AllContent />} />
          <Route path='my-list' element={<AllContent />} />
        </Route>

        <Route path='*' element={<Navigate to='/browse/all' replace />} />
      </Routes>
    </div>
  );
}

export default App;
