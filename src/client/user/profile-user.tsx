import { BsPencilFill } from "react-icons/bs/index";
import ChangePassword from "./change-password";
export default function ProfileUser() {
  return (
    <>
      <div className="profile flex flex-col gap-3 items-center">
        <div className="relative">
          <img src="" className="h-[100px] w-[100px] rounded-full bg-white backdrop-blur border" />
          <label
            htmlFor="changeImage"
            className="absolute right-[-7px] top-[60px] cursor-pointer flex w-[35px] h-[35px] items-center justify-center rounded-full bg-black text-white"
          >
            <BsPencilFill />
          </label>
          <input type="file" id="changeImage" className="hidden" />
        </div>
        <div>
          You are logged in as <span className="font-bold"> Ranti</span> <br />
        </div>
        <button className="text-primary-others">Sign out</button>
      </div>
      <div className="cradential">
        <h3 className="text-center font-bold pb-4">Cradentials</h3>
        <div className="space-y-4">
          <div>
            <p className="text-xs">Email</p>
            <span className="text-sm">ranti@gmail.com</span>
          </div>
          <div>
            <p className="text-xs">Password</p>
            <ChangePassword />
          </div>
        </div>
      </div>
    </>
  );
}
