import React from 'react'
import { IconProps } from './Icon.types'
import { mapType } from './helpers'

const Icon = ({ type }: IconProps) => (
  <div>
    <img src={mapType(type)} />
  </div>
)

export default Icon
