import React from 'react'
import { Props } from './Icon.types'
import { mapType } from './helpers'

const Icon = ({ type }: Props) => (
  <div>
    <img src={mapType(type)} />
  </div>
)

export default Icon
