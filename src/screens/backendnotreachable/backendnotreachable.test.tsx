import React from 'react';
import { render, screen } from '@testing-library/react';
import BackendNotReachable from './backendnotreachable';

test('ErrorComponent renders with title and message',()=>{
   
    render(<BackendNotReachable />)
    expect(screen.getByText(/Warten auf Backend/i)).toBeInTheDocument()
   
    
})