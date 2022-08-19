import './App.css';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import Home from './routes/authenticated/home';
import AllContent from './routes/authenticated/all-content';
import Landing from './routes/not-authenticated/landing/landing';
import SignUp from './routes/not-authenticated/signup/signup';
import SignUpStep1 from './routes/not-authenticated/signup/step1'
import SignUpStep2 from './routes/not-authenticated/signup/step2';
import SignUpStep3 from './routes/not-authenticated/signup/step3';
import SignUpStep4 from './routes/not-authenticated/signup/step4';
import { useAuth } from './auth-context';
import SignIn from './routes/not-authenticated/signin/signin';
import Profiles from './routes/authenticated/profile/profiles';
import Choose from './routes/authenticated/profile/choose';
import New from './routes/authenticated/profile/new';
import Manage from './routes/authenticated/profile/manage'
import Edit from './routes/authenticated/profile/edit';
import Delete from './routes/authenticated/profile/delete';
import { useProfile } from './profile-context';

export default function App() {
  const { user, account } = useAuth()
  const { currentProfile } = useProfile()

  return (
    <div className="app">
      <Routes>
        {(user === null || account === null) ?
        <>
          <Route path='/' element={<Landing />} />
          <Route path='signup' element={<SignUp />}>
            <Route path='step1' element={<SignUpStep1 />} />
            <Route path='step2' element={<SignUpStep2 />} />
            <Route path='step3' element={user ? <SignUpStep3 /> : <Navigate to='/' replace />} />
            <Route path='step4' element={user ? <SignUpStep4 /> : <Navigate to='/' replace />} />
          </Route>
          <Route path='signin' element={!user ? <SignIn /> : <Navigate to='/' replace />} />
        </>
        :
          <Route path='/' element={<Outlet />}>
            {!currentProfile ? <Route path='' element={<Profiles />}>
              <Route path='' element={<Choose />} />
              <Route path='new-profile' element={<New />} />
              <Route path='manage-profiles' element={<Outlet />}>
                <Route path='' element={<Manage />} />
                <Route path=':id' element={<Outlet />}>
                  <Route path='' element={<Edit />} />
                  <Route path='delete' element={<Delete />} />
                </Route>
              </Route>
            </Route>
            :
            <Route path='browse' element={<Home />}>
              <Route path='all' element={<AllContent />} />
              <Route path='genres' element={<AllContent />} />
              <Route path='movies' element={<AllContent />} />
              <Route path='year' element={<AllContent />} />
              <Route path='my-list' element={<AllContent />} />
            </Route>}
          </Route>
        }

        {/* <Route path='*' element={<label>not found</label>} /> */}
      </Routes>
    </div>
  )
}