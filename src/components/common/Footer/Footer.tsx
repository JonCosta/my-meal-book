import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-primary w-full p-3 self-end">
            <div className="text-center">
                <p className="font-semibold font-body text-xs lg:text-md">
                    &copy; Coded by <a href="https://joncosta.github.io/" target="_blank" rel="noreferrer"
                        className='underline hover:no-underline'>
                        Jojo Costa
                    </a> - {currentYear}
                    &nbsp;-&nbsp;
                    <Link className='underline hover:no-underline' to="/about">
                        About this page
                    </Link>

                </p>
            </div>
        </footer>
    );
}