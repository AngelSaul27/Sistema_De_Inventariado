const InputDark = ({className = '', type = 'text', ...props}) => {

    return (
        <input
            type={type}
            className={
                "border-gray-300 dark:border-0 dark:bg-gray-800 dark:text-gray-300 " +
                "focus:border-gray-500 dark:focus:border-gray-600 focus:ring-gray-500 dark:focus:ring-gray-600 w-full " +
                "rounded-md shadow-sm " + className
            }
            {...props}
        />
    )
}
export default InputDark;
