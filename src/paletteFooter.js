import React from 'react';

const paletteFooter = (props) => {
    const {paletteName, emoji} = props;
    return (
        <footer className='palette-footer'>
            {paletteName}
            <span className='emoji'>{emoji}</span>
        </footer>
    )
}

export default paletteFooter;
