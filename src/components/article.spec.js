import React from 'react'
import Enzyme, { shallow, render, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Article from './article'
import articles from '../fixtures'

Enzyme.configure({ adapter: new Adapter() })

describe('Article', () => {
  it('should render article closed', () => {
    const container = shallow(<Article article={articles[0]} />)

    expect(container.find('.test--article__container').length).toBe(1)
    expect(container.find('.test--article__title').length).toBe(1)
    expect(container.find('.test--article__btn').length).toBe(1)
    expect(container.find('test--article__body').length).toBe(0)
    expect(
      container
        .find('.test--article__btn')
        .at(0)
        .text()
    ).toBe('open')

    expect(
      container.containsMatchingElement(
        <h3 className="test--article__title">{articles[0].title}</h3>
      )
    ).toBe(true)
    expect(
      container.containsMatchingElement(<button className="test--article__btn">open</button>)
    ).toBe(true)
  })

  it('should render article opened when we pass isOpen', () => {
    const container = mount(<Article article={articles[0]} isOpen={true} />)

    expect(
      container
        .find('.test--article__btn')
        .at(0)
        .text()
    ).toBe('close')
    expect(container.find('.test--article__body').length).toBe(1)
    expect(container.find('.test--article__text').text()).toBe(articles[0].text)
    expect(container.find('.test--comment-list__btn').length).toBe(1)
    expect(
      container
        .find('.test--comment-list__btn')
        .at(0)
        .text()
    ).toBe('show comments')
  })

  it('should open comments when we click on Open comments', () => {
    const container = mount(<Article article={articles[0]} isOpen={true} />)

    container
      .find('.test--comment-list__btn')
      .at(0)
      .simulate('click')
    expect(
      container
        .find('.test--comment-list__btn')
        .at(0)
        .text()
    ).toBe('hide comments')
    expect(container.find('.test--comment_body').length).toBe(articles[0].comments.length)
  })
})
