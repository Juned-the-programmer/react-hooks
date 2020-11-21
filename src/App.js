import React, { useState } from 'react';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import Counter from './components/Event Binding/counter'
import MessageCard from './components/Event Binding/MessageCard'
import ProductItem from './components/Event Binding/ProductItem'

import CarSelector from './components/Formmodule/Carselector'
import Register from './components/Formmodule/Register'
import SmsApp from './components/Formmodule/SmsApp'
import ChangeUsername from './components/Formmodule/ChangeUsername'

import AuthUser from './components/Conditional and Looping/AuthUser'
import Customer from './components/Conditional and Looping/Customer'
import EmployeeCard from './components/Conditional and Looping/Employeecard'
import HobbySelector from './components/Conditional and Looping/Hobbyselector'
import ParentComponent from './components/Component Interaction/Basic/Parentcomponent';
import ParentCard from './components/Component Interaction/Intermediate/ParentCard';
import Server from './components/Component Interaction/Advanced/Server';
import Client from './components/Component Interaction/Advanced/Client';
import ComponentA from './components/Props-Drilling-context-Api/Props Drilling/ComponentA';
import ComponentOne from './components/Props-Drilling-context-Api/Context-API/ComponentOne';
import UserContext from './components/Props-Drilling-context-Api/Context-API/UserContext';
import DigitalWatch from './components/Props-Drilling-context-Api/LifeCycle/DigitalClock';
import CustomerList from './components/Context-API/Customerlist';
import ContactApp from './components/ContactApp/Contactapp';

let App = () => {

  let [message , setmessage] = useState({
    servermessage : '',
    clientmessage : ''
  })

  let sendData = (data) => {
    setmessage({
      ...message,
      servermessage : data
    })
  }

  let SendClientData = (data) => {
    setmessage({
      ...message,
      clientmessage : data
    })
  }

  let [app , setapp ] =useState({
    userinfo : {
        first_name : 'Davada',
        last_name : 'Juned',
        phone_no : 7698530801,
        city : 'Basu',
        State : 'Gujarat'
    }
  })
  return (
    <React.Fragment>
      <Counter></Counter>
      <MessageCard></MessageCard>
      <ProductItem></ProductItem>

      <CarSelector></CarSelector>
      <Register></Register>
      <SmsApp></SmsApp>
      <ChangeUsername></ChangeUsername>

      <AuthUser></AuthUser>
      <Customer></Customer>
      <EmployeeCard></EmployeeCard>
      <HobbySelector></HobbySelector>

      <ParentComponent></ParentComponent>
      <ParentCard></ParentCard>
      <div className="row">
        <div className="col-md-6">
          <Server sendData={sendData} clientmessage={message.clientmessage}></Server>
        </div>
        <div className="col-md-6">
          <Client servermessage={message.servermessage} SendClientData={SendClientData}></Client>
        </div>
      </div>
      
      <ComponentA></ComponentA>

      <div className="container mt-3">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-header bg-dark text-white">
                <p className="h3">Context API</p>
              </div>
              <div className="card-body bg-warning text-white">

                <UserContext.Provider value={app.userinfo}>
                <ComponentOne></ComponentOne>
                </UserContext.Provider>
                
              </div>
            </div>
          </div>
        </div>
      </div>

      <DigitalWatch></DigitalWatch>
      <CustomerList></CustomerList>

      <ContactApp></ContactApp>
      <div className="mb-5"></div>
    </React.Fragment>
  )
}

export default App;