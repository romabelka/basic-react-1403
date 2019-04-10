export const INCREMENT = 'INCREMENT'

export const DELETE_ARTICLE = 'DELETE_ARTICLE'

export const CHANGE_SELECTION = 'CHANGE_SELECTION'
export const CHANGE_DATE_RANGE = 'CHANGE_DATE_RANGE'

export const ADD_COMMENT = 'ADD_COMMENT'
export const LOAD_COMMENTS_FOR_PAGE = 'LOAD_COMMENTS_FOR_PAGE'

export const LOAD_ALL_ARTICLES = 'LOAD_ALL_ARTICLES'
export const LOAD_ARTICLE = 'LOAD_ARTICLE'
export const LOAD_ARTICLE_COMMENTS = 'LOAD_ARTICLE_COMMENTS'

export const START = '_START'
export const SUCCESS = '_SUCCESS'
export const FAIL = '_FAIL'

export const translations = {
  en: {
    mainMenu: 'Main Menu',
    loading: 'Loading...',
    comments: {
      hide: 'hide comments',
      show: 'show comments'
    },
    articles: {
      delete: 'Delete me'
    }
  },
  ru: {
    mainMenu: 'Главное меню',
    loading: 'Загрузка...',
    comments: {
      hide: 'Скрыть комментарии',
      show: 'Показать комментарии'
    },
    articles: {
      delete: 'Удалить статью'
    }
  }
}
