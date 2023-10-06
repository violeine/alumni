import './App.css'
import { Button } from './button/button'

function App() {
  return (
    <>
      <h1>Buttons look like button eh 🗿</h1>
      <div style={{ display: 'flex', gap: '4px' }
      }>
        <Button>Text</Button>
        <Button intent={'none'}>Text</Button>
        <Button intent={'failure'}>Text</Button>
        <Button variant="flat">Text</Button>
        <Button variant="flat" intent={'none'}>Text</Button>
        <Button disabled>Text</Button>
        <Button disabled intent={'none'}>Text</Button>
        <Button disabled variant="flat">Text</Button>
        <Button disabled variant="flat" intent={'none'}>Text</Button>
      </div>
    </>
  )
}

export default App
