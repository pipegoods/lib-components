import React from 'react'
import { InputProps } from './Input.types'
import './Input.css'

const Input = ({ type, value, onChange, placeholder }: InputProps) => (
  <input
    className="input"
    type={type}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
  />
)

export default Input
