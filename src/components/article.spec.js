import React from 'react'
import Enzyme, { shallow, render, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Article from './article'
import articles from '../fixtures'

Enzyme.configure({ adapter: new Adapter() })

describe('Article', () => {
  it('should render opened article', () => {
    const container = render(<Article isOpen={true} onBtnClick={() => {}} article={articles[0]} />)
    expect(container.find('.test--article__body').length).toBe(1)
  })

  it('should render closed article', () => {
    const container = render(<Article isOpen={false} onBtnClick={() => {}} article={articles[0]} />)
    expect(container.find('.test--article__body').length).toBe(0)
  })
})
