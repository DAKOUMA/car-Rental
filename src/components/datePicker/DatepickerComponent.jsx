import React, { useState } from 'react'
import Datepicker from 'react-tailwindcss-datepicker'
import './style.css'

const DatepickerComponent = ({hookDate}) => {
    const [date, setDate] = hookDate

    return (
        <div className='date-picker'>
            <Datepicker
            popoverDirection="down"
            showFooter={true}
                useRange={false}
                primaryColor={"blue"}
                value={date}
                onChange={newValue => setDate(newValue)}
            />
        </div >
    )
}

export default DatepickerComponent