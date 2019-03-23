import React from 'react'
import Enzyme, { shallow, render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CommentList from './comment-list-hooks'
import articles from '../fixtures'

Enzyme.configure({ adapter: new Adapter() })

articles.forEach((article) => {
  describe('Comment list', function() {
    it('should have toggle button', function() {
      const container = shallow(<CommentList comments={article.comments} />)
      expect(container.find('.test--comment-list__btn').length).toBe(1)
    })
  })
})
