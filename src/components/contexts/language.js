import React from 'react'
import { createContext } from 'react'

const dictionary = {
  ru: {
    close: 'закрыть',
    deleteArticleButton: 'удалить',
    showComments: 'показать комментарии',
    hideComments: 'скрыть комментарии'
  },
  en: {
    close: 'close',
    deleteArticleButton: 'delete me',
    showComments: 'show comments',
    hideComments: 'hide comments'
  }
}
const { Provider, Consumer } = createContext(dictionary['en'])

const LanguageProvider = ({ value, children }) => (
  <Provider value={dictionary[value]}>{children}</Provider>
)

const LanguageConsumer = ({ children }) => (
  <Consumer>{(dictionary) => children(dictionary)}</Consumer>
)

export { LanguageProvider, LanguageConsumer }
