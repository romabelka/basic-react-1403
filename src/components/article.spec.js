import React from 'react'
import Enzyme, { render, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Article from './article'
import articles from '../fixtures'

Enzyme.configure({ adapter: new Adapter() })

describe('Article', () => {
  it('should render', () => {
    const container = render(<Article article={articles[0]} />)

    expect(container.find('h3').text()).toBe(articles[0].title)
  })

  it('should open comments list on click', () => {
    const container = mount(<Article article={articles[0]} isOpen={true} />)

    container
      .find('[data-toggle-comments]')
      .at(0)
      .simulate('click')
    expect(container.find('[data-comments-list]').length).toBe(1)
  })

  it('has title', () => {
    articles.forEach((article) => {
      const container = render(<Article article={articles[0]} />)

      expect(container.find('[data-article-title]').text()).toBe(articles[0].title)
    })
  })
})
