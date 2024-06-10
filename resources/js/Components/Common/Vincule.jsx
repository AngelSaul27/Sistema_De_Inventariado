import {Link} from '@inertiajs/react';

const Vincule = ({ active = false, className = '', children, ...props }) => {
    return (
        <Link
            {...props}
            className={
                'text-sm transition duration-150 ease-in-out text-gray-300 ' +
                className
            }
        >
            {children}
        </Link>
    );
}
export default Vincule;
