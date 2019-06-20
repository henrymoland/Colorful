import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import './ColorBox.css';

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state ={
      copied: false // set the copied state to false
    }
  }

  changeCopyState = () => {
    this.setState({ copied: true}, () => {
      // change copied state back to false after 1500 miliseconds
      setTimeout(() => this.setState({ copied: false }), 1500)
    });
  }

    render() {
        const { name, background } = this.props;
        const { copied } = this.state;
        return (
            <CopyToClipboard text={ background } onCopy={this.changeCopyState}>
                <div style={{ background }} className='ColorBox'>

                  <div style={{ background }} className={`copy-overlay ${copied && 'show'}`} />
                    <div className={`copy-message ${copied && 'show'}`}>
                      <h1>Copied!</h1>
                      <p>{background}</p>
                    </div>
                
                  <div className='copy-container'>
                      <div className='box-content'>
                            <span>{name}</span>f
                      </div>
                      <button className='copy-button'>Copy</button>
                  </div>
                  <Link to="/" onClick={e => e.stopPropagation()}>
                    <span className='see-more'>More</span>
                  </Link>

                </div>
            </CopyToClipboard>
        )
    }
}

export default ColorBox;
