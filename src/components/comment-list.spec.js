import React from 'react'
import Enzyme, { shallow, render, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CommentList from './comment-list-hooks'
import articles from '../fixtures'

Enzyme.configure({ adapter: new Adapter() })

describe('CommentList', () => {
  it('should render comments closed', () => {
    const { comments } = articles[0]
    const container = render(<CommentList comments={comments} />)
    expect(container.find('.test--comment-list__item').length).toBe(0)
  })

  it('should show comments on click', () => {
    const { comments } = articles[0]
    const container = mount(<CommentList comments={comments} />)
    container
      .find('.test--comments__btn')
      .at(0)
      .simulate('click')
    expect(container.find('.test--comment-list__item').length).toBe(comments.length)
  })
})
