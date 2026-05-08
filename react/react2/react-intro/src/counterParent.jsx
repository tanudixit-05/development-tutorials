 import { Counter } from './Counter';

export function CounterParent() {
            return <div>
                <Counter initialValue ={1}></Counter>
                <Counter initialValue ={2}></Counter>
                <Counter initialValue ={3}></Counter>
            </div>
        }
        // ReactDOM-> 1
      export default CounterParent;