export default function SectionHeader({subHeader, mainHeader}) {
    return(
        <div className="text-center mb-4">
            <h3 className="text-grey uppercase font-semibold">{subHeader}</h3>
            <h2 className="text-primary font-bold text-4xl italic">{mainHeader}</h2>
        </div>
    )
}