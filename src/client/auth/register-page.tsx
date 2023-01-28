import useData from "@client/commons/data";
import { AppInterface } from "@client/commons/interface/app";
import ButtonCustom from "@client/components/form/button";
import { InputCustom } from "@client/components/form/InputGroup";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Link } from "react-router-dom";

export default function RegisterPage() {
  const { post: postLoginForm, loading: loadingLogin, data: dataLoginRespon } = useData<{ email?: string; fullname?: string; password?: string; message?: string }>();
  const [errorMessage, setErrorMessage] = useState<string | undefined>();
  const [data, setData] = useState<{ email?: string; fullname?: string; password?: string; message?: string }>();

  const loginForm = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(undefined);
    console.log(data);

    postLoginForm("auth", data)
      .then((res) => {
        if (res.data.message && res.data.message.includes("Incorrect")) setErrorMessage(res.data.message);
      })
      .catch((e) => {
        if (e.response.data.message) setErrorMessage(e.response.data.message);
      });
  };

  return (
    <div className="my-4 w-full sm:max-w-md px-3">
      <div className="header flex items-center flex-col gap-3">
        <Link to="/" className="flex items-center mb-10 text-primary">
          <img className="" src="/static/icons/logo.austeread.gif" width="60px" />
          <span className="font-GarnettLight text-[29px]">auste</span>
          <span className="font-GarnettMedium text-[29px]">read</span>
        </Link>
        <h5 className="Garnett-medium font-GarnettMedium text-xl">Sign up an account </h5>
      </div>
      <div className="body py-10">
        <p>
          Already have an account ?{" "}
          <Link to="/login" className="text-primary">
            Sign in
          </Link>
        </p>
        {errorMessage && <div className="flex justify-center items-center p-2 sm:p-4 text-white bg-red-500 rounded my-3">{errorMessage}</div>}
        <form action="" onSubmit={loginForm} className="py-5">
          <InputCustom onChange={(e) => setData({ ...data, fullname: e.target.value })} label="Fullname" placeholder="Enter your Fullname" />
          <InputCustom onChange={(e) => setData({ ...data, email: e.target.value })} label="Email" type={"email"} placeholder="Enter your email" className="bg-transparent" />
          <InputCustom onChange={(e) => setData({ ...data, password: e.target.value })} label="Password" placeholder="Enter your password" type={"password"} />
          <div>
            <ReCAPTCHA sitekey={"process.env.REACT_APP_SITE_KEY"} />
          </div>
          <div className="py-3">
            <ButtonCustom disabled={loadingLogin} type="submit" className="w-full">
              Register
            </ButtonCustom>
          </div>
        </form>
      </div>
    </div>
  );
}
