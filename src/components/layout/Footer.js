export default function Footer() {
    const cuurrentDate = new Date().getFullYear();
    return(  
        <footer className="border-t p-8 text-center mt-8 text-gray-500">
            &copy; {cuurrentDate} All right reserved
        </footer>
    )
}