import Body from './components/Body'
import { Provider } from 'react-redux'
import userStore from './utils/appStore'

function App() {
  return (
    <>
      <Provider store={userStore}>
        <Body/>
      </Provider>
    </>
  )
}


export default App
