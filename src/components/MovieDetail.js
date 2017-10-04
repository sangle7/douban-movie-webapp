import React from 'react'
import { Tag } from 'antd'

const MovieDetail = (props) => {
  const {
    rating={},
    reviews_count,
    wish_count,
    year,
    images={},
    id,
    title,
    countries=[],
    genres=[],
    collect_count,
    casts=[],
    original_title,
    summary,
    directors=[],
    comments_count,
    ratings_count,
    aka=[],
  } = props
  return ( <main>
    <h1>{title} {original_title}</h1> <span>{year}</span> 
    {aka.map(elem=><span>{elem} </span>)}
    <span>{countries.map(elem=><span>{elem}</span>)}</span>
    <span>{genres.map(elem=><Tag>{elem}</Tag>)}</span>
    <p>{summary}</p>
    <img src={images.medium} />
    <section>
      {casts.map(elem=><div><img src={elem.avatars.medium}/> <span>{elem.name}</span> </div>)}
    </section>
    <section>
      {directors.map(elem=><div><img src={elem.avatars.medium}/> <span>{elem.name}</span> </div>)}
    </section>
    <aside>
    <Tag color="#f50">{rating.average} </Tag><span>{ratings_count}人评分</span>
    <span>{wish_count}人想看</span>
    <span>{collect_count}人收藏</span>
    <span>{reviews_count}条长评</span>
    <span>{comments_count}条短评</span>
    </aside>
     </main>
  )
}
export default MovieDetail