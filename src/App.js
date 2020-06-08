import React from 'react'

import I18n, { Translator } from 'components/I18n'

const App = () => {
  return (
    <div className="app">
      <p>
        <Translator path="home.message" />
      </p>
      <I18n />
    </div>
  )
}

export default App
