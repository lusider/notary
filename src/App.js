
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './Main'
import Amplify from "aws-amplify";
import awsExports from "./aws-exports";
Amplify.configure(awsExports);

function App() {
  return (
    <Router>
        <Main />
    </Router>
  );
}

export default App;
