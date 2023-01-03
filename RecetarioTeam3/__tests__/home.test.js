import { render } from '@testing-library/react-native';
import Home from '../screens/home';
import React from 'react';

test('examples of some things', async () => {
  beforeEach(()=>{
    component = render(<Home/>)
  })
  it("renderizar correctamente",()=>{
  console.log(component)
  })
})

