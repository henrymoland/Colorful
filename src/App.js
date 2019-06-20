import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Palette from './Palette';
import PaletteList from './PaletteList';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';


class App extends Component {
  findPalette(id) {
    return seedColors.find(function(palette) {
      return palette.id ===id;
    });
  }
  render() {
    
    return (
      <Switch>
        <Route exact path='/' render={(routeProps) => <PaletteList palettes={seedColors} {...routeProps}/>} />
        <Route exact path='/palette/:id' 
        render={(routeProps) => (
          <Palette
          palette={generatePalette(
          this.findPalette(routeProps.match.params.id)
            )}
          />
          )}
        />
        <Route exact path="/palette/:paletteID/:colorId" render={() => <h1>Single Color Page</h1>} />
      </Switch>
    /*
    <Palette palette={generatePalette(seedColors[4])} />
    */
      
    );
  }
}
export default App;
