import { Route, Switch, useLocation } from 'react-router-dom';
import Wrapper from '../Cash-Billing/src/components/Wrapper/Wrapper';
import Header from'../Cash-Billing/src/components/Header/Header';
import Invoices from '../Cash-Billing/src/components/Invoices/Invoices';
import FormController from '../Cash-Billing/src/components/FormController/FormContorller';
import InvoiceView from '../Cash-Billing/src/components/InvoiceView/InvoiceView';
import Modal from '../Cash-Billing/src/components/Modal/Modal';
import { useGlobalContext } from '../Cash-Billing/src/components/App/context';
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