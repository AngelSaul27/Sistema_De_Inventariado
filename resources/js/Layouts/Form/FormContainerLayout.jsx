export const ColumnFormLayout = ({children, ...restOfProps}) => (
    <div className={"flex flex-col justify-center items-center"}>
        <form {...restOfProps} className={"flex flex-col space-y-4 py-5 px-10 bg-gray-800 rounded-md md:max-w-md w-full"}>
            {children}
        </form>
    </div>
)

export const RowFormLayout = ({children, ...restOfProps}) => (
    <form className={"flex flex-col md:flex-row justify-center items-start gap-4"} {...restOfProps}>
        {children}
    </form>
)
export const ColItemFormLayout = ({children}) => (
    <div className={"flex flex-col space-y-4 py-5 px-10 bg-gray-800 rounded-md md:max-w-md w-full"}>
        {children}
    </div>
)
