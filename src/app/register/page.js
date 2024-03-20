"use client"
import Image from "next/image";
import { useState } from "react";

export default function Reg() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    function handleFormSubmit(e) {
        e.preventDefault();
        fetch('/api/register', {
            method: "POST",
            body: JSON.stringify({email, password}),
            headers: {'Content-Type': "application/json"},
        })
    }
    return(
        <section className="mt-8">
            <h1 className="text-center text-primary text-4xl mb-4">Register</h1>
            <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
                <input type="email" placeholder="email" value={email} onChange={i => setEmail(i.target.value)} />
                <input type="password" placeholder="Your password" value={password} onChange={i => setPassword(i.target.value)} />
                <button type="submit">Register</button>
                <div className="my-4 text-center text-gray-500">
                    or login with provider
                </div>
                <button type="button" className="flex items-center gap-4 justify-center">
                    <Image src={'/google.png'} alt={'Google login'} width={24} height={24} />
                    Login with Google
                </button>
            </form>
        </section>
    )
}