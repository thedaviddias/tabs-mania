import React from 'react'

import { render } from 'react-dom'

import { Providers } from '../../components/Providers'
import Options from './Options'

import './index.css'

render(
  <Providers>
    <Options title={'Tabs Mania'} />
  </Providers>,
  window.document.querySelector('#app-container')
)
