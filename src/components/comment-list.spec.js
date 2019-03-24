import React from 'react'
import Enzyme, { shallow, render, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CommentList from './comment-list-hooks'
import articles from '../fixtures'

Enzyme.configure({ adapter: new Adapter() })

describe('CommentList', () => {
  articles.forEach((article) => {
    it('should render a comment list for article with id ' + article.id, () => {
      const container = shallow(<CommentList comments={article.comments} />)
      expect(container.exists('.test--comment-list__body'))
    })

    it('should render comments closed', () => {
      const container = shallow(<CommentList comments={article.comments} />)
      expect(container.find('.test--comment-list__item').length).toBe(0)
    })

    it('should open all comments on click', () => {
      const container = mount(<CommentList comments={article.comments} />)
      container
        .find('.test--toggle-comments__btn')
        .at(0)
        .simulate('click')
      const commentsCount = article.comments ? article.comments.length : 0
      expect(container.find('.test--comment-list__item').length).toBe(commentsCount)
    })

    it('should show add comment form for article with id ' + article.id, () => {
      const container = mount(<CommentList comments={article.comments} />)
      container
        .find('.test--toggle-comments__btn')
        .at(0)
        .simulate('click')
      expect(container.exists('.test--add-comment__form'))
    })
  })
})
