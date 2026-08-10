
import { Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Layout from './components/Layout'
import Contact from './components/Contact'
import Studies from './components/Studies'
import LearningProjects from './components/LearningProjects'
import FreelanceWork from './components/FreelanceWork'
import './App.scss';

function App() {
  return (
    <>
      <Routes>
        <Route exact element={<Layout />} >
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/studies" element={<Studies />} />
          <Route path="/learning-projects" element={<LearningProjects />} />
          <Route path="/freelance-work" element={<FreelanceWork />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
