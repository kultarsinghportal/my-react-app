import './App.css';
import MenuComponent from './MenuComponent';
import HeaderComponent from './HeaderComponent';
import React from 'react';
import FooterComponent from './FooterComponent';
import Grid from './ResponsiveGridComponent';
import Header from './Header';
import NavigationMenu from './NavigationMenu';
import DynamicGrid from './DynamicGrid';
function App() {

  
  return (
    <div className="App">
      {/*<HeaderComponent /> 
      <Header/>*/}
      <HeaderComponent /> 
      
      <main>
        {/* Your main content goes here */}
        <br></br>
          <DynamicGrid />
      </main>
      <FooterComponent />
    </div>
  );
}

export default App;