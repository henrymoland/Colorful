import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Palette from './Palette';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      palettes: seedColors
    }
  }

  savePalette = (newPalette) => {
    this.setState({
      palettes: [...this.state.palettes, newPalette]
    })
  }

  findPalette = (id) => {
    return this.state.palettes.find(function(palette) {
      return palette.id ===id;
    });
  }

  render() {
    return (
      <Switch>
        <Route exact path="/palette/new" render={ (routeProps) => <NewPaletteForm savePalette={this.savePalette} {...routeProps} /> } />
        <Route exact path='/' render={(routeProps) => <PaletteList palettes={this.state.palettes} {...routeProps}/>} />

        <Route exact path='/palette/:id' 
        render={(routeProps) => (
          <Palette
          palette={generatePalette(
          this.findPalette(routeProps.match.params.id)
            )}
          />
          )}
        />

        <Route exact path="/palette/:paletteId/:colorId" render={(routeProps) => (
          <SingleColorPalette
          colorId={routeProps.match.params.colorId}
          palette={generatePalette(
          this.findPalette(routeProps.match.params.paletteId)
            )}
          />
          )}
          />
      </Switch>
    /*
    <Palette palette={generatePalette(seedColors[4])} />
    */
      
    );
  }
}
export default App;
