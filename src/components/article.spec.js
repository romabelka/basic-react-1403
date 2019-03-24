import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Article from './article'

const defaultArticle = {
  id: '56c782f1978fdf9a0100df52',
  date: '2016-06-02T11:03:23.000Z',
  title: 'Hello my new world',
  text:
    'Culpa dolor deserunt veniam irure amet officia excepteur labore nisi labore ad labore laborum aute. Ea irure sit exercitation ex. Aliquip dolore duis ullamco labore qui. Et anim irure laborum quis ipsum. Adipisicing culpa est ea velit veniam dolor nisi. Sit cupidatat velit commodo eu.\n\nUt nulla ut irure cillum irure sint sunt cupidatat tempor laboris incididunt elit occaecat fugiat. Reprehenderit enim cupidatat consectetur pariatur ad pariatur consequat veniam do fugiat Lorem laborum do velit. Nulla aute magna magna nisi officia et. Aute adipisicing eu eiusmod tempor exercitation sint non enim laboris dolor adipisicing.\n\nEa do sint pariatur voluptate ad culpa irure. Cillum pariatur deserunt fugiat elit. Exercitation labore amet deserunt magna. Velit veniam aute officia aliqua ipsum veniam pariatur. Aliquip ullamco fugiat officia non sunt ad consequat ipsum est esse commodo reprehenderit. Ad quis consectetur est exercitation fugiat eiusmod. Laborum reprehenderit esse qui irure.',
  comments: [
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
}

Enzyme.configure({ adapter: new Adapter() })

describe('Article', () => {
  it('render succes', () => {
    const component = shallow(<Article article={defaultArticle} />)

    expect(component.find('.test--article__btn').length).toBe(1)
  })

  it('btn click', () => {
    const fn = jest.fn()
    const component = mount(<Article article={defaultArticle} onBtnClick={fn} />)

    expect(component.find('.test--article__body').length).toBe(0)
    component.find('.test--article__btn').simulate('click')

    expect(fn.mock.calls.length).toBe(1)
  })
})
