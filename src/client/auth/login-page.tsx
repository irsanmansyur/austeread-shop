import useData from "@client/commons/data";
import { UserInfoAtom } from "@client/commons/data/layoutAtom";
import { AppInterface } from "@client/commons/interface/app";
import ButtonCustom from "@client/components/form/button";
import { InputCustom } from "@client/components/form/InputGroup";
import { useState } from "react";
import GoogleLogin, { GoogleLoginResponse, GoogleLoginResponseOffline } from "react-google-login";
import ReCAPTCHA from "react-google-recaptcha";
import { Link } from "react-router-dom";
import { useSetRecoilState } from "recoil";

export default function LoginPage() {
  const setUser = useSetRecoilState(UserInfoAtom);
  const { post: postLoginForm, loading: loadingLogin, data: dataLoginRespon } = useData<AppInterface.User & { message?: string }>();
  const [errorMessage, setErrorMessage] = useState<string | undefined>();
  const [data, setData] = useState<{ register_method?: number; email?: string; password?: string }>();
  const handleLogin = async (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    const res = await fetch("/api/v1/auth/google", {
      method: "POST",
      body: JSON.stringify({
        token: response.code,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
  };
  const loginForm = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(undefined);

    postLoginForm("auth", data)
      .then((res) => {
        if (res.data.message && res.data.message.includes("Incorrect")) setErrorMessage(res.data.message);
        setUser(res.data);
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
        </Link>
        <h5 className="Garnett-medium font-GarnettMedium text-xl">Sign in into your account</h5>
      </div>
      <div className="body py-10">
        <p>
          New user?
          <Link to="/register" className="text-primary">
            Create an account
          </Link>
        </p>
        {errorMessage && <div className="flex justify-center items-center p-2 sm:p-4 text-white bg-red-500 rounded my-3">{errorMessage}</div>}
        <form action="" onSubmit={loginForm} className="py-5">
          <InputCustom onChange={(e) => setData({ ...data, email: e.target.value })} label="Email" placeholder="Enter your email" className="bg-transparent" />
          <InputCustom onChange={(e) => setData({ ...data, password: e.target.value })} label="Password" placeholder="Enter your password" type={"password"} />
          <div>
            <ReCAPTCHA sitekey={"process.env.REACT_APP_SITE_KEY"} />
          </div>
          <div className="py-3">
            <ButtonCustom disabled={loadingLogin} type="submit" className="w-full" onClick={(e) => setData({ ...data, register_method: 0 })}>
              Submit
            </ButtonCustom>
          </div>
          <div className="text-center PublicSans-regular gap-2 relative flex items-center" style={{ marginTop: 20, marginBottom: 20, fontSize: 14, fontWeight: 600 }}>
            <div className="bg-black rounded w-full h-[2px]"></div>
            <span className="whitespace-nowrap">Or Sign in With</span>
            <div className="bg-black rounded w-full h-[2px]"></div>
          </div>
          <GoogleLogin
            disabled={loadingLogin}
            className="w-full flex justify-center"
            clientId={"process.env.REACT_APP_GOOGLE_CLIENT_ID"}
            buttonText="Log in with Google"
            onSuccess={handleLogin}
            onFailure={handleLogin}
            cookiePolicy={"single_host_origin"}
          />
        </form>
      </div>
    </div>
  );
}
