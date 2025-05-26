import './App.css'
import Counter from './components/Counter'
import Custom from './components/CustomHooks/Custom'
import ExampleOne from './components/example/ExampleOne'
import ExampleTwo from './components/example/ExampleTwo'
import Form from './components/Form'
import MainComp from './components/LocalStorageUser/MainComp'
import MainCallback from './components/useCallback/MainCallback'
import ProfilePage from './components/useContext/ProfilePage'
import EffectComp from './components/UseEffect/EffectComp'
import MountUnMount from './components/UseEffect/MountUnMount'
import UseLayout from './components/useLayout/UseLayout'
import Memo from './components/useMemo/Memo'
import Reducer from './components/useReducer/Reducer'
import RefExOne from './components/useRef/RefExOne'
import RefExTwo from './components/useRef/RefExTwo'
import RenderCheck from './components/UseState/RenderCheck'
import StateObject from './components/UseState/StateObject'

function App() {

  return (
    <>
    {/* <Counter/>
    <Form/>
    <EffectComp/>
    <StateObject/>
    <MainComp/> */}
    {/* <ExampleOne/>
    <ExampleTwo/> */}
    {/* <RefExOne/> */}
    {/* <RefExTwo/> */}
    {/* <MountUnMount/> */}
    {/* <Memo/> */}
    {/* <RenderCheck/> */}
    {/* <MainCallback/> */}
    {/* <ProfilePage/> */}
    {/* <Reducer/> */}
    {/* <UseLayout/> */}
    <Custom/>
    </>
  )
}

export default App
