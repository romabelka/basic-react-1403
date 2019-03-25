import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Article from './article'
import articles from '../fixtures'

Enzyme.configure({ adapter: new Adapter() })

describe('ArticleList', () => {
  it('should render an article', () => {
    const [firtArticle] = articles
    const container = shallow(<Article isOpen={true} onBtnClick={() => {}} article={firtArticle} />)

    container
      .find('.test--article__btn')
      .at(0)
      .simulate('click')

    expect(container.find('.test--article__body').text()).toBe(articles.text)
  })
})
