const FormInput = ({className = '', name, ...restOfProps}) => {

    return (
        <textarea className={"border-gray-300 dark:border-0 dark:bg-gray-700 dark:text-gray-400 " +
                "focus:border-gray-500 dark:focus:border-gray-600 focus:ring-gray-500 dark:focus:ring-gray-600 w-full " +
                "rounded-md shadow-sm " + className
            } {...restOfProps} name={name} id={name} autoComplete={name}
        ></textarea>
    )
}
export default FormInput;
