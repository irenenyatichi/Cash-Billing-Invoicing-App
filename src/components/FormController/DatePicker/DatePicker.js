import { forwardRef } from "react";
import { useGlobalContext } from "../../App/context";
import 'react-datepicker/dist/react-datepicker.css';
import dateToString from '../../../utilities/DateToString';
// import { useGlobalContext } from "../../App/context";
import Icon from '../../shared/Icon/Icon';
import { CustomPicker } from './DatePickerStyles';

const CustomInput = forwardRef(({ isDisabled, value, onClick }, ref) =>(
    <CustomPicker
        type="button"
        disabled={isDisabled}
        onClick={onClick}
        value={value}
        ref={ref}
    >
    {dateToString(value)}
    <Icon name={'calendar'} size ={12} color="hsl(252, 94%, 67%)" />
    </CustomPicker>
));

const DatePicker = () => {
    const { state, invoice, handlnvoiceChange } = useGlobalContext();
    const isInvoiceEdited = state.isInvoiceEdited;

    return (
        <ReactDatePicker
            selected={new Date(invoice.createdAt)}
            onChange={(date) => handlnvoiceChange(false, 'date', date)}
            minDate={new Date()}
            CustomInput={<CustomInput isDisabled={isInvoiceWdited} />}

        />
    );
};

export default DatePicker;