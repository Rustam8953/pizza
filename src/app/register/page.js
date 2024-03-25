"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Reg() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userCreated, setUserCreated] = useState(false);
    const [creatingUser, setCreatingUser] = useState(false);
    const [error, setError] = useState(false);
    const [message, setMessage] = useState('');
    async function handleFormSubmit(e) {
        e.preventDefault();
        setCreatingUser(true)
        setError(false);
        const response = await fetch('/api/register', {
            method: "POST",
            body: JSON.stringify({email, password}),
            headers: {'Content-Type': "application/json"},
        })
        console.log(response);
        if(!response.ok) {
            setError(true);
            setMessage('Error. Please try again')
        }
        else {
            setUserCreated(true);
            setMessage(`User created. Now we can login`)
        }
        setCreatingUser(false);
    }
    return(
        <section className="mt-8">
            <h1 className="text-center text-primary text-4xl mb-4">Register</h1>
            <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
                {!creatingUser && (
                    <div className="my-4 text-center py-2">
                        {message}
                    </div>
                )}
                <input type="email" placeholder="email" disabled={creatingUser} value={email} onChange={i => setEmail(i.target.value)} />
                <input type="password" placeholder="Your password" value={password} onChange={i => setPassword(i.target.value)} />
                <button type="submit" disabled={creatingUser}>Register</button>
                <div className="my-4 text-center text-gray-500">
                    or login with provider
                </div>
                <button type="button" className="flex items-center gap-4 justify-center">
                    <Image src={'/google.png'} alt={'Google login'} width={24} height={24} />
                    Login with Google
                </button>
                <div className="text-center my-4 text-gray-500">
                    Existing account?&nbsp;
                    <Link href={'/login'} className="underline">Login here &raquo;</Link>
                </div>
            </form>
        </section>
    )
}