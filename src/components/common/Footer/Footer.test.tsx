import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Footer from "./Footer";

describe('Footer', () => {
    it('should render links correctly', async () => {
        render(
            <MemoryRouter>
                <Footer />
            </MemoryRouter>
        );

        const portfolioLink = screen.getByText(/Jojo Costa/i);
        const aboutLink = screen.getByText(/about this page/i);

        expect(portfolioLink).toBeInTheDocument();
        expect(aboutLink).toBeInTheDocument();
    });
});