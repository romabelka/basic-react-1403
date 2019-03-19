import { Component } from 'react'

class ToggleOpenComponent extends Component {
  state = {
    openItemId: null
  }

  toggleOpenItem = (openItemId) => () => this.setState({ openItemId })
}

export default ToggleOpenComponent
