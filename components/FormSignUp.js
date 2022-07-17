import { AiOutlineUser } from "react-icons/ai";
import Script from 'next/script'
import ButtonBerhasilDaftar from "../components/ButtonBerhasilDaftar"
import ButtonGagalDaftar from "../components/ButtonGagalDaftar"
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineLock } from 'react-icons/ai';

export default function FormSignUp() {
  
    function validatePassword(){
        if(password.value != confirm_password.value) {
          confirm_password.setCustomValidity("Passwords Don't Match");
        } else {
          confirm_password.setCustomValidity('');
        }
      }
      
      function validateEmail(email) { //Validates the email address
          var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
          return emailRegex.test(email);
      }
      
      function validatePhone(phone) { //Validates the phone number
           
           var phoneRegex = /(\+62 ((\d{3}([ -]\d{3,})([- ]\d{4,})?)|(\d+)))|(\(\d+\) \d+)|\d{3}( \d+)+|(\d+[ -]\d+)|\d+/gm; // Change this regex based on requirement
           return phoneRegex.test(phone);
      }
            
      function doValidate() {
          if (validateEmail(verif.value) || validatePhone(verif.value))
          {
            verif.setCustomValidity('');
         } else {
           verif.setCustomValidity("Invalid Email And Phone Number");
         }
      }
      
    // get functions to build form with useForm() hook
    const registerUser = async event => {
        event.PreventDefault()

        console.log(event.target)

        const res = await fetch('api/auth/login', {
            body: JSON.stringify({
                username: event.target.name.value,
                password: event.target.password.value
            }),
            headers: {
                'content-type': 'application/json'
            },
            method: 'POST'
        });
    }

    return (
        <>
            <form onSubmit={registerUser}>
                <div className="mt-10">
                    <div className="border-b border-gray-400">
                        <div className="flex pt-3 pb-1">
                            <AiOutlineUser className="w-6 h-6 text-gray-700" />
                            <input type="username" name="username" id="username" placeholder="username" className="text-base pl-4 w-full border-none focus:border-none focus:ring-0 focus:outline-none" required/>
                        </div>
                    </div>
                    <div className="border-b border-gray-400">
                        <div className='flex pt-6 pb-1'>
                            <AiOutlineMail className='w-6 h-6 text-gray-700' />
                        <input type="verification" name="verification" id="verification" placeholder="email atau nomer HP" className="text-base pl-4 w-full md:w-64 border-none focus:ring-0 focus:outline-none" required/>
                        </div>
                    </div>
            </div>
                <div className="border-b border-gray-400">
                    <div className='flex pt-6 pb-1'>
                        <AiOutlineLock className='w-6 h-6 text-gray-500 '/>
                    <input type="password" name="password" id="password" placeholder="password" className="text-base pl-4 w-full border-none focus:border-none focus:ring-0 focus:outline-none" required/>
                    </div>
                </div>
                <div className="border-b border-gray-400">
                    <div className='flex pt-6 pb-1'>
                        <AiOutlineLock className='w-6 h-6 text-gray-500 '/>
                        <input type="password" name="new-password" id="re-password" placeholder="password" className="text-base pl-4 w-full border-none focus:border-none focus:ring-0 focus:outline-none" required/>
                    </div>
                </div>
                <div className="text-center mt-9">
                   <ButtonBerhasilDaftar />
                </div>
        </form>

        <Script src="/api/auth.js" />
        <Script src="https://cdn.jsdelivr.net/npm/sweetalert2@11" />
        <Script src="/api/register/register.js" />
      </>
    )
}