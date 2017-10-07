import React from 'react'
import { getCommentByMovie } from '../services'
import { Comment, MovieListItem, Movie} from '../components'

class CommentList extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      comments:[],
      info:{},
      total:0,
    }
  }
  componentDidMount(){
    this.getComment()
  }
  async getComment(){
    const params = {
      apikey:'0b2bdeda43b5688921839c8ecb20399b',
      start:0,
      //start:(parseInt(props.match.params.page)-1)*10,
      count:10,
      client:null,
      uuid:null,
    }
    const id = this.props.match.params.movieid
    const data = await getCommentByMovie(params,id)
    console.log(data)
    this.setState({
      comments: data.data.comments,
      info: data.data.subject,
      total: data.data.total,
    })
  }
  render(){
    return (<div>
      <Movie {...this.state.info}/>
      {this.state.comments.map(elem=><Comment item={elem}/>)}
    </div>)
  }
}

export default CommentList