import TextEditor from "./TextEditor";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { v4 as uuidV4 } from 'uuid'
function App() {
  return <Router>
    <Switch>
      <Route exact path="/" >
        <Redirect to={`/documents/${uuidV4()}`} />
      </Route>
      <Route exact path="/documents/:id" component={TextEditor} />
        {/* <TextEditor /> */}
      {/* </Route> */}
    </Switch>
  </Router>;
}

export default App;
