import Navigation from "@/Layouts/Navigation/Navigation.jsx";
import HeaderNavigation from "@/Layouts/Navigation/HeaderNavigation.jsx";
import NavigationUser from "@/Layouts/Navigation/NavigationUser.jsx";
import HeaderNavigationUser from "@/Layouts/Navigation/HeaderNavigationUser.jsx";
import {Head} from "@inertiajs/react";

const AuthenticatedLayout = ({ user, children, title}) => (
    <>
        <Head title={title ? title : 'Page'}/>
        <div className="font-sans text-gray-700 dark:text-gray-300 antialiased">
            <header className="relative">
                {user.role === "ADMIN" ? <Navigation/> : <NavigationUser/>}
                {user.role === "ADMIN" ? <HeaderNavigation/> : <HeaderNavigationUser/>}
            </header>

            <main className="min-h-screen bg-gray-100 dark:bg-gray-900 pb-10">
                <div className="flex flex-col px-8 py-8 gap-4">
                    {children}
                </div>
            </main>
        </div>
    </>
)
export default AuthenticatedLayout;
