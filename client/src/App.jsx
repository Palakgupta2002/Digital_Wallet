

import './App.css'
import { createContext, useState } from 'react'
import Body from './Body';

export const EmailContext = createContext();
function App() {

  const [email, setEmail] = useState('');
  return (
  <div>
    <EmailContext.Provider value={{ email, setEmail }}>
     <Body/>
   </EmailContext.Provider>
 </div>
  )
}

export default App
