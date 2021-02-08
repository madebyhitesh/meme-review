import React, { useEffect, useState } from 'react'
import "./App.css"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navigation from './components/Navigation'
import { IMeme } from './@types/interfaces'
import HomePage from './components/HomePage'
import { MemeContext } from './ContextApi/MemeContext'
import CreateMeme from './components/CreateMeme'


const App: React.FC = () => {
  const [memesData, setMemesData] = useState<IMeme[] | null>(null)

  useEffect(() => {
    const fetchMemes = async () => {
      const getData = await fetch('https://api.imgflip.com/get_memes')
      const response = await getData.json()
      setMemesData(response.data.memes)
      console.log(response.data.memes)
    }

    fetchMemes()

  }, [])

  return (
    <MemeContext.Provider value={memesData}>
      <Router>
        <div className="App bg-black">
          <Navigation />
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/create-template" exact>
              <CreateMeme />
            </Route>
          </Switch>
        </div>
      </Router>
    </MemeContext.Provider>
  )
}


export default App;
