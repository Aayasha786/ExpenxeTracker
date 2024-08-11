// import { useState } from 'react'
import './App.css'
import AddTransaction from './component/AddTransaction'
import Balance from './component/Balance'
import Header from './component/Header'
import IncomeExpenses from './component/IncomeExpenses'
import TransactionList from './component/TransactionList'

import { GlobalProvider } from './context/GlobalState'

 

function App() {
  return (
    <GlobalProvider>
      <Header/> 
      <Balance/> 
      <IncomeExpenses/>
      <TransactionList/>
      <AddTransaction/>  
      
    </GlobalProvider>
  )
}

export default App
