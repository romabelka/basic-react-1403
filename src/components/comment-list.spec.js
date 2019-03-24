import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CommentList from '../components/comment-list-hooks'
import articles from '../fixtures'

Enzyme.configure({ adapter: new Adapter() })

describe('CommentList', () => {
  it('should render a list', () => {
    const container = mount(<CommentList comments={articles[0].comments} isOpen />)
    container
      .find('.test--comments__show-button')
      .at(0)
      .simulate('click')

    expect(container.find('.test--comment__item').length).toBe(articles[0].comments.length)
  })
})
