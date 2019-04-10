import React from 'react'
import { TranslationConsumer } from '../contexts/translation-context'

function Loader() {
  return (
    <h3>
      <TranslationConsumer>{(lang) => lang.loading}</TranslationConsumer>
    </h3>
  )
}

Loader.propTypes = {}

export default Loader
