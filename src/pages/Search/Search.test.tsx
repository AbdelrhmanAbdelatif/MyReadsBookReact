import Search from "./Search";
import { render } from '@testing-library/react';

test("render search", () => {
    render(<Search></Search>)
    expect(true).toBe(true);
})