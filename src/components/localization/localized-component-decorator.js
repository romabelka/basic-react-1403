import React from 'react'
import { LocalizationContext } from './localization-provider'

export default (Component) => {
  return function LocalizedComponent(props) {
    return (
      <LocalizationContext.Consumer>
        {(value) => (
          <Component
            {...props}
            onChangeLanguage={value.onChangeLanguage}
            dictionary={value.dictionary}
          />
        )}
      </LocalizationContext.Consumer>
    )
  }
}
