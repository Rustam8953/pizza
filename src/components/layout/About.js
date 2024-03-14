import SectionHeader from "@/components/layout/SectionHeaders";

export default function About() {
    return(
        <section className="text-center my-16">
            <SectionHeader subHeader={'Our story'} mainHeader={'About Us'} />
            <div className="text-gray-500 max-w-2xl mx-auto mt-4 flex flex-col gap-4">
            <p className="max-w-2xl mx-auto">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae doloremque ad quae dolorczxc
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae doloremque ad quae dolor
            </p>
            <p className="max-w-2xl mx-auto">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae doloremque ad quae dolorvxcvxc
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae doloremque ad quae dolor
            </p>
            <p className="max-w-2xl mx-auto">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae doloremque ad quae dolorvxcvxc
            </p>
            </div>
        </section>
    )
}