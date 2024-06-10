import React, {useState} from "react";

const INPUT_STYLE = "border-gray-300 border-0 bg-gray-700 text-gray-300 focus:border-gray-600 focus:ring-gray-600 w-full rounded-md shadow-sm";
const CLOSE_INPUT_STYLE = " absolute flex items-center right-2 top-0 bottom-0 hover:text-red-500 opacity-40 cursor-pointer";

const FormInput = ({input_props, name, setData, options = [], disabled = false}) =>
{
    const [newOptions, setNewOptions] = useState(options);
    const [isCreated, setIsCreated] = useState(false);
    const selectRef = React.useRef();

    React.useEffect(()=> {
        if(selectRef?.current?.value === "CreateOption" || input_props?.value === "CreateOption"){
            setIsCreated(true);
            setData(name, '')
        }
    }, [selectRef?.current?.value])

    React.useEffect(() => {
        if (input_props?.value && !options.find(option => option.id === input_props?.value)) {
            const newValue = input_props.value;
            const newOption = { id: newValue, description: newValue };
            setData(name, newValue);
            setNewOptions([...options, newOption]);
        }
    }, [])

    const HandleCloseInput = () => {
        setIsCreated(false);
        setData(name, '');
    }

    return (
        <>
            {!isCreated ?
                <select
                    id={name}
                    name={name}
                    ref={selectRef}
                    autoComplete={name}
                    onChange={(e) => setData(name, e.target.value)}
                    className={INPUT_STYLE}
                    value={input_props?.value === "CreateOption" ? '' : input_props?.value}
                    disabled={disabled}
                >
                    <option value={null} className={"hidden"}>Seleccionar</option>
                    {newOptions.length > 0 && newOptions.map((item, index) => (
                        <option value={item.id} key={index}>
                            { item.description ? item.description : item.name }
                        </option>
                    ))}
                    <option value={"CreateOption"}>Agregar</option>
                </select>
                :
                <div className={"relative"}>
                    <input
                        name={name}
                        autoComplete={name}
                        value={input_props?.value}
                        type={input_props?.type ? input_props.type : 'text'}
                        onChange={(e) => setData(name, e.target.value)}
                        className={INPUT_STYLE+ " pr-5"} placeholder={"Nuevo"}
                    />
                    <IconClose close={HandleCloseInput} />
                </div>
            }
        </>
    )
}

const IconClose = ({close}) => (
    <div className={CLOSE_INPUT_STYLE} onClick={close}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
             className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"/>
        </svg>
    </div>
)

export default FormInput;
