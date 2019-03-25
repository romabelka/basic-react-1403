import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'
import articles from '../fixtures'
import CommentList from './comment-list-hooks'

describe('CommentList', () => {
  describe('Closed state', () => {
    it('should render comment list closed', () => {
      const container = shallow(<CommentList comments={articles[0].comments} />)
      expect(container.find('.test--comment_body').length).toBe(0)
    })

    it('should render btn with show comments text', () => {
      const container = shallow(<CommentList comments={articles[0].comments} />)
      expect(
        container
          .find('.test--comment-list__btn')
          .at(0)
          .text()
      ).toBe('show comments')
    })
  })

  describe('Open state', () => {
    it('should open comments list we click on Open comments btn', () => {
      const container = mount(<CommentList comments={articles[0].comments} />)
      container
        .find('.test--comment-list__btn')
        .at(0)
        .simulate('click')
      expect(container.find('.test--comment_body').length).toBe(articles[0].comments.length)
    })

    it('should change btn text to - hide comments', () => {
      const container = mount(<CommentList comments={articles[0].comments} />)
      container
        .find('.test--comment-list__btn')
        .at(0)
        .simulate('click')
      expect(
        container
          .find('.test--comment-list__btn')
          .at(0)
          .text()
      ).toBe('hide comments')
    })
  })
})
