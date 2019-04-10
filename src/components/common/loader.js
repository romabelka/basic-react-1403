import React from 'react'
import withLocalization from '../../l10n/with-localization'
function Loader({ strings }) {
  return <h3>{strings['loading']}...</h3>
}

Loader.propTypes = {}

export default withLocalization(Loader)
