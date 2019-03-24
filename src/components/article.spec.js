import React from 'react'
import Enzyme, { shallow, render, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import articles from '../fixtures'
import DecoratedArticle, {Article} from './article'

Enzyme.configure({ adapter: new Adapter() })

describe('Article', () => {
  it('should be one btn', () => {
    const container = shallow(<Article isOpen={true} article={articles[0]} onBtnClick={() => {
    }}/>)

    expect(container.find('.test--article__btn').length).toBe(1)
  })

  it('should be one btn in closed state', () => {
    const container = shallow(<Article isOpen={false} article={articles[0]} onBtnClick={() => {
    }}/>)

    expect(container.find('.test--article__btn').length).toBe(1)
  })

  it('should be no text in closed', () => {
    const container = shallow(<Article isOpen={false} article={articles[0]} onBtnClick={() => {
    }}/>)

    expect(container.find('.test--article__body').length).toBe(0)
  })

  it('should be a comment list if closed but after click on button', () => {
    const container = mount(<Article isOpen={true} article={articles[0]} onBtnClick={() => {}}/>)
    container
      .find('.test--commentList__btn')
      .at(0)
      .simulate('click')

    expect(container.find('.test--article__commentList').length).toBe(1)
  })

  it('should be a comment list with correct number of comments if closed but after click on button', () => {
    const container = mount(<Article isOpen={true} article={articles[0]} onBtnClick={() => {}}/>)
    container
      .find('.test--commentList__btn')
      .at(0)
      .simulate('click')

    expect(container.find('.test--comment').length).toBe(articles[0].comments.length)
  })

})

