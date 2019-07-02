import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './paletteFooter';


class SingleColorPalette extends Component {
    constructor(props){
        super(props);
        this._shades = this.gatherShades(this.props.palette, this.props.colorId);
        console.log(this._shades)
        this.state = {
            format: "hex"
        };
        this.changeFormat = this.changeFormat.bind(this);
    }
    gatherShades(palette, colorToFilterBy){
        let shades = [];
        let allColors = palette.colors;

        for (let key in allColors) {
            shades = shades.concat(allColors[key].filter(color => color.id === colorToFilterBy )
            );
        }

        return shades.slice(1);
    }
    changeFormat = (val) => {
        this.setState({
            format: val
        });
    };
    render() {
        const { paletteName, emoji } = this.props.palette;
        const { format } = this.state;
        const colorBoxes = this._shades.map(color => (
            <ColorBox key={color.id} name={color.name} background={color[format]} showLink={false}/>
        ));
        return (
            <div className="palette">
                <Navbar handleChange={this.changeFormat} showingAllColors={false} />
                <div className='palette-colors'>{colorBoxes}</div>
                <PaletteFooter paletteName ={paletteName} emoji={emoji} />
            </div>
        )
    }
}

export default SingleColorPalette;