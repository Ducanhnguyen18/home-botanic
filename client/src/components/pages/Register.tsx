import { FormEvent } from 'react';
import logo from '../../assets/LogoHomeBotanic.png';
import { useAppDispatch } from '../../hooks/redux';
import { useNavigate } from 'react-router-dom';
import { registrationThunk } from '../../features/registration/registrationSlice';

function Register() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    function createUser(e: FormEvent) {
        e.preventDefault();
        console.log(e.target);
        const newUser = {
            name: (document.querySelector("[name='name']") as HTMLInputElement)?.value,
            email: (document.querySelector("[name='email']") as HTMLInputElement)?.value,
            password: (document.querySelector("[name='password']") as HTMLInputElement)?.value,
        };
        console.log(newUser);
        dispatch(registrationThunk(newUser));
        navigate('/');
    }

    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img className="mx-auto h-10 w-auto" src={logo} alt="Your Company" />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-midnight-ocean">
                    Присоединяйтесь!
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action="#" method="POST">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium leading-6 text-midnight-ocean">
                            Name
                        </label>
                        <div className="mt-2">
                            <input
                                id="name"
                                name="name"
                                type="name"
                                autoComplete="name"
                                required
                                className="block w-full rounded-md border-0 px-3 py-2  text-gray-900  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none  sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-midnight-ocean">
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="block w-full rounded-md border-0 px-3 py-2  text-gray-900  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none  sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium leading-6 text-midnight-ocean">
                                Password
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="block w-full rounded-md border-0 px-3 py-2 text-midnight-ocean shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none  sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-between">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium leading-6 text-midnight-ocean">
                                Confirm Password
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                                id="cpassword"
                                name="cpassword"
                                type="cpassword"
                                autoComplete="current-password"
                                required
                                className="block w-full rounded-md border-0 px-3 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none  sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <form className="max-w-sm mx-auto">
                        <select
                            id="underline_select"
                            className="block py-2.5 px-0 w-full text-sm text-midnight-ocean bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                            <option selected>Выберите тип пользователя</option>
                            <option value="">Эксперт</option>
                            <option value="">Любитель</option>
                        </select>
                    </form>

                    <div>
                        <button
                            type="submit"
                            onClick={createUser}
                            className="flex w-full justify-center rounded-md bg-midnight-ocean px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-gray focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            Создать новый аккаунт
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;
