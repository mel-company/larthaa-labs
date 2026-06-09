import { SmoothScroll } from 'react-smooth-scrolll'
import HomePage from './pages/home'
import { CustomCursor } from './components/cursor'

function App() {
  return (
    <>
      <CustomCursor />
      <SmoothScroll><HomePage /></SmoothScroll>
    </>
  )
}

export default App
