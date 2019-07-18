import React from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './component/T';
import NavBar from './component/NAVBar';
import MyEntryForm from './component/MyEntryForm';
import RegisterUser from './component/RegisterUser';
import ReactSelectAutocomplete from './component/ReactSelectAutocomplete';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        <NavBar />
        {/* <Test /> */}
      {/* </header> */}
      {/* <MyEntryForm /> */}

      <RegisterUser />

      {/* <ReactSelectAutocomplete /> */}
    </div>
  );
}

export default App;
