import React from 'react'

export default function RadioItem(props) {
    return (
        <div>
        <input type="radio" id="myRadio"/>
        <label htmlFor="myRadio" >
          {props.opt.options}
        </label>
          
        </div>
    )
}
