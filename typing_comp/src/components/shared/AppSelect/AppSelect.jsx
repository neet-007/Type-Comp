import React, { useState } from 'react'
import './AppSelect.css'

const AppSelectOption = ({value, className}) => {
    return(
        <option value={value} className={className}>
            {value}
        </option>
    )
}

const AppSelect = ({optoins=[{value:'aa'}, {value:'bb'}], borderRadius='medium', backgroundColor='secondary'}) => {
  const [value, setValue] = useState()
  console.log(value)
  return (
    <select className={`app-select__select border-${borderRadius} bg-${backgroundColor}`} onChange={(e) => setValue(e.target.value)}>
        {optoins.map(item => {
            return <AppSelectOption key={item.value} value={item.value} className={`app-select__select border-${borderRadius} bg-${backgroundColor}`}/>
        })}
    </select>
  )
}

export default AppSelect