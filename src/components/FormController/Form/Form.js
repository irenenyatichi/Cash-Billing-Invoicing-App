import { useGlobalContext } from "../../App/context";
import Select from "../../App/context";
import DatePicker from "../DatePicker/DatePicker";
import List from "../List/List";
import {
    Title,
    Hashtag,
    StyledForm,
    Fieldset,
    Label,
    Legend,
    InputWrapper,
    ErrorsWrapper,
    InputsGroup,
    Input,
    Error,
} from './FormStyles';

const Form = ({ isEdited}) => {
    const { state, invoice, handleInvoiceChange } = useGlobalContext();
    const errors = state.errors.err;
    const messages = state.errors.msg;
    const invoiceId = state.currInvoiceIndex;

    return(
        <>
            {!isEdited && <Title>New Invoice</Title>}
            {isEdited && ( <Title>Edit<Hashtag>#</Hashtag>{invoiceId}</Title>)}
            <StyledForm id="invoice-form">
                <Fieldset>
                    <Legend>This Bill is From:</Legend>
                    <InputWrapper>
                    <Label
                        htmlFor="street"
                        $error={errors.senderAddress?.street}
                        >Location { errors.senderAddress?.street && (<Error>Location cannot be empty</Error>)}</Label>
                    <Input
                        type="text"
                        name="street"
                        value={invoice.senderAddress.street}
                        $error={errors.senderAddress?.street}
                        onChange={ (event) =>
                            handleInvoiceChange(event, 'senderAdress')}/>
                    </InputWrapper>
                    <InputsGroup>
                        <InputWrapper>
                        <Label
                            htmlFor="Postal area"
                            $error={errors.senderAddress?.Postalarea}
                            >Country { errors.senderAddress?.Postalarea && (<Error>Country code cannot be empty</Error>)}</Label>
                        <Input
                            type="text"
                            name="Postalarea"
                            value={invoice.senderAddress.Postalarea}
                            $error={errors.senderAddress?.Postalarea}
                            onChange={ (event) =>
                            handleInvoiceChange(event, 'senderAdress')}/>
                        </InputWrapper>                    
                        <InputWrapper>
                        <Label
                            htmlFor="Postalcode"
                            $error={errors.senderAddress?.Postalcode}
                            >City{ errors.senderAddress?.Postalcode && (<Error>City cannot be empty</Error>)}</Label>
                        <Input
                        type="text"
                        name="street"
                        value={invoice.senderAddress.Postalcode}
                        $error={errors.senderAddress?.Postalcode}
                        onChange={ (event) =>
                            handleInvoiceChange(event, 'senderAdress')}/>
                        </InputWrapper>
                        <InputWrapper>
                        <Label
                            htmlFor="Postalcode"
                            $error={errors.senderAddress?.Postalcode}
                            >Postal Address{ errors.senderAddress?.Postalcode && (<Error>Postal Address cannot be empty</Error>)}</Label>
                        <Input
                        type="text"
                        name="street"
                        value={invoice.senderAddress.Postalcode}
                        $error={errors.senderAddress?.Postalcode}
                        onChange={ (event) =>
                            handleInvoiceChange(event, 'senderAdress')}/>
                        </InputWrapper>
                    </InputsGroup>
                </Fieldset>

                <Fieldset>
                    <Legend>This Bill is To:</Legend>
                    <InputWrapper>
                        <Label htmlFor="clientName" $error={errors?.clientName}>
                        Client's Name{errors?.clientName && (<Error>Client's Name Cannot Be Empty!!!</Error>)}</Label>
                        <input 
                            type="text"
                            name="clientName"
                            value={invoice.clientname}
                            $error={errors?.clientname}
                            onChange={(event) =>
                            handleInvoiceChange(event, 'invoice')
                        }/>
                    </InputWrapper>

                    <InputWrapper>
                        <Label htmlFor="clientEmail" $error={errors?.clientEmail}>
                        Client's Email{errors?.clientEmail && (<Error>Client's Email Cannot Be Empty!!!</Error>)}</Label>
                        <input 
                            type="text"
                            placeholder="e.g email@domain.com"
                            name="clientEmail"
                            value={invoice.clientEmail}
                            $error={errors?.clientEmail}
                            onChange={(event) =>
                            handleInvoiceChange(event, 'invoice')
                        }/>
                    </InputWrapper>

                    <InputWrapper>
                    <Label
                        htmlFor="street"
                        $error={errors.senderAddress?.street}
                        >Location { errors.senderAddress?.street && (<Error>Location cannot be empty</Error>)}</Label>
                    <Input
                        type="text"
                        name="street"
                        value={invoice.senderAddress.street}
                        $error={errors.senderAddress?.street}
                        onChange={ (event) =>
                            handleInvoiceChange(event, 'senderAdress')}/>
                    </InputWrapper>

                    <InputsGroup>
                        <InputWrapper>
                        <Label
                            htmlFor="Postal area"
                            $error={errors.senderAddress?.Postalarea}
                            >Country { errors.senderAddress?.Postalarea && (<Error>Country code cannot be empty</Error>)}</Label>
                        <Input
                            type="text"
                            name="Postalarea"
                            value={invoice.senderAddress.Postalarea}
                            $error={errors.senderAddress?.Postalarea}
                            onChange={ (event) =>
                            handleInvoiceChange(event, 'senderAdress')}/>
                        </InputWrapper>                    
                        <InputWrapper>
                        <Label
                            htmlFor="Postalcode"
                            $error={errors.senderAddress?.Postalcode}
                            >City{ errors.senderAddress?.Postalcode && (<Error>City cannot be empty</Error>)}</Label>
                        <Input
                        type="text"
                        name="street"
                        value={invoice.senderAddress.Postalcode}
                        $error={errors.senderAddress?.Postalcode}
                        onChange={ (event) =>
                            handleInvoiceChange(event, 'senderAdress')}/>
                        </InputWrapper>
                        <InputWrapper>
                        <Label
                            htmlFor="Postalcode"
                            $error={errors.senderAddress?.Postalcode}
                            >Postal Address{ errors.senderAddress?.Postalcode && (<Error>Postal Address cannot be empty</Error>)}</Label>
                        <Input
                        type="text"
                        name="street"
                        value={invoice.senderAddress.Postalcode}
                        $error={errors.senderAddress?.Postalcode}
                        onChange={ (event) =>
                            handleInvoiceChange(event, 'senderAdress')}/>
                        </InputWrapper>
                    </InputsGroup>
                </Fieldset>

                <Fieldset>
                    <Legend>Invoice Details</Legend>
                    <InputsGroup $fullWidthMobile>
                        <InputWrapper $fullWidth>
                        <Label htmlFor="description" $error={errors?.description}>
                        Project Description{errors?.description && (<Error>Description Cannot Be Empty!!!</Error>)}</Label>
                        <input 
                            type="text"
                            placeholder="e.g Water Project"
                            name="description"
                            value={invoice.description}
                            $error={errors?.description}
                            onChange={(event) =>
                            handleInvoiceChange(event, 'invoice')
                        }/>
                        </InputWrapper>

                        <InputWrapper>
                            <Label>Invoice Date</Label>
                            <DatePicker />
                        </InputWrapper>

                        <InputWrapper>
                            <Label>Payment Terms</Label>
                            <Select />
                        </InputWrapper>
                    </InputsGroup>
                </Fieldset>
                <List />
                {messages.length > 0 && (
                    <ErrorsWrapper>
                        {messages.map((item, index) => (
                            <Error key={index}>{item}</Error>
                        ))}
                    </ErrorsWrapper>
                )}
            </StyledForm>
        </>
    );
};

export default Form;