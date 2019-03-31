import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Select from 'react-select'
import { selectValues } from '../../ac'

class SelectFilter extends Component {
  static propTypes = {
    articles: PropTypes.array,
    selectValues: PropTypes.func
  }

  handleChange = (values) => {
    const commonValues = values.reduce((acc, curr) => {
      acc.push(curr.value)
      return acc
    }, [])

    this.props.selectValues(commonValues)
  }

  render() {
    const options = this.props.articles.map((article) => ({
      label: article.title,
      value: article.id
    }))

    return <Select options={options} onChange={this.handleChange} isMulti />
  }
}

const mapStateToProps = (state) => ({
  articles: state.articles
})

const mapDispatchToProps = {
  selectValues: selectValues
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectFilter)
