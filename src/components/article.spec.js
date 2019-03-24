import React from 'react'
import Enzyme, { mount, render, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Article from './article'
import articles from '../fixtures'

Enzyme.configure({ adapter: new Adapter() })

describe('Article', () => {
  it('should render a article', () => {
    const container = shallow(<Article article={articles[0]} toggleOpenItem={() => {}} />)
      expect(container.find('.test--article').length).toBe(1)
  })

  it('should render a article body', () => {
    const container = mount(<Article article={articles[0]} toggleOpenItem={() => {}} />)

    container
      .find('.test--article__btn')
      .at(0)
      .simulate('click')

    expect(container.find('.test--article__body').length).toBe(1)
  })
})
