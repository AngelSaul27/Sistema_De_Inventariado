import ApplicationLogo from '@/Components/Common/ApplicationLogo.jsx';
import {Link} from '@inertiajs/react';

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
            <div className="bgLogin"><div className="bgLoginOverlay"></div></div>

            <div className="z-[100]">
                <Link href="./">
                    <ApplicationLogo className="w-20 h-20 fill-current text-gray-500"/>
                </Link>
            </div>

            <div className="z-[100] max-w-[350px] w-full mt-6 py-6 px-6 bg-gray-900 shadow-lg rounded-lg">
                <div>
                    {children}
                </div>
            </div>
        </div>
    );
}
