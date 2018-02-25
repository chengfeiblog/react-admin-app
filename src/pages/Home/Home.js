import React, { Component } from 'react'
import footercode from 'assets/img/footercode.png'
import PropTypes from 'prop-types'

export default class Home extends Component {
    static propTypes = {
        // data: PropTypes.array,
    }
    /** 定义内部state实例 */
    state = {
        // isBlocking: false,
    }
    constructor (props) {
        super(props)
        this.state = {
            count: 0,
        }
    }
    shouldComponentUpdate (nextProps, nextState) {
        if (nextState.count === this.state.count) {
            return false
        }
        return true
    }
    _handleClick () {
        this.setState({
            count: this.state.count,
        })
    }

    render () {
        return (
            <div>
                <img alt="" src={footercode} /> this home page 是我家 <br />
                当前计数： {this.state.count}
                <br />
                <button onClick={() => this._handleClick()}>自增</button>
            </div>
        )
    }
}
