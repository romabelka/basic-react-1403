import React from 'react'
import Enzyme, { render, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Article from '../components/article'
import articles from '../fixtures'

Enzyme.configure({ adapter: new Adapter() })

describe('Article', () => {
  it('should render opened article', () => {
    const container = render(<Article article={articles[0]} isOpen onBtnClick={() => {}} />)

    expect(container.find('.test--article__body').length).toBe(1)
    expect(container.find('.test--article__btn').length).toBe(1)
    expect(container.find('.test--comments__show-button').length).toBe(1)
  })

  it('should render closed article', () => {
    const container = render(<Article article={articles[0]} isOpen={false} onBtnClick={() => {}} />)

    expect(container.find('.test--article__body').length).toBe(0)
    expect(container.find('.test--article__btn').length).toBe(1)
    expect(container.find('.test--comments__show-button').length).toBe(0)
  })

  it('should open comments', () => {
    const container = mount(<Article article={articles[0]} isOpen onBtnClick={() => {}} />)
    container
      .find('.test--comments__show-button')
      .at(0)
      .simulate('click')

    expect(container.find('.test--comments__body').length).toBe(1)
  })

  it('should close comments', () => {
    const container = mount(<Article article={articles[0]} isOpen onBtnClick={() => {}} />)
    container
      .find('.test--comments__show-button')
      .at(0)
      .simulate('click')

    expect(container.find('.test--comments__body').length).toBe(1)
  })
})
