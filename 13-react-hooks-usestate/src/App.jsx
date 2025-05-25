import './App.css'
import Counter from './components/Counter'
import ExampleOne from './components/example/ExampleOne'
import ExampleTwo from './components/example/ExampleTwo'
import Form from './components/Form'
import MainComp from './components/LocalStorageUser/MainComp'
import MainCallback from './components/useCallback/MainCallback'
import EffectComp from './components/UseEffect/EffectComp'
import MountUnMount from './components/UseEffect/MountUnMount'
import Memo from './components/useMemo/Memo'
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
    <MainCallback/>
    </>
  )
}

export default App
