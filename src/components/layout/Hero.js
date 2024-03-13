import Image from "next/image";
import RightArrow from "../icons/Right";

export default function Hero() {
    return(
        <section className="hero">
            <div className="py-12">
                <h1 className="text-4xl font-semibold leading-32">
                    Everythink <br /> 
                    is better <br />
                    with a&nbsp;
                    <span className="text-primary">Pizza</span>
                </h1>
                <p className="my-4 text-grey-500 text-sm">
                    Pizza is a making piece that makes every
                    day complate, a simple yet delicious joy in life
                </p>
                <div className="flex item-center gap-4">
                    <button className="flex items-center gap-2 bg-primary text-white px-8 py-2 rounded-full">
                        Order now
                        <RightArrow />
                    </button>
                    <button className="flex gap-2 py-2 text-grey-400 font-semibold">
                        Learn more
                        <RightArrow />    
                    </button>
                </div>
            </div>
            <div className="relative">
                <Image src={'/pizza.png'} layout={'fill'} objectFit={"contain"} alt={'pizza'} />
            </div>
        </section>
    )
}