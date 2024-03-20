import Link from "next/link";

export default function Header() {
    return (
        <header className="flex items-center justify-between gap-10">
            <Link className="text-primary font-semibold text-2xl" href="/">PIZZA</Link>
            <nav className="flex justify-between items-center w-full gap-8 text-gray-500 font-medium">
                <div className="flex gap-8">
                    <Link href={''}>Home</Link>
                    <Link href={''}>Menu</Link>
                    <Link href={''}>Contact</Link>
                    <Link href={''}>About</Link>
                </div>
                <div className="flex gap-4 ml-4">
                    <Link href={'/login'} className="py-2 text-dark">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                    </Link>
                    <Link href={'/register'} className="bg-primary rounded-full text-white px-6 py-2">Sign up</Link>
                </div>
            </nav>
        </header>
    )
}