import React from 'react'
import { LocalizationContext } from './localization-context-provider'
const withLocalization = (Component) => {
  return function LocalizedComponent(props) {
    return (
      <LocalizationContext.Consumer>
        {(context) => {
          return (
            <Component
              {...props}
              locale={context.locale}
              strings={context.strings}
              changeLanguage={context.changeLanguage}
            />
          )
        }}
      </LocalizationContext.Consumer>
    )
  }
}
export default withLocalization
