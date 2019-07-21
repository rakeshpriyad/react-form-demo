import React from 'react';
//import logo from './logo.svg';
import './App.css';
import NavBar from './component/NAVBar';
import Product from './component/Products';
/* import MyEntryForm from './component/MyEntryForm';
import RegisterUser from './component/RegisterUser';
import ReactSelectAutocomplete from './component/ReactSelectAutocomplete';
 */
function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        <NavBar />
        {/* <Test /> */}
      {/* </header> */}
      {/* <MyEntryForm /> */}

      {/* <RegisterUser /> */}

      {/* <ReactSelectAutocomplete /> */}
      <Product />
    </div>
  );
}

export default App;
