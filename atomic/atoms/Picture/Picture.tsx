import React from 'react'
import { PictureProps } from './Picture.types'
import styles from './Picture.module.css'
import { getWidth } from './helpers'

const Picture = ({ width = '100%', src, alt }: PictureProps) => (
  <picture className={styles.picture}>
    <img alt={alt} src={src} style={{ maxWidth: getWidth(width) }} />
  </picture>
)

export default Picture
