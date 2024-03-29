import Image from "next/image";
import MenuItem from "../menu/MenuItem";
import SectionHeader from "./SectionHeaders";

export default function HomeMenu() {
    return(
        <div className="">
            <div className="absolute left-0 right-0 w-full">
                <div className="absolute left-0 -top-[70px] -z-10">
                    <Image src={'/sallad1.png'} width={107} height={195} objectFit={"contain"} alt={'sallad'} />
                </div>
                <div className="absolute -top-[100px] right-0 -z-10">
                    <Image src={'/sallad2.png'} width={107} height={195} objectFit={"contain"} alt={'sallad'} />
                </div>
            </div>
            <SectionHeader subHeader={'Check Out'} mainHeader={'Menu'} />
            <div className="grid grid-cols-3 gap-4">
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
            </div>
        </div>
    )
}