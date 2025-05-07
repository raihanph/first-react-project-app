import { Link } from "react-router";

const Login = () => {
    return (
        <div className="bg-green-900 flex items-center justify-center h-[90vh] px-4">
            <div className="bg-white max-w-sm p-8">
                <h2 className=" text-2xl text-green-800 font-bold text-center mb-4"> Login</h2>
            
            <form className="space-y-4 text-gray-400">
                <input type="email"
                    className="w-full border py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-500"    
                    name=""
                    id=""
                    placeholder="Enter Your E-mail" />

                    <input type="password"
                    className="w-full border py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-500" 
                    name=""
                    id=""
                    placeholder="Enter Your password" />
                    
                    <p className="text-right hover:text-green-400 cursor-pointer hover:underline text-black">
                        Forgot Password
                    </p>
                    <button type="submit"
                        className="w-full bg-green-700 py-2 rounded hover:bg-green-800 cursor-pointer mb-3 text-white"
                    >
                        Login
                    </button>
                </form>

                {/* Divider Here */}
                <div className="flex items-center my-6">
                    <div className="flex-grow h-px bg-gray-700"></div>
                    <span className="text-gray-500 text-sm mx-6"> OR</span>
                    <div className="flex-grow h-px bg-gray-700"></div>
                </div>
                <div className="flex flex-col mt-3 space-y-3">
                    <button className="bg-red-600 py-2 rounded hover:bg-red-700 cursor-pointer text-white">
                        Login with Google
                    </button>
                        
                    <button className="bg-slate-500 py-2 cursor-pointer hover:bg-slate-600 rounded text-white">
                        Login with GitHub
                    </button>
                </div>
                <div className="mt-4">
                    <p className="text-sm text-center">
                        Don't have an account? <Link to={'/Register'} className="text-green-700 font-semibold hover:underline"> Register Here</Link>
                    </p>
                </div>
            </div>
        </div>
  )
};

export default Login;
