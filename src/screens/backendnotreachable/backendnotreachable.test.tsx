import React from 'react';
import { render, screen } from '@testing-library/react';
import BackendNotReachable from './backendnotreachable';

test('Backendnotreachable component soll gerendert werden und im dokument enthalten sein',()=>{
   
    render(<BackendNotReachable />)
    expect(screen.getByText(/Warten auf Backend/i)).toBeInTheDocument()
   
    
})