import Image from "next/image";

export default function Reg() {
    return(
        <section className="mt-8">
            <h1 className="text-center text-primary text-4xl mb-4">Register</h1>
            <form className="block max-w-xs mx-auto">
                <input type="email" placeholder="Введите логин" />
                <input type="password" placeholder="Введите пароль" />
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