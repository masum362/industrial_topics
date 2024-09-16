import { createContext, useState } from "react"

export const AuthContext = createContext(null);

const AuthPorvider = ({ children }) => {

    const items = [
        {
            id: 1,
            title: 'this is card 1'
        },
        {
            id: 2,
            title: 'this is card 2'
        },
        {
            id: 3,
            title: 'this is card 3'
        },
        {
            id: 4,
            title: 'this is card 4'
        },
        {
            id: 5,
            title: 'this is card 5'
        },
    ]

    const result = {
        name: 'this is card',
        value: 10,
    }

    const [value, setValue] = useState('')

    const handleFormValue = (result) => {
       setValue(result);
   }


    const provideValue = {
        items,result,handleFormValue,value
    }

    

    return (
        <AuthContext.Provider value={provideValue}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthPorvider