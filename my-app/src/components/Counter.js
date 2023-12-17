import { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import PriceInput from "./PriceInput";

function Counter() {
    const [count, setCount] = useState(0);
    const [discount, setDiscount] = useState(0);

    //const name = "Banana";
    // Pass own handler to set the name of the product instead, in sync with what user types in the field.
    // Therefore, convert name into a controlled state variable with setName as update function
    const [name, setName] = useState('Banana');

    // 17dec2023. to change the below to take PriceInput
    // const price = 2.99;
    const [price, setPrice] = useState(2.99);

    // due to delay between setCount function and count state variable getting updated. 
    // therefore to pass a function to setCount.
    const handlePlus = () => {
        function myFunc(prevCount) {
            let count = prevCount + 1; 
            if (count >= 5) {
                setDiscount(20);
            }
            return count;
        }
        setCount(myFunc);       // This becomes a higher order function, due to accepting a function as argument.
    };

    // Rewriting the above using ES6 arrow notation,
    const handleMinus = () => {
        setCount((prevCount) => {
            let count = prevCount - 1;
            if (count < 5) {
                setDiscount(0);
            }
            // To also add zeroise if count goes below 0
            if (count < 0) {
                setCount(0);
            }
            return count;
        });
    };

    // Adding a reset button, and its function
    const handleReset = () => {
        return setCount(0);
    };


    //referenced from: https://copyprogramming.com/howto/typescript-react-one-onchange-handler-for-multiple-input-fields
    /*const handleChange = (e) => {
        e.preventDefault()
        this.setState({[e.target.name]: e.target.value })
        // setName(value);
        // setPrice(value);
    };
*/

    // See how to combine the two into one
    const handleNameChange = (value) => {
        setName(value);
    }

    // Adapt from HandleMinus
    // https://bobbyhadz.com/blog/react-only-number-input
    // https://minutemailer.github.io/react-popup/
/*    const handlePriceChange = (value) => {
        if (value * 1 < 0 || Number.isInteger(value)) {
            setPrice('');
        } else {
            setPrice(value);
        }
    }
*/
    const handlePriceChange = (value) => {
        Number.isInteger(value) ? setPrice('') : setPrice(value)
    }

    return (
        <>
        <h2>{name}</h2>
        <Button label='-' onClick={handleMinus} />
        <span>{count}</span>
        <Button label='+' onClick={handlePlus} />
        <div>
            <Button label='Reset' onClick={handleReset} />
        </div>
        <h2>{`$ ${price}`} each</h2>
        <h3>{`Discount: ${discount}%`}</h3>
        <Input value={name} label='Product Name' onChange={handleNameChange} />
        <PriceInput value={price} label='Product Price' onChange={handlePriceChange} />
        </>
    );
}
export default Counter;

//<Input value={name} label='Product Name' onChange={handleChange} />