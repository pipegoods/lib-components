import React from 'react'
import { DropdownProps } from './Dropdown.types'
import './Dropdown.css'
import Icon from '../../atoms/Icon'

const Dropdown = ({ value = '1', options, onChange }: DropdownProps) => (
  <div className="dropdown">
    <Icon type="expandMore" hasBackground />
    <select className="dropdown-select" value={value} onChange={onChange}>
      {options.map(({ label, value }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  </div>
)

export default Dropdown
