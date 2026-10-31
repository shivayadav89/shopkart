// import { useState } from "react";
// import { useForm } from "react-hook-form"



// export default function Practice() {
//     const {
//         register,
//         handleSubmit,
//         formState: { errors },
//     } = useForm()
//     return (
//         <div>
//             <form onSubmit={handleSubmit((data) => console.log(data))}>
//                 <input
//                     {...register("first Name", {
//                         required: true, message: "First name is mandatory" ,
//                          minLength: { value: 3, message: "First name must be at least 3 characters" }
//                      }
//                     )}
//                 />
//                 <p>{errors.firstName?.message}</p>
//                 <input
//                     {...register("last Name", { required: true, maxLength: { value: 10, message: "Last name must be at most 10 characters" } })}
//                 />
//                 <p>{errors.lastName?.message}</p>







//               <input
//                  {...register("emailAddress", { required: true, message: "Email address is mandatory" })}
//                  pattern={{
//                     value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/,
//                     message: "Please enter a valid email address"
//                  }}
//                 />
//                 <p>{errors.emailAddress?.message}</p>


//                 <button type="submit">Submit</button>
//             </form>




//         </div>
//     );
// }




// import { useForm } from "react-hook-form";
// import { useReducer } from "react";
// function reducer(state, action) {
//     if (action.type === "increment") {
//         return { count: state.count + 1 };
//     } else if (action.type === "decrement") {
//         return { count: state.count - 1 };
//     }
//     else if (action.type === "clear") {
//         return {
//             count: 0
//         };
//     }
//     throw new Error("Unkown action type");
// }
// export default function Practice() {
//     const [state, dispatch] = useReducer(reducer, { count: 0 });
//     return (
//         <>
//             <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
//             <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
//             <button onClick={() => dispatch({ type: "clear" })}>Clear</button>



//         </>
//     )
// };





// import { useForm } from "react-hook-form"
// import { useReducer } from "react";

// function reducer(state, action) {
//   if (action.type === 'incremented_count') {
//     return {
//       count: state.count + 1
//     };
//   }else if(action.type === "decrement_count"){
//     return{
//         count: state.count - 1
//     };
//   }
//   else if(action.type === "clear"){
//     return{
//         count: 0
//     };
//   }
//   throw Error('Unknown action.');
// }

// export default function Practice() {
//     const [state, dispatch] = useReducer(reducer, { count: 0 });
//     return (
//         <>
//             <button onClick={() => {
//                 dispatch({ type: 'incremented_count' })
//             }}>
//                 Increment count
//             </button>
//             <p>{state.count}.</p>
//             <button onClick={() => {
//                 dispatch({ type: 'decrement_count' })
//             }}>
//                 Decrement count
//             </button>
//             <button onClick={() => {
//                 dispatch({ type: 'clear' })
//             }}>
//                 Clear
//             </button>
//         </>

//     );
// }







// local storage


import { useState, useEffect } from "react";
import {setItem, getItem} from "../Utils/localStorage.jsx";
export default function Practice() {
    const[count,setCount] = useState(()=>{
        const item = getItem("count");
        return item || 0;
    });

    useEffect(()=>{
        setItem("count",count);

    },[count])
    return(
        <> 
        <div>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <p>{count}</p>
            <button onClick={() => setCount(count - 1)}>Decrement</button>



        </div>

        
        
        </>

    )
}

