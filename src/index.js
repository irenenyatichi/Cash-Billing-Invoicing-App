import ReactDom from "react-dom";
import { BrowserRouter as Router} from 'react-router-dom'
import App from './components/App/App';
import { AppProvider } from "./components/App/context";

ReactDom.render(
    <Router>
        <AppProvider>
            <App />
        </AppProvider>
    </Router>,
    document.getElementById('root')
);