import React from 'react'
import { DropdownProps } from './Dropdown.types'
import styles from './Dropdown.module.css'
import Icon from '../../atoms/Icon'

const Dropdown = ({ value = '1', options, onChange }: DropdownProps) => (
  <div className={styles.dropdown}>
    <Icon className="dropdown-icon" type="expandMore" hasBackground />
    <select
      className={styles['dropdown-select']}
      value={value}
      onChange={onChange}
    >
      {options.map(({ label, value }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  </div>
)

export default Dropdown
