import React from 'react';
import { render, screen } from '@testing-library/react';
import ErrorComponent from './errorComponent';
import { ErrorList} from '../../types/errortypes'

test('ErrorComponent renders with title and message',()=>{
    let test : ErrorList = [{id:1,message:"test",type:"error",title:"test",handleClose:(id)=>{console.log("schließe"+id)}}]
    render(<ErrorComponent errorListe={test} />)
    for(let item of screen.getAllByText("test")){
        expect(item).toBeVisible()
    }
    
})