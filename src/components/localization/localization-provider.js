import React, { Component } from 'react'
import ruDictionary from './ru'
import enDictionary from './en'
import { createContext } from 'react'

const LOCALES = {
  RU: 'ru',
  EN: 'en'
}

const LOCALES_MAP = {
  [LOCALES.RU]: ruDictionary,
  [LOCALES.EN]: enDictionary
}

export const LocalizationContext = createContext('ru')

export default class LocalizationProvider extends Component {
  state = {
    locale: LOCALES.EN,
    dictionary: LOCALES_MAP[LOCALES.EN]
  }

  changeLanguage = (locale) => {
    this.setState({
      locale: locale,
      dictionary: LOCALES_MAP[locale]
    })
  }

  render() {
    return (
      <LocalizationContext.Provider
        value={{
          locale: this.state.locale,
          dictionary: this.state.dictionary,
          onChangeLanguage: this.changeLanguage
        }}
      >
        {this.props.children}
      </LocalizationContext.Provider>
    )
  }
}
