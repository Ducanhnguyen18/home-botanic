import { Link } from 'react-router-dom';
import logo from '../../../../assets/LogoHomeBotanic.png';
import { useAppSelector } from '../../../../hooks/redux';
import { RootState } from '../../../../store/store';

function Navigation() {
    const login = useAppSelector((state: RootState) => state.registration.login);
    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={logo} className="h-8" alt="Flowbite Logo" />
                    <span className="self-center text-xl font-semibold whitespace-nowrap text-midnight-ocean dark:text-white">
                        HomeBotanic
                    </span>
                </div>
                <div
                    className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                    id="navbar-user">
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <Link
                                to="/"
                                className="block py-2 px-3 text-midnight-ocean md:hover:text-green-freshness md:p-0 md:dark:text-blue-500"
                                aria-current="page">
                                Главная Страница
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/plants"
                                className="block py-2 px-3 text-midnight-ocean rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-freshness md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                Растение
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/services"
                                className="block py-2 px-3 text-midnight-ocean rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-freshness md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                Сервисы
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/questions"
                                className="block py-2 px-3 text-midnight-ocean rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-freshness md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                Вопросы
                            </Link>
                        </li>
                        {login ? (
                            <li>
                                <Link
                                    to="/logout"
                                    className="block py-2 px-3 text-midnight-ocean rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-freshness md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                    Выйти
                                </Link>
                            </li>
                        ) : (
                            <>
                                {' '}
                                <li>
                                    <Link
                                        to="/register"
                                        className="block py-2 px-3 text-midnight-ocean rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-freshness md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                        Регистрация
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/login"
                                        className="block py-2 px-3 text-midnight-ocean rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-freshness md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                        Войти
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">{login}</div>
            </div>
        </nav>
    );
}

export default Navigation;
