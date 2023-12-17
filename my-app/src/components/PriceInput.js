// onChange event handler triggered when value of element (e.g., <input> changes)
// Copied from Input.js on 17Dec2023
// https://bobbyhadz.com/blog/react-only-number-input
// https://www.tutorialspoint.com/how-to-allow-only-positive-numbers-in-the-input-number-type#:~:text=To%20sum%20it%20up%2C%20the,numbers%20in%20the%20input%20field.


function isNumber(str) {
    if (str.trim() === '') {
        return false;
    }

    return !isNaN(str);
}

function PriceInput({ value, label, onChange }) {
    const handleChange = (event) => {
        onChange(event.target.value);   // Execute onChange handler from parent

        if (isNumber(event.target.value)) {
            console.log('Number keyed is valid')
        } else {
            console.log('Please key in a valid positive number')
        }
    };
    return (
        <div>
            <label>{label}</label>
            <input type="number" min={0} value={value} onChange={handleChange} />
        </div>
    );
}

// Event target - JS' special object that reads properties and attributes of element whose event is triggered.
// event.target.value reads "value" attributes of input field
// useful as event.target has access to each of the attributes of the element.

/*

Or can declare the above as inline function

function Input({ value, label, onChange}) {
    return (
        <div>
            <label>{label}</label>
            <input value={value} onChange{(e) => onChange(e.target.value)} />
        </div>
    );
}

*/ 


export default PriceInput;