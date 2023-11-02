"use client";

import React from 'react'
import { signIn } from 'next-auth/react';

const page = () => {

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const response = await signIn('credentials', {
            email: formData.get('email'),
            password: formData.get('password'),
            redirect: false,
        });

        console.log(`Login response: ${response}`);
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type='email' name='email' placeholder='Email'/>
            <input type='password' name='password' placeholder='*********' />
            <button type='submit'>Login</button>
        </form>

    </div>
  )
}

export default page