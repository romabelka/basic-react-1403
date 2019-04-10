import React from 'react'
import LocalizedComponent from '../localization/localized-component-decorator'

function Loader({ dictionary }) {
  return <h3>{dictionary['loading']}...</h3>
}

Loader.propTypes = {}

export default LocalizedComponent(Loader)
