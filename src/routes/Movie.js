import React from 'react'
import { getMovie } from '../services'
import { MovieDetail } from '../components'

class Movie extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      moviedata:{},
    }
  }
  componentDidMount(){
    this.getInTheaters()
  }
  async getInTheaters(){
    const id = this.props.match.params.movieid
    const data = await getMovie(id)
    console.log(data)
    this.setState({
      moviedata: data.data,
    })
  }
  render(){
    const movieProps = {
      ...this.state.moviedata,
    }
    return <MovieDetail {...movieProps}/>
  }
}

export default Movie