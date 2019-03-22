import React from 'react'
import Enzyme, { shallow, render, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Article from './article'
import articles from '../fixtures'

Enzyme.configure({ adapter: new Adapter() })

describe('Article', () => {
  /*it('should render article body', () => {
        const container = render(<Article isOpen={true} onBtnClick ={} article={articles[0]} />)
        expect(container.find('.test--article__body').length).toBe(1)
    })*/
  /*it('should show comments on click', () => {
        const {comments} = articles[0];
        const container = mount(<CommentList comments={comments} />)
        container
            .find('.test--comments__btn')
            .at(0)
            .simulate('click')
        expect(container.find('.test--comment-list__item').length).toBe(comments.length)
    })*/
})
