import React, { useState } from 'react'

export const userDataContext = React.createContext()

const UserContext = ({children}) => {

    const [user, setUser] = useState({
        email: '',
        fullname:{
            firstname: '',
            lastname: ''
        },
        password: '',
    })

  return (
    <div>
      <userDataContext.Provider value={user}>
        {children}
      </userDataContext.Provider>
    </div>
  )
}

export default UserContext
