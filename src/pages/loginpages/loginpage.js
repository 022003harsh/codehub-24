 import { useState } from "react";
 import { useForm } from "react-hook-form";
import logo from './companylogo.svg'
 
 function Login(){
const { register, handleSubmit, errors } = useForm();
const [userInfo, setUserInfo] = useState();
const onSubmit = (data) => {
    setUserInfo(data);
    console.log(data);
};
console.log(errors);
    return(
        <div className="flex h-screen ">
        <div class="flex items-center w-2/3 bg-cover background" >
              <div class="p-20 ">
        <img className="w-[470px] my-8 ml-[73px]" src={logo} />
                  <div class="text-white">
                      <h2 class="font-semibold text-2xl text-center">
                          A pioneering tech company driven by innovation, excellence, and a passion for creating
                          cutting-edge solutions
                      </h2>
                  </div>
              </div>
          </div>
        <div class="w-5/12 bg-black px-16 py-12">
              <div class="pb-5 px-10 pt-16">
                  <h4 class="text-2xl text-gray-300 font-semibold">Login</h4>
              </div>
              <div class="w-24 ml-10 h-2 border-b-4 mb-10 border-purple-400"></div>
  <pre>{JSON.stringify(userInfo, undefined, 2)}</pre>
              <form onSubmit={handleSubmit(onSubmit)} class="w-full px-10">
                  <div class="pb-5">
                      <div class="mb-4 flex bg-white rounded-lg">
                          <i class='bx bx-user text-2xl py-2 px-2 text-gray-800'></i>
                      
                          <input type="text" id="username" name="username" placeholder="Enter ID" ref={register({required:"Username is required"})}
                              class="w-full rounded-lg p-2  " />
                          </div>
                          <p>{errors.username?.message}</p>
                              <div class="mb-4 bg-white flex rounded-lg">
                                  <i class='bx bx-lock-alt text-2xl text-gray-800 py-2 px-2 ' ></i>
                          <input type="password" id="password" name="password" placeholder="Password" ref={register({required:"Password is required"})}
                              class="w-full rounded-lg  p-2 " />
          
                          </div>
                          <p>{errors.password?.message}</p>

                  </div>
                  <div class="items-center text-center pt-4">
                      <button type="submit"
                          class="w-32  text-white rounded-lg p-2  font-bold bg-gradient-to-r from-blue-600 via-blue-700  to-blue-900 hover:bg-purple-800">Enter</button>
                  </div>
              </form>
          </div>
          </div>
    );
  }

  export default Login;