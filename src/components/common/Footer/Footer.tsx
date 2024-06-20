import './Footer.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-primary text-white w-full p-4 self-end">
            <div className="text-center text-sm">
                <p className="mt-8 md:mt-0 font-semibold">
                    &copy; Jojo Costa - {currentYear}
                </p>
            </div>
        </footer>
    );
}