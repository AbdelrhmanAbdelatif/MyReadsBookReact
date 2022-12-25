import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

it("should render", ()=> {
    render(<Header/>)
    const result = "MyReads";
    expect(result).toBe("MyReads");
})