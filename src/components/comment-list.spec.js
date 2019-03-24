import React from 'react'
import Enzyme, { render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CommentList from './comment-list-hooks'
import articles from '../fixtures'

Enzyme.configure({ adapter: new Adapter() })

const article = articles.map((article) => article)

describe('CommentList', () => {
  it('closed comment list', () => {
    const container = render(<CommentList comments={article[0].comments} />)

    expect(container.find('.comments-list').length).toBe(0)
  })
})
