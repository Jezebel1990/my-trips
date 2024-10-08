import "@testing-library/jest-dom";
import Map from '.';
import { render, screen} from "@testing-library/react";


describe('<Map />', () => {
  it('should render without any marker', () => {
    render(<Map />);

    expect(
      screen.getByRole('link', {
        name: /a js library for interactive maps/i
      })
    ).toBeInTheDocument();
  });

  it('should render with the marker in correct place', () => {
    const place = {
      id: '1',
      name: 'Petrópolis',
      slug: 'petropolis',
      location: {
        latitude: 0,
        longitude: 0
      }
    };

    const placeTwo = {
      id: '2',
      name: 'Seoul',
      slug: 'seoul',
      location: {
        latitude: 37.532600,
        longitude: 127.024612
      }
    };

    render(<Map places={[place, placeTwo]} />);

    expect(screen.getByTitle(/petrópolis/i)).toBeInTheDocument();
    expect(screen.getByTitle(/seoul/i)).toBeInTheDocument();
  });
});
