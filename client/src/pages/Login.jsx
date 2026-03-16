import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-hot-toast';
import { LogIn, Mail, Lock } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      toast.success('Logged in successfully!');
      navigate('/');
    } catch (err) {
      toast.error(err.response?.data?.error || 'Login failed');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[80vh] bg-base-200 px-4">
      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold text-center justify-center mb-6">
            <LogIn className="mr-2" /> Login to NearFix
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Email Address</span>
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                <input 
                  type="email" 
                  placeholder="email@example.com" 
                  className="input input-bordered w-full pl-10" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                />
              </div>
            </div>
            <div className="form-control mb-6">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                <input 
                  type="password" 
                  placeholder="••••••••" 
                  className="input input-bordered w-full pl-10" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required 
                />
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary text-white">Login</button>
            </div>
          </form>
          <p className="text-center mt-4">
            Don't have an account? <Link to="/signup" className="text-blue-600 hover:underline">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
