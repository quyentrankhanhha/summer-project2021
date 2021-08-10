import React from 'react'
import { Link } from 'react-router-dom'

import classes from '../UI/FeaturePost.module.css'
import ReadMore from './ReadMore'

export default function FeaturePost(props) {
  return (
    <div className={classes.post}>
      <a className={classes['post-img_cover']}>
        <img src={props.source} style={props.imgStyle} />
      </a>
      <div className={classes.text}>
        <p>
          <span>Dessert</span>
          <span>-------</span>
          <span>March 01, 2021</span>
        </p>
        <h3>
          <Link>Tasty &#38; Delicious Foods</Link>
        </h3>
        <ReadMore styles={props.readMoreStyle}></ReadMore>
      </div>
    </div>
  )
}