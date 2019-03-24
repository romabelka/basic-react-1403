import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Article from './Article'
import articles from '../fixtures'

Enzyme.configure({ adapter: new Adapter() })

const article = articles.map((article) => article)

describe('CommentList', () => {
  it('should render a list', () => {
    const container = shallow(<Article article={article[0]} />)

    expect(container.find('h3'))
  })
})
