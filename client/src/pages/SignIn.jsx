import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from '../redux/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data));
        return;
      }
      dispatch(signInSuccess(data));
      switch (data.role) {
        case 'org':
          navigate('/HomePageOrg')
          break
        case 'host':
          navigate('/HomePageHost')
          break
        case 'gamer':
          navigate('/HomePageGamer')
          break
        default:
          navigate('/')
      }
    } catch (error) {
      dispatch(signInFailure(error));
    }
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
      <video autoPlay muted loop style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}>
        <source src="signinbg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#fff' }}>
        <div className="p-3 max-w-lg mx-auto">
          <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Email"
              id="email"
              className="bg-black p-3 rounded-lg"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              id="password"
              className="bg-black p-3 rounded-lg"
              onChange={handleChange}
            />
            <button
              disabled={loading}
              className="bg-slate-700 text-black p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
            >
              {loading ? 'Loading...' : 'Sign In'}
            </button>
          </form>
          <div className="flex gap-2 mt-5">
            <p>Don't Have an account?</p>
            <Link to="/sign-up">
              <span className="text-blue-500">Sign up</span>
            </Link>
          </div>
          <p className="text-red-700 mt-5">
            {/* {error ? error.message || 'Something went wrong!' : ''} */}
          </p>
        </div>
      </div>
    </div>
  );
}
