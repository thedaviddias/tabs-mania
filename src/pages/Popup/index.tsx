import React from 'react'

import { render } from 'react-dom'

import { Providers } from '../../components/Providers'
import Popup from './Popup'

import './index.css'

render(
  <Providers>
    <Popup />
  </Providers>,
  window.document.querySelector('#app-container')
)
