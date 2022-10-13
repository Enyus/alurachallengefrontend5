import '../styles/globals.css';
import { createContext, useState } from 'react';

export const UserContext = createContext(null);

function MyApp({ Component, pageProps }) {
const [user, setUser] = useState("")

  return (
    <UserContext.Provider value={{user, setUser}}>
      <Component {...pageProps} />
    </UserContext.Provider>
  )
}

export default MyApp
