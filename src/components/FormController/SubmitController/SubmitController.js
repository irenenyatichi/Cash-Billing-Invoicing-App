import { useState } from 'react';
import { useGlobalContext } from '../../App/context';
import { StyledSubmitController } from './SubmitControllerStyles';
import Button from '../../shared/Button/Button';

const SubmitController = () => {
    const { state, handleSubmit, discard } = useGlobalContext();
    const [isInvoiceEdited] = useState(state.isInvoiceEdited);

    return(
        <StyledSubmitController $isEdited={isInvoiceEdited}>
            <Button $small type="button" $secondary onClick={discard}>Discard</Button>
            {!isInvoiceEdited && (<Button
                type="submit"
                $small
                $save
                onClick={(event) => handleSubmit(event, 'save')}>Save Draft</Button>
            )}
            <Button
                form="invoice-from"
                type="Submit"
                $small
                $primary
                onClick={(event) => handleSubmit(event,`${!isInvoiceEdited ? 'add' : 'change'}`)}>Save Draft {!isInvoiceEdited ? '& Send' : 'changes'}
            </Button>
        </StyledSubmitController>
    );
};

export default SubmitController;