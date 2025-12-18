import { render, screen, fireEvent, within } from "@testing-library/react";
import CountryItemCard from "./CountryItem";

const mockCountry = {
  flag: "flag.png",
  name: "India",
  population: "1400000000",
  region: "Asia",
  capital: "New Delhi",
  currencies: [],
  languages: []
};


jest.mock("../Modal/Modal", () => ({
  __esModule: true,
  default: ({ countryDetail, handleClose }) => {
    return (
      <div data-testid="modal">
        <div>{countryDetail.name}</div>
        <button onClick={handleClose}>Back</button>
      </div>
    );
  }
}));



describe("CountryItemCard component", () => {
  test("renders country information", () => {
    render(<CountryItemCard countryData={mockCountry} />);

    expect(screen.getByText("India")).toBeInTheDocument();
    expect(screen.getByText(/Population:/)).toBeInTheDocument();
    expect(screen.getByText(/Region:/)).toBeInTheDocument();
    expect(screen.getByText(/Capital:/)).toBeInTheDocument();
  });

  test("opens modal on card click", () => {
    render(<CountryItemCard countryData={mockCountry} />);

    expect(screen.queryByTestId("modal")).toBeNull();

    fireEvent.click(screen.getByText("India"));
    // expect(screen.getByTestId("modal")).toBeInTheDocument();

    const modal = screen.getByTestId("modal");
    expect(modal).toBeInTheDocument();


     // Close the modal
    const closeButton = within(modal).getByText('Back');
    fireEvent.click(closeButton);


    expect(screen.queryByTestId("modal")).toBeNull();
  });
});
