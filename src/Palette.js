import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './Palette.css';

class Palette extends Component {

    render() {
        const ColorBoxes = this.props.palette.colors[600].map(color => (
            <ColorBox background= {color.hex}  name={color.name}/>
        ))

        return (
            <div className='palette'>
            {/* Navbar */}

                <div className='palette-colors'>
                {ColorBoxes}

                </div>
                {/* Footer */}
            </div>
        )
    }
}

export default Palette;