"use client"

import { useUser } from '@/context/useUser';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { FaUserCircle, FaLock } from 'react-icons/fa';
import { PulseLoader } from 'react-spinners';

const LoginPageAdmin = () => {
  const [phone, setPhone] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { setCurrentUser, currentUser } = useUser();
  const router = useRouter();

  const handleLogin = async () => {
    try {
      setIsLoading(true);

      if (!password) {
        setIsLoading(false);
        toast.error('Enter valid credentials');
        return;
      }

      const response = await axios.post('/api/login', {
        phone,
        password,
      });

      setIsLoading(false);

      // if (response.data.isNumberVerified === false) {
      //   toast.error(response.data.message);
      //   router.push(`/account/create-account/otp-verification/${response.data.userId}`);
      //   return;
      // }

      if (response.data.success === false) {
        toast.error(response.data.message);
      } else {
        const userDetails = response.data.userDetails;
        setCurrentUser(userDetails);
        localStorage.setItem('currentUser', JSON.stringify(userDetails));

        const targetRoute = userDetails.isAdmin ? '/admin-panel/orders' : '/shop';
        router.push(targetRoute);
        toast.success(response.data.message);
      }
    } catch (error) {
      setIsLoading(false);
      console.error('Error during login:', error);
      toast.error('Error unable to login');
    }
  };

  if (currentUser?.token && currentUser.isAdmin === true) {
    return router.push('/admin-panel/orders');
  }

  if (currentUser?.token && currentUser.isAdmin === false) {
    return router.push(`/shop`);
  }

  return (
    <div className='bg-td-secondary py-10 flex items-center justify-center px-5 min-h-[70vh]'>
      <div className='flex bg-white flex-col gap-5 items-center justify-center w-full md:w-[400px] md:px-10 py-10 px-5 rounded-md'>
        <div>
          <h1 className='font-bold text-[30px] text-td-secondary'>Login</h1>
        </div>
        <div className='flex flex-col gap-3 w-full'>

          <div className='flex items-center justify-center gap-2'>
            <FaUserCircle size={24} />
            <input
              type="text"
              placeholder="Phone"
              className='border px-5 py-2 rounded-md bg-slate-200 w-full'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className='flex items-center justify-center gap-2'>
            <FaLock size={24} />
            <input
              type="password"
              placeholder='Password'
              className='border px-5 py-2 rounded-md bg-slate-200 w-full'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button onClick={handleLogin} className='bg-td-secondary rounded-md h-12 px-3 py-3 text-white font-semibold'>
            {isLoading ? (
              <PulseLoader color="#ffffff" size={15} />
            ) : (
              <span className="text-[15px] w-full">Login</span>
            )}
          </button>
          <div className='flex flex-col items-center justify-center'>
            <span className='text-center text-sm'>Don&apos;t have an account?<span className='cursor-pointer text-blue-900 underline' onClick={() => router.push('/account/create-account')}>Create Account</span></span>
            <span className='text-center text-sm cursor-pointer text-blue-900 underline' onClick={() => router.push('/account/forgot-pass')}>forgot password?</span>
          </div>
        </div>
      </div>
    </div >
  );
};

export default LoginPageAdmin;