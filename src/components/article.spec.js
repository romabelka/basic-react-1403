import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'
import Article from './article'
import articles from '../fixtures'

describe('Article', () => {
  describe('Open state', () => {
    it('should render article closed', () => {
      const container = shallow(<Article article={articles[0]} />)

      expect(container.find('.test--article__container').length).toBe(1)
      expect(container.find('.test--article__title').length).toBe(1)
      expect(container.find('test--article__body').length).toBe(0)

      expect(
        container.containsMatchingElement(
          <h3 className="test--article__title">{articles[0].title}</h3>
        )
      ).toBe(true)
    })

    it('should render add btn with text - open', () => {
      const container = shallow(<Article article={articles[0]} />)

      expect(container.find('.test--article__btn').length).toBe(1)
      expect(
        container
          .find('.test--article__btn')
          .at(0)
          .text()
      ).toBe('open')

      expect(
        container.containsMatchingElement(<button className="test--article__btn">open</button>)
      ).toBe(true)
    })
  })

  describe('Open state - isOpen is passed', () => {
    it('should render article opened', () => {
      const container = mount(<Article article={articles[0]} isOpen={true} />)

      expect(container.find('.test--article__body').length).toBe(1)
      expect(container.find('.test--article__text').text()).toBe(articles[0].text)
    })

    it('should render btn with text close', () => {
      const container = mount(<Article article={articles[0]} isOpen={true} />)

      expect(
        container
          .find('.test--article__btn')
          .at(0)
          .text()
      ).toBe('close')
    })

    it('should render show comments btn with text - show comments', () => {
      const container = mount(<Article article={articles[0]} isOpen={true} />)

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
})
