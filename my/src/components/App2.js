

import App from '../App';
import { BrowserRouter, Router,Route} from 'react-router-dom';
import Projects from './Project2';

function App2(){
return(
<>
<div className='container'>
  <BrowserRouter>
<Router>
{/* <Switch> */}
  <Route path="/" element={<App/>}></Route>
  <Route path="/project" element={<Projects/>}></Route>
{/* </Switch> */}
</Router>
</BrowserRouter>
</div>
</>
)
}
export default App2
