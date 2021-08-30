import Metadata from "../../../metadata/Metadata";
import Input from "../../Input";

const Login = () => {
  return (
    <>
      <Metadata
        title="Twitter"
        description="The best place to share and meet new friends"
        url=""
      />
      <h2>Login</h2>
      <form class="form">
        <Input content="First Name" type="text" name="firstName" />
        <Input content="Last Name" type="text" name="lastName" />
      </form>
    </>
  );
};
export default Login;
