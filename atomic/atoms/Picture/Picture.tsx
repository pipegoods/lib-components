import React from 'react'
import { PictureProps } from './Picture.types'
import './Picture.css'
import { getWidth } from './helpers'

const Picture = ({ width = '100%', src, alt }: PictureProps) => (
  <picture className="picture">
    <img alt={alt} src={src} style={{ maxWidth: getWidth(width) }} />
  </picture>
)

export default Picture
