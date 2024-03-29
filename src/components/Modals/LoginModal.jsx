import { useDispatch } from "react-redux";
import { toggleLoginWidget,userLogin } from "../../features/authSlice";
import { useState } from "react";

import { signInWithGooglePopup } from "../../utils/firebase";

const LoginModal = () => {
    const dispatch = useDispatch();
    const [loginFormInput,setLoginFormInput] = useState({email:'',password:''})
    const handleLoginInput = (e) => {
        setLoginFormInput({...loginFormInput,[e.target.name]:e.target.value})
    }
    const handleSubmitLogin = (event) => {
        event.preventDefault()
        dispatch(userLogin(loginFormInput))
    }
    const signInWithGoogle = async() =>{
        const response = await signInWithGooglePopup();
        let currUser = JSON.stringify(response)
        dispatch(
              userLogin({
                uid: currUser.user.uid,
                displayName: currUser.user.displayName,
                email: currUser.user.email,
              })
            );
        
    }
    return <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-xl font-semibold text-gray-900 ">
                    Sign in to our platform
                </h3>
                  <button type="button" onClick={()=>dispatch(toggleLoginWidget())} className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center " data-modal-hide="authentication-modal">
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span className="sr-only">Close modal</span>
                </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div className="p-4 md:p-5">
                
                
                <button  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center " onClick={signInWithGoogle}>Sign In with Google</button>
            </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
}

export default LoginModal;