import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import RememberMeButton from "./RememberMeButton";

export default function LoginSignInForm({ isLogin = true }) {
  const form = isLogin ? (
    <>
      <EmailInput />
      <PasswordInput />
      <button className="btn mt-5 mb-2">Login</button>
      <RememberMeButton />
      <div className="w-full flex justify-center items-center">
        <a className="link text-sm mt-5">Create an Account</a>
      </div>
    </>
  ) : (
    <>
      <EmailInput />
      <PasswordInput />
      <PasswordInput placeholderText="Repeat Password" />
      <button className="btn mt-5 mb-2">Sign In</button>
      <div className="w-full flex justify-center items-center">
        <a className="link text-sm mt-5">Already Have an Account?</a>
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
