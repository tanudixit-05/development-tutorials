
 import React from 'react';
function Counter(props) {
            // create a state for that 
            const [value, setValue] = 
            React.useState(props.initialValue);
            // // jb bhi update -> react will know ki kuch update hona h 
            // const value = arr[0]; 
            // // the function that is given to you by react
            // const setValue = arr[1];
            const handleIncrement = () => {
                if (value == 100) {
                    return;
                }
                setValue(value + 1);// cant write value ++ becaue pta nhi chalega ki kya krna hai  
            }
            const handleDecrement = () => {
                if (value == -10)
                    return
                setValue(value - 1);
            }
            return <div>
                <div>{value}</div>
                <button onClick={handleIncrement}>+ Plus</button>
                <button onClick={handleDecrement}>- Minus</button>
            </div>

        }
        export default Counter;