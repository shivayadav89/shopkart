import { useState } from "react";
import { useForm } from "react-hook-form"



export default function Practice() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    return (
        <div>
            <form onSubmit={handleSubmit((data) => console.log(data))}>
                <input
                    {...register("first Name", {
                        required: true, message: "First name is mandatory" ,
                         minLength: { value: 3, message: "First name must be at least 3 characters" }
                     }
                    )}
                />
                <p>{errors.firstName?.message}</p>
                <input
                    {...register("last Name", { required: true, maxLength: { value: 10, message: "Last name must be at most 10 characters" } })}
                />
                <p>{errors.lastName?.message}</p>







              <input
                 {...register("emailAddress", { required: true, message: "Email address is mandatory" })}
                 pattern={{
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/,
                    message: "Please enter a valid email address"
                 }}
                />
                <p>{errors.emailAddress?.message}</p>


                <button type="submit">Submit</button>
            </form>




        </div>
    );
}