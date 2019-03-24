import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import CommentList from './comment-list-hooks'

const defaultComments = [
  {
    id: 'kjfviudfv089w74',
    user: 'Joyce Weber',
    text:
      'Non qui Lorem qui commodo sint in esse non aliqua pariatur mollit veniam. Elit labore ad nisi anim adipisicing tempor velit commodo adipisicing ipsum ut. Nostrud cillum aliquip adipisicing id do occaecat est eiusmod adipisicing duis. Magna dolore et non nisi in non cillum officia elit non esse proident irure aute. Proident mollit amet enim dolore eiusmod dolor qui. Eiusmod reprehenderit cillum sit deserunt nostrud enim duis excepteur. Excepteur pariatur sunt in ipsum id minim est mollit.'
  },
  {
    id: 'r23uyrghasdfb7',
    user: 'Joyce Weber',
    text:
      'Non qui Lorem qui commodo sint in esse non aliqua pariatur mollit veniam. Elit labore ad nisi anim adipisicing tempor velit commodo adipisicing ipsum ut. Nostrud cillum aliquip adipisicing id do occaecat est eiusmod adipisicing duis. Magna dolore et non nisi in non cillum officia elit non esse proident irure aute. Proident mollit amet enim dolore eiusmod dolor qui. Eiusmod reprehenderit cillum sit deserunt nostrud enim duis excepteur. Excepteur pariatur sunt in ipsum id minim est mollit.'
  }
]

Enzyme.configure({ adapter: new Adapter() })

describe('CommentList', () => {
  it('render succes', () => {
    const component = shallow(<CommentList comments={defaultComments} />)

    expect(component.find('div button').length).toBe(1)
  })

  it('Commetns shown after button click', () => {
    const component = mount(<CommentList comments={defaultComments} />)

    component.find('div button').simulate('click')

    expect(component.find('ul').length).toBe(1)
  })

  it('empty commetns render correctly', () => {
    const component = mount(<CommentList comments={[]} />)

    component.find('div button').simulate('click')

    expect(component.find('h3').length).toBe(1)
  })
})
