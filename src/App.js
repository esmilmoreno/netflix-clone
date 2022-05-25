import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './routes/authenticated/home';
import AllContent from './routes/authenticated/all-content';
import Landing from './routes/landing/landing';
import SignUp from './routes/landing/signup/signup';
import SignUpStep1 from './routes/landing/signup/step1'
import SignUpStep2 from './routes/landing/signup/step2';
import SignUpStep3 from './routes/landing/signup/step3';
import SignUpStep4 from './routes/landing/signup/step4';
import { useAuth } from './auth-context';
import SignIn from './routes/landing/signin';

function App() {
  const { user, account } = useAuth()

  return (
    <div className="app">
      <Routes>
        {(user === null || account === null) ? <>
          <Route path='' element={<Landing />} />
          <Route path='signup' element={<SignUp />}>
            <Route path='step1' element={<SignUpStep1 />} />
            <Route path='step2' element={<SignUpStep2 />} />
            <Route path='step3' element={user ? <SignUpStep3 /> : <Navigate to='/' replace />} />
            <Route path='step4' element={user ? <SignUpStep4 /> : <Navigate to='/' replace />} />
          </Route>
          <Route path='signin' element={!user ? <SignIn /> : <Navigate to='/' replace />} />
        </> :
        <Route path='browse' element={<Home />}>
          <Route path='' element={<Navigate to='all' replace />} />
          <Route path='all' element={<AllContent />} />
          <Route path='genres' element={<AllContent />} />
          <Route path='movies' element={<AllContent />} />
          <Route path='year' element={<AllContent />} />
          <Route path='my-list' element={<AllContent />} />
        </Route>}

        <Route path='*' element={<Navigate to={(user === null || account === null) ? '/' : '/browse/all'} replace />} />
      </Routes>
    </div>
  );
}

export default App;
