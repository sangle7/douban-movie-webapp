import React from 'react'
import { Pagination } from 'antd'
import { getInTheaters } from '../services'
import { MovieListItem, CityDropdown } from '../components'

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
    this.getInTheaters(this.props)
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.match.params.page!==this.props.match.params.page){
      this.getInTheaters(nextProps)
    }
  }
  async getInTheaters(props){
    const params = {
      apikey:'0b2bdeda43b5688921839c8ecb20399b',
      city:'广州',
      start:(parseInt(props.match.params.page)-1)*10,
      count:10,
      client:null,
      uuid:null,
    }
    const data = await getInTheaters(params)
    this.setState({
      movieList: data.data.subjects,
      total: data.data.total,
      title: data.data.title,
    })
  }
  render(){
    const paginationProps = {
      current:parseInt(this.props.match.params.page),
      total:this.state.total,
      onChange:(page)=>{
        console.log(page)
        this.props.history.push(`/intheater/${page}`)
      }
    }
    return (<div>
    <h1>{this.state.title}</h1>
    <CityDropdown />
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