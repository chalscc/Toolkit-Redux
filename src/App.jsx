import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from './store/slices/counter'

function App() {
  const { counter } = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  return (
    <>
      <div className="card">
        <button onClick={() => dispatch( increment() )}>
          Count is {counter}
        </button>
      </div>
    </>
  )
}

export default App
