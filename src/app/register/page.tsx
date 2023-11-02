"use client";

import React from 'react'

const page = () => {

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const response = await fetch('/api/auth/register', {
            method: 'POST',
            body: JSON.stringify({
                email: formData.get('email'),
                password: formData.get('password'),
            }),
        });
        console.log(response);
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type='email' name='email' placeholder='Email'/>
            <input type='password' name='password' placeholder='*********' />
            <button type='submit'>Register</button>
        </form>

    </div>
  )
}

export default page