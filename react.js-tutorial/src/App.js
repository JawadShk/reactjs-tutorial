import './App.css';
import ClassComponent from './Components/ClassComponent';
import FunctionComponent from './Components/FunctionComponent';
import PropsViaFuncCom from './Components/PropsViaFuncCom';

function App() {
  return (
    <>
      {/* < ClassComponent />
      <FunctionComponent/> */}
      <PropsViaFuncCom name={"Jawad"} age={20} email={"shaikhjawad020@gmail.com"} other={{mobile:"8850838058", address:"mumbai"}} />
    </>
  );
}

export default App;
