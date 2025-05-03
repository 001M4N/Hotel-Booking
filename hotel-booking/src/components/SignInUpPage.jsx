import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import RememberMeButton from "./RememberMeButton";
import TermsAndPolicyCheckBox from "./TermsAndPolicyCheckBox";
import { Link } from "react-router-dom";

export default function SignInUpPage({ isSignin = true }) {
  const form = isSignin ? (
    <>
      <EmailInput />
      <PasswordInput />
      <button className="btn mt-5 mb-2">Login</button>
      <RememberMeButton />
      <div className="w-full flex justify-center items-center">
        <Link to={"/SignUp"}>Create an Account</Link>
      </div>
    </>
  ) : (
    <>
      <EmailInput />
      <PasswordInput />
      <PasswordInput placeholderText="Repeat Password" />
      <TermsAndPolicyCheckBox />
      <button className="btn mt-5 mb-2">Sign In</button>
      <div className="w-full flex justify-center items-center">
        <Link to={"/SignIn"}>Already Have an Account?</Link>
      </div>
    </>
  );

  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div
        className="w-xs sm:w-sm flex flex-col bg-slate-700 justify-center
                   p-5 rounded-xl shadow-lg/80 shadow-white ring-1"
      >
        {form}
      </div>
    </div>
  );
}
