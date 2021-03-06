import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './paletteFooter';
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
        this.setState({
            format: val
        });
        
    };

    render() {
      const { colors, paletteName, emoji, id } = this.props.palette;
      const { level, format } = this.state;
      const ColorBoxes = colors[level].map(color => (
            <ColorBox background= {color[format]}  name={color.name} key={color.id} id={color.id} paletteId={id} moreUrl={`/palette/${id}/${color.id}`} showLink={true} />
        ));

        return (
            <div className='palette'>
                {/* Navbar */}
                <Navbar level={ level } changeLevel={ this.changeLevel } handleChange={ this.changeFormat } showingAllColors />

                <div className='palette-colors'>
                {ColorBoxes}
                </div>
                
                <PaletteFooter paletteName={paletteName} emoji={emoji} />
            </div>
        )
    }
}

export default Palette;
