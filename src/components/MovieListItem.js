import React from 'react'
import { Tag, Icon } from 'antd';

const MovieListItem = (props) => {
  const { elem, toMovie, toTag } = props
  return (
    <article onClick={()=>toMovie(elem)} className="movielist">
    <img src={elem.images.medium} alt={elem.title}/>

    <section>
    <h3>{elem.title} {elem.original_title}</h3> <span>{elem.year}</span> <Tag color="#f50">{elem.rating.average}</Tag>
    <span> <Icon type="heart-o" />{elem.collect_count}</span>
    <span> {elem.mainland_pubdate}</span>
    <h4> 上映时间: {elem.pubdates.map(pubdate=><span>{pubdate} </span>)}</h4>
    <h4> {elem.genres.map(genre=><Tag onClick={(e)=>toTag(e,genre)}>{genre}</Tag>)}</h4>
    <h4> 时长: {elem.durations.map(duration=><span>{duration}</span>)}</h4>
    <h4> cast: {elem.casts.map(cast=><span>{cast.name} {cast.name_en}</span>)}</h4>
    <h4> director: {elem.directors.map(director=><span>{director.name} {director.name_en}</span>)}</h4>
    </section>

    </article>
  )
}
export default MovieListItem