import React from 'react'
import { Pagination } from 'antd'
import { getCommingSoon } from '../services'
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
    this.getCommingSoon(this.props)
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.match.params.page!==this.props.match.params.page){
      this.getCommingSoon(nextProps)
    }
  }
  async getCommingSoon(props){
    const params = {
      apikey:'0b2bdeda43b5688921839c8ecb20399b',
      start:(parseInt(props.match.params.page)-1)*10,
      count:10,
    }
    const data = await getCommingSoon(params)
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
        this.props.history.push(`/commingsoon/${page}`)
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