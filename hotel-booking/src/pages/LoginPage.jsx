import EmailInput from "../components/EmailInput";
import PasswordInput from "../components/PaswordInput";
import RememberMeButton from "../components/RememberMeButton";

export default function LoginPage() {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="flex flex-col bg-slate-600 justify-center p-5 rounded-xl w-1/2">
        <EmailInput />
        <PasswordInput />
        <RememberMeButton />
        <div className="w-full flex justify-center items-center">
          <a className="link text-sm mt-5">Create Account</a>
        </div>
      </div>
    </div>
  );
}
