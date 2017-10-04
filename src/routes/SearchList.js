import React from 'react'
import querystring from 'querystring'
import { Pagination } from 'antd'
import { getSearchResult } from '../services'
import { MovieListItem } from '../components'

class InTheater extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      movieList:[],
      total:0,
      title:null,
    }
  }
  componentDidMount(){
    this.getSearchResult(this.props)
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.location.search===this.props.location.search){
      return
    }
    this.getSearchResult(nextProps)
  }
  async getSearchResult(props){
    const query = querystring.parse(props.location.search.slice(1))
    const page = query.page || 1
    const params = {
      apikey:'0b2bdeda43b5688921839c8ecb20399b',
      start:(parseInt(page)-1)*10,
      count:10,
      ...query
    }
    const data = await getSearchResult(params)
    this.setState({
      movieList: data.data.subjects,
      total: data.data.total,
      title: data.data.title,
    })
  }
  render(){
    const query = querystring.parse(this.props.location.search.slice(1))
    const { page } = query
    const paginationProps = {
      current:page ? parseInt(page) : 1,
      total:this.state.total,
      onChange:(page)=>{
        query.page = page
        this.props.history.push(`/search?${querystring.stringify(query)}`)
      }
    }
    return (<div>
    <h1>{this.state.title}</h1>
    {this.state.movieList.map(elem=>{
      const itemProps = {
        elem,
        toTag:(event,tag)=>{
          event.stopPropagation()
          this.props.history.push(`/search?tag=${tag}`)
        },
        toMovie:(item)=>{
          console.log(item.title)
          this.props.history.push(`/movie/${item.id}`)
        }
      }
      return <MovieListItem {...itemProps} />
    })}
    <Pagination {...paginationProps}/>
    </div>
  )}
}

export default InTheater