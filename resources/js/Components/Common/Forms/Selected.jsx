const Selected = ({children, options = [], className = '', name , placeholder, ...props}) => {

    return (
        <select className={
            "border-gray-300 dark:border-0 dark:bg-gray-700 dark:text-gray-300 " +
            "focus:border-gray-500 dark:focus:border-gray-600 focus:ring-gray-500 dark:focus:ring-gray-600 w-full " +
            "rounded-md shadow-sm " + className
        } {...props} name={name} id={name} autoComplete={name}>
            <option value={null} className={"hidden"}>{placeholder ? placeholder : 'Seleccionar'}</option>
            <option value={''} className={"hidden"}>{placeholder ? placeholder : 'Seleccionar'}</option>
            {options.length > 0 && options.map((item, index) => (
                <option value={item.id} key={index}>{item.description ? item.description : item.name}</option>
            ))}
            {children}
        </select>
    )
}
export default Selected;
