import React from 'react'
import './App.css'
import { Menu, Search } from './components'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { InTheater, Movie, SearchList, LongComment, ShortComment, MoviePics, CommingSoon, Toplist, Error } from './routes'
import { withRouter } from 'react-router'

const WithRouterSearch = withRouter(Search)

const App = (props) => {
  const searchProps = {
    onSearch(value){
      this.history.push(`/search?q=${value}`)
    }
  }
  return (
    <Router>
      <div className="App">
        <Menu children={<WithRouterSearch {...searchProps}/>}/>
          <main className="mainContainer">
            <Switch>
              <Route path="/intheater/:page" component={InTheater}></Route>
              <Route path="/commingsoon/:page" component={CommingSoon}></Route>
              <Route path="/toplist/:listtype/:page" component={Toplist}></Route>
              <Route exact path="/search" component={SearchList}></Route>
              <Route path="/movie/:movieid/comments" component={LongComment}></Route>
              <Route path="/movie/:movieid/reviews" component={ShortComment}></Route>
              <Route path="/movie/:movieid/pictures" component={MoviePics}></Route>
              <Route path="/movie/:movieid" component={Movie}></Route>
              <Redirect from="/" to="/intheater/1"/>
              <Route component={Error}></Route>
          </Switch>
      </main>
    </div>
  </Router>
  )
}

export default App
