import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { login } from '../services/auth';
import { User } from '../types/user';
import { LoginStyle } from '../styles/Login';

const Login: React.FC = () => {
  const [user, setUser] = useState<User>({ email: '', password: '' });
  const [error, setError] = useState<string | null>(null);
  const history = useHistory();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(user.email, user.password);
      history.push('/');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div style={LoginStyle.container}>
      <form onSubmit={handleSubmit} style={LoginStyle.form}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          style={LoginStyle.input}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          style={LoginStyle.input}
        />
        <button type="submit" style={LoginStyle.button}>Login</button>
        {error && <p style={LoginStyle.error}>{error}</p>}
      </form>
    </div>
  );
};

export default Login;