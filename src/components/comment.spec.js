import React from 'react'
import Enzyme, { shallow, render, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import articles from '../fixtures'
import Comment from './comment'

Enzyme.configure({ adapter: new Adapter() })

describe('Comment', () => {
  it('should be one comment', () => {
    const container = shallow(<Comment comment = {articles[0].comments[0]} />)

    expect(container.find('.test--comment').length).toBe(1)
  })

})
