import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-hot-toast';
import { UserPlus, User, Mail, Lock, ShieldCheck } from 'lucide-react';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'user'
  });
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(formData);
      toast.success('Account created successfully!');
      navigate('/');
    } catch (err) {
      toast.error(err.response?.data?.error || 'Registration failed');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[80vh] bg-base-200 px-4">
      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold text-center justify-center mb-6">
            <UserPlus className="mr-2" /> Join NearFix
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <div className="relative">
                <User className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="input input-bordered w-full pl-10" 
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required 
                />
              </div>
            </div>
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
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required 
                />
              </div>
            </div>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                <input 
                  type="password" 
                  placeholder="••••••••" 
                  className="input input-bordered w-full pl-10" 
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required 
                  minLength={6}
                />
              </div>
            </div>
            <div className="form-control mb-6">
              <label className="label">
                <span className="label-text">Register As</span>
              </label>
              <select 
                className="select select-bordered w-full"
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
              >
                <option value="user">Service Seeker (User)</option>
                <option value="provider">Service Provider</option>
              </select>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary text-white">Create Account</button>
            </div>
          </form>
          <p className="text-center mt-4">
            Already have an account? <Link to="/login" className="text-blue-600 hover:underline">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
