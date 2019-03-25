import React from 'react'
import Enzyme, { shallow, render, mount } from 'enzyme'
import CommentList from './comment-list-hooks'
import Adapter from 'enzyme-adapter-react-16'
import articles from '../fixtures'

Enzyme.configure({ adapter: new Adapter() })

describe('CommentList', () => {
  it('should render the list', () => {
    const [firstArticle] = articles
    const container = shallow(<CommentList comments={firstArticle.comments} defaultOpen={true} />)
    expect(container.find('.comment-list-item').length).toBe(firstArticle.comments.length)
  })
})
