import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/LogoHomeBotanic.png';
import { useAppDispatch } from '../../hooks/redux';
import { loginThunk } from '../../features/registration/registrationSlice';
import { FormEvent } from 'react';

function Login() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    function loginUser(e: FormEvent) {
        e.preventDefault();
        const user = {
            name: (document.querySelector("[name='name']") as HTMLInputElement)?.value,
            email: (document.querySelector("[name='email']") as HTMLInputElement)?.value,
            password: (document.querySelector('[name="password"]') as HTMLInputElement)?.value,
        };
        dispatch(loginThunk(user));
        navigate('/');
    }
    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img className="mx-auto h-10 w-auto" src={logo} alt="Your Company" />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-midnight-ocean">
                    Sign in to your account
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
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                Password
                            </label>
                            <div className="text-sm">
                                <a href="#" className="font-semibold text-midnight-ocean hover:text-slate-gray">
                                    Forgot password?
                                </a>
                            </div>
                        </div>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="block w-full rounded-md border-0 px-3 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none  sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            onClick={loginUser}
                            className="flex w-full justify-center rounded-md bg-midnight-ocean px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-gray focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            Sign in
                        </button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                    Not a member?
                    <Link to="/register" className="font-semibold leading-6 text-midnight-ocean hover:text-slate-gray">
                        {' '}
                        Register
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Login;
