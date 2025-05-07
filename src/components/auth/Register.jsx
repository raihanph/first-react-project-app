import { Link } from "react-router";

const Register = () => {
    return (
       <div className="bg-green-900 flex items-center justify-center h-[110vh] px-4">
            <div className="bg-white max-w-lg p-8">
                <h2 className=" text-2xl text-green-800 font-bold text-center mb-4"> Register</h2>
            
                <form className="space-y-4 text-gray-400">
                    
                <input type="text"
                    className="w-full border py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-500"    
                    name=""
                    id=""
                    placeholder=" Full Name :" />
                    
                <input type="email"
                    className="w-full border py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-500"    
                    name=""
                    id=""
                    placeholder="E-mail" />

                    <input type="password"
                    className="w-full border py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-500" 
                    name=""
                    id=""
                    placeholder="Password" />
                    
                    <input type="password"
                    className="w-full border py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-500" 
                    name=""
                    id=""
                    placeholder="Confirm Password" />
                    
                    <div className="text-black flex items-center justify-between">
                        <p>
                            <input type="checkbox" name="" id="checkbox" />

                            <label htmlFor="checkbox"> Accept Tream & <Link className="text-green-500 font-semibold"> Codition</Link></label>
                        </p>
                        <p className="text-right hover:text-green-400 cursor-pointer hover:underline">
                        Forgot Password
                       </p>
                    </div>

                    <button type="submit"
                        className="w-full text-white bg-green-700 py-2 rounded hover:bg-green-800 cursor-pointer mb-3"
                    >
                      Register Now
                    </button>
                </form>

                {/* Divider Here */}
                <div className="flex items-center my-6">
                    <div className="flex-grow h-px bg-gray-700"></div>
                    <span className="text-gray-500 text-sm mx-6"> OR</span>
                    <div className="flex-grow h-px bg-gray-700"></div>
                </div>
                <div className="flex flex-col mt-3 space-y-3 text-white">
                    <button className="bg-red-600 py-2 rounded hover:bg-red-700 cursor-pointer">
                        Register with Google
                    </button>
                        
                    <button className="bg-slate-500 py-2 cursor-pointer hover:bg-slate-600 rounded">
                        Register with GitHub
                    </button>
                </div>
                <div className="mt-4">
                    <p className="text-sm text-center">
                        Already have an account? <Link to={'/login'} className="text-green-700 font-semibold hover:underline"> Login Here</Link>
                    </p>
                </div>
            </div>
        </div>
  )
};

export default Register;
