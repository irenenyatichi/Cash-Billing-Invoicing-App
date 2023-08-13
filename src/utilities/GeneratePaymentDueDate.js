/* This function converts a date into string. For Example 13/08/2023 become 2023,08,13*/

const convertStringToDateInstance = (date) => {
    return typeof date === 'object'
        ? date
        : new Date(date.replaceAll('-', ','));
};

/* This one generates payment based on the due date and also to school*/

const generatePaymentDueDate = (createDate, terms) => {
    // Convert terms to milliseconds.
    // terms(days) * hours in the day * minutes in hour * seconds in minute * milliseconds in second
    const daysToMilliseconds = parseInt(terms) * 24 * 60 * 60 * 1000;
    const paymentDue = new Date(
        convertStringToDateInstance(createDate).getTime() + daysToMilliseconds
    );
    return paymentDue;
};

export default generatePaymentDueDate;