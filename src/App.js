import './App.css';
import React from 'react'
import Header from "./Components/Header"
import Form1 from "./Components/Form1"
import Form2 from "./Components/Form2"


function App() {
  //Info about shop it will be shown in Header.jsx
  let logo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV9li-Jx8xkVMlBS4GkZ7z1Y1PnjGpZfIc1g&usqp=CAU"
  let serviceName = "Oskar Development"
  let serviceToken = "6BF03871F4"

  return (
    <div className="App" id="app">
    <div id="container-tips" className="max-w-[681px] bg-gray-700 h-[892px] rounded-lg	flex justify-center	 m-auto absolute inset-0">
<Header logo={logo} serviceName={serviceName} />
<Form1 />
<Form2 serviceToken={serviceToken} />

    </div>
    </div>
  );
}

export default App;
