import React, {useState, useEffect, useContext} from "react";
import { Provider } from '../shared/Provider/Provider';
import useThemeToggle from '../../hooks/UseThemeToogle';
import useManageInvoices from '../../hooks/UseManageInvoices';


const AppContext = React.createContext( );

const AppProvider = ({ children}) => {
    const { theme, toggleTheme } = useThemeToggle();
    const { state, invoice, senderAddress, clientAddress, items, handleInvoiceChange, handleItemsAdd, handleItemsRemove,
                handleSubmit, editInvoice, deleteInvoice, MarkInvoicesasPAid,createInvoice, discard, toggleModal, } = useManageInvoices();
    const {filteredInvoices, filtertype, changeFiltertype, } = useFilter(state);
    const[windowWidth, setWindowWidth] = useState(window.innerWidth);

    /* */
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize, handleResize');
        };
    }, []);

    /* */
    const handleResize = () => {
        setWindowWidth(window.innerWidth)
    };

    return(
        <AppContext.Provider>
        value={{
            theme,
            toggleTheme,
            windowWidth,
            state,
            invoice,
            senderAddress,
            clientAddress,
            handleInvoiceChange,
            handleItemsAdd,
            handleItemsRemove,
            handleSubmit,
            editInvoice,
            deleteInvoice,
            MarkInvoicesasPAid,
            createInvoice,
            discard,
            toggleModal,
            filteredInvoices,
            filtertype,
            changeFiltertype
        }}
            <Provider themeColor={theme}>{children}</Provider>
            
        </AppContext.Provider>
    );
    };

    export const useGlobalContext = () =>{
        return useContext(AppContext);
    };

    export { AppProvider};
