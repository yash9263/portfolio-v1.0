import styled from 'styled-components'
import About from '../About'
import Contact from '../Contact'
import Header from '../Header'
import Main from '../Main'
import Project from '../Project'

const App = () => {
  return (
    <div>
      <Header/>
      <Sections>
        <Main/>
        <About/>
        <Project/>
        <Contact/>
      </Sections>
    </div>
  )
}

export const Sections = styled.main`

`
export default App
