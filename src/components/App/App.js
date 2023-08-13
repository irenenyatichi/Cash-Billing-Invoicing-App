import {Route, Switch, useLocation} from 'react-router-dom';
import Wrapper from '../Wrapper/Wrapper';
import Header from'../Header/Header';
import Invoices from '../Invoices/Invoices';
import FormController from '../FormController/FormContorller';
import InvoiceView from '../InvoiceView/InvoiceView';
import Modal from '../Modal/Modal';
import { useGlobalContext } from './context';
import { AnimatePresence } from 'framer-motion';

const App = () => {
    const { state } = useGlobalContext();
    const isModalOpen = state.isModalOpen.status;
    const isFormOpen = state.isFormOpen;
    const location = useLocation();

    return(
        <Wrapper>
            <Header>
                <AnimatePresence>
                    {isFormOpen && <FormController />}
                    {isModalOpen && <Modal></Modal>}
                </AnimatePresence>
                <AnimatePresence exitBeforeEnter>
                    <Switch location={location} key={location.key}>
                        <Route exact path="/">
                            <Invoices />
                        </Route>
                        <Route path="/invoice/:id" children={<InvoiceView />} />
                        <Route path ="*">
                            <RouteError />
                        </Route>
                    </Switch>
                </AnimatePresence>
            </Header>
        </Wrapper>
    );
};

export default App;