import { ContextWrapper } from "./Context";
import { RecoilRoot } from "recoil";
import axios from "axios";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://149.102.136.93:3023/api/";
export const App = ({ children }: any) => {
  return (
    <RecoilRoot>
      <ContextWrapper>{children}</ContextWrapper>
    </RecoilRoot>
  );
};

export default App;
