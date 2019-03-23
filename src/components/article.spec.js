import React from 'react'
import Enzyme, { shallow, render, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Article from './article'
import articles from '../fixtures'

Enzyme.configure({ adapter: new Adapter() })

describe('Article', function() {
  it('should have btn', function() {
    const container = shallow(
      <Article isOpen="false" article={articles[1]} onBtnClick={() => {}} />
    )
    expect(container.find('.test--article__btn').length).toBe(1)
  })

  it('btn text should have text equal to close', function() {
    const container = shallow(
      <Article isOpen="false" article={articles[1]} onBtnClick={() => {}} />
    )
    expect(container.find('.test--article__btn').text()).toBe('close')
  })

  it('should have comment-list', function() {
    const container = shallow(
      <Article isOpen="false" article={articles[1]} onBtnClick={() => {}} />
    )
    expect(container.find('.test--comment-list').length).toBe(1)
  })
})
