import Icon from '../../shared/Icon/Icon';
import { useState, useRef, useEffect } from 'react';
import { useTheme } from 'styled-components';
import { useGlobalContext } from '../../App/context';
import { StyledSelect, Cta, List, Item, Option } from './SelectStyles';

const Select = () => {
    const { invoice, handleInvoiceChange } = useGlobalContext();
    const { colors } = useTheme();
    const [isExpanded, setIsExpanded] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const checkIfClickedOutside = (event) => {
            const target = event.target;
            if (isExpanded && ref.current && !ref,current.contains(target)){
                setIsExpanded(!isExpanded);
            }
        };
        document.addEventListener('click', checkIfClickedOutside);

        return () => {
            document.removeEventListener('click', checkIfClickedOutside);
        }; }, [isExpanded]);

    const expandSelect = () => { setIsExpanded(!isExpanded);};
    const handleClick = (event) => {handleInvoiceChange(event, 'invoice'); setIsExpanded(!isExpanded);};

return(
    <StyledSelect>
        <Cta 
            type="button"
            aria-label="Select payment terms"
            aria-expanded={isExpanded}
            aria-controls="select-list"
            onClick={expandSelect}
            $isExpanded={isExpanded}
        > Next {invoice.paymentTerms} Days
            <Icon name={'arrow-down'} size={12} color={colors.purple}/>
        </Cta>
        {isExpanded && ( <List id="select-list" ref={ref}>
            <Item>
                <Option 
                    type = "button"
                    name = "paymentTerms"
                    value = "1"
                    onClick = {(event) => handleClick(event)}> Next 1 Day
                </Option>
            </Item>
            <Item>
                <Option 
                    type = "button"
                    name = "paymentTerms"
                    value = "2"
                    onClick = {(event) => handleClick(event)}> Next 7 Days
                </Option>
            </Item>
            <Item>
                <Option 
                    type = "button"
                    name = "paymentTerms"
                    value = "3"
                    onClick = {(event) => handleClick(event)}> Next 14 Days
                </Option>
            </Item>
            <Item>
                <Option 
                    type = "button"
                    name = "paymentTerms"
                    value = "4"
                    onClick = {(event) => handleClick(event)}> Next 30 Days
                </Option>
            </Item>
        </List>)}
    </StyledSelect>
);
};

export default Select;