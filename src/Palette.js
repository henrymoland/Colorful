import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import './Palette.css';


class Palette extends Component {
    constructor (props) {
        super(props)
        this.state = {
            level: 500,
            format: 'hex'
        }
    };

    changeLevel = (level) => {
        this.setState({
            level
        })
    };

    changeFormat = (val) => {
        this.setState=({
            format: val
        });
    };

    render() {
      const { colors } = this.props.palette;
      const { level, format } = this.state;
        const ColorBoxes = this.props.palette.colors[this.state.level].map(color => (
            <ColorBox background= {color[format]}  name={color.name}/>
        ))

        return (
            <div className='palette'>
                {/* Navbar */}
                <Navbar level={ level } changeLevel={ this.changeLevel } handleChange={ this.changeFormat } />

                <div className='palette-colors'>
                {ColorBoxes}

                </div>
                {/* Footer */}
            </div>
        )
    }
}

export default Palette;
