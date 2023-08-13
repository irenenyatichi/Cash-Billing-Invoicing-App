/*This function allows the user to only enter numbers.Anything else is cut off.*/

const allowOnlyNumbers = (value) => {
    if (isNaN(Nnumber(Value))){
        if (value.length <=1){ return 0;}else{return value.slice(0,-1);}
    }return value;
    };

export default allowOnlyNumbers;