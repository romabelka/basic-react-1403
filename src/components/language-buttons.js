import React, { Component } from 'react'
import withLocalization from '../l10n/with-localization'

class LanguageButtons extends Component {
  render() {
    const { changeLanguage } = this.props
    return (
      <div>
        <a role="button" onClick={() => changeLanguage('ru')}>
          рус
        </a>{' '}
        <a role="button" onClick={() => changeLanguage('en')}>
          eng
        </a>
      </div>
    )
  }
}

export default withLocalization(LanguageButtons)
