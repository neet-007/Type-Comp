import React, { forwardRef, useState } from 'react'
import './AppSelect.css'

const AppSelectOption = ({value, className}) => {
    return(
        <option value={value} className={`${className} cap`}>
            {value}
        </option>
    )
}

const AppSelect = forwardRef (({optoins=[{value:'aa'}, {value:'bb'}], borderRadius='medium', backgroundColor='secondary'}, ref) => {
    const [value, setValue] = useState()
    return (
        <select className={`app-select__select border-${borderRadius} bg-${backgroundColor} cap`} onChange={(e) => setValue(e.target.value)} ref={ref}>
            {optoins.map(item => {
                return <AppSelectOption key={item.value} value={item.value} className={`app-select__select border-${borderRadius} bg-${backgroundColor}`}/>
            })}
        </select>
    )
})

export default AppSelect