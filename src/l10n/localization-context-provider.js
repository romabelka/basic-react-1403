import React, { Component, createContext } from 'react'

import lang from './lang'

export const LocalizationContext = createContext('l10n')
const defaultLocale = 'ru'

export default class LocalizationContextProvider extends Component {
  constructor(props) {
    super(props)

    this.state = {
      locale: defaultLocale,
      strings: lang[defaultLocale]
    }
  }

  changeLanguage = (locale) => {
    this.setState({
      locale: locale,
      strings: lang[locale]
    })
  }

  render() {
    return (
      <LocalizationContext.Provider
        value={{
          locale: this.state.locale,
          strings: this.state.strings,
          changeLanguage: this.changeLanguage
        }}
      >
        {this.props.children}
      </LocalizationContext.Provider>
    )
  }
}
