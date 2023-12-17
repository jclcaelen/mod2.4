// onChange event handler triggered when value of element (e.g., <input> changes)

function Input({ value, label, onChange }) {
    const handleChange = (event) => {
        onChange(event.target.value);   // Execute onChange handler from parent
    };
    return (
        <div>
            <label>{label}</label>
            <input value={value} onChange={handleChange} />
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


export default Input;