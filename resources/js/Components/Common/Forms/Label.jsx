export default function Label({ value, className = '', required = false, children, ...props }) {
    return (
        <label {...props} className={`block text-sm text-gray-300 ` + className}>
            {value ? value : children}
            {required ? <span className={"text-red-900"}> *</span> : ''}
        </label>
    );
}
