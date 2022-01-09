import React from 'react'
import { IconProps } from './Icon.types'
import { mapSize, mapType } from './helpers'
import Picture from '../Picture'
import './Icon.css'

const Icon = ({ type, size = 'md', hasBackground }: IconProps) => (
  <div
    className={`icon ${hasBackground && 'has-background'}`}
    style={{ width: mapSize(size), height: mapSize(size) }}
  >
    <Picture src={mapType(type)} alt={`icono ${type}`} width={mapSize(size)} />
  </div>
)

export default Icon
