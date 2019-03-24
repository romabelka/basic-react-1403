import React from 'react'
import Enzyme, { shallow, render, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Article from './article'
import articles from '../fixtures'

Enzyme.configure({ adapter: new Adapter() })

describe('Article', () => {
  articles.forEach((article) => {
    it('should render an article with id ' + article.id, () => {
      const container = shallow(<Article article={article} />)
      expect(container.exists('.test--article__container'))
    })

    it('should open article on click with id ' + article.id, () => {
      const container = mount(<Article article={article} />)

      container
        .find('.test--article__btn')
        .at(0)
        .simulate('click')

      expect(container.exists('.test--article__body'))
    })
  })
})
