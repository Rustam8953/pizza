import SectionHeader from "@/components/layout/SectionHeaders";
import Link from "next/link";

export default function Contact() {
    return(  
      <section className="text-center my-8">
        <SectionHeader subHeader={'Dont\'t hesitate'} mainHeader={'Contact Us'} />
        <div className="mt-8">
            <Link className="text-4xl underline text-gray-500" href={'tel:+79537845840'}>+79537845840</Link>
        </div>
        </section>
    )
}