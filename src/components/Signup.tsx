import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { signup } from '../services/auth';
import { User } from '../types/user';
import '../styles/Signup.ts';

const Signup: React.FC = () => {
  const history = useHistory();
  const [user, setUser] = useState<User>({ email: '', password: '' });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await signup(user.email, user.password);
      history.push('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="signup">
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" onChange={handleInputChange} required />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" onChange={handleInputChange} required />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;