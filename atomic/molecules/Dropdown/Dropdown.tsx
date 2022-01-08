import React from 'react'
import { DropdownProps } from './Dropdown.types'
import './Dropdown.css'
import Icon from '../../atoms/Icon'

const Dropdown = ({ value = '1' }: DropdownProps) => (
  <div className="dropdown">
    <Icon type="expandMore" hasBackground />
    <select className="dropdown-select" value={value}>
      <option value="1">8:00 AM</option>
      <option value="2">9:00 AM</option>
    </select>
  </div>
)

export default Dropdown
