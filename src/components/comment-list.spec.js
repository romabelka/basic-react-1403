import React from 'react'
import Enzyme, { shallow, render, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import articles from '../fixtures'
import CommentList from './comment-list-hooks'

Enzyme.configure({ adapter: new Adapter() })

describe('CommentList', () => {
  it('should render comment list closed', () => {
    const container = shallow(<CommentList comments={articles[0].comments} />)

    expect(
      container
        .find('.test--comment-list__btn')
        .at(0)
        .text()
    ).toBe('show comments')
    expect(container.find('.test--comment_body').length).toBe(0)
  })

  it('should open comments list we click on Open comments', () => {
    const container = mount(<CommentList comments={articles[0].comments} />)

    expect(
      container
        .find('.test--comment-list__btn')
        .at(0)
        .text()
    ).toBe('show comments')
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
    expect(container.find('.test--comment_body').length).toBe(articles[0].comments.length)
  })
})
