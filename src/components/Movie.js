import React from 'react'
import { Tag, Rate } from 'antd'

const MovieDetail = (props) => {
  const {
    rating={details:{}},
    year,
    original_title,
    images={},
    id,
    title,
    countries=[],
    genres=[],
    casts=[],
    directors=[],
    aka=[],
  } = props
  return ( <main className="movie-info">
      <div>
        <h1>{title} {original_title}</h1> <span>{year}</span> 
        {aka.map(elem=><span>{elem} </span>)}
        <span>{countries.map(elem=><span>{elem}</span>)}</span>
        <span>{genres.map(elem=><Tag>{elem}</Tag>)}</span>
        <section className="cast-section">
      {casts.map(elem=><span>{elem.name}</span>)}
    </section>
    <section className="director-section">
      {directors.map(elem=><span>{elem.name}</span>)}
    </section>
        </div>
        <aside>
          <Tag color="#f50">{rating.average} </Tag>
          {[1,2,3,4,5].map(elem=><span><span className="ant-rate-text">{rating.details[elem]} 人</span><Rate disabled defaultValue={elem} /></span>)}
        </aside>
    <img src={images.medium} />
     </main>
  )
}
export default MovieDetail