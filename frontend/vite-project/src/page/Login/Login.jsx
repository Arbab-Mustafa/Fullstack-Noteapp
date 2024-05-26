import { Link } from "react-router-dom";
import { useState } from "react"; // Add this line
import Navbar from "../../components/Navbar/Navbar";
import PasswordInput from "../../components/input/passwordInput";
import { validateEmail } from "../../utils/helper";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("Invalid Email");
      return;
    }
    setError("");

    if (!password) {
      setError("Password is required");
      return;
    }
    // login API call
  };
  return (
    <>
      <Navbar />

      <div className="flex items-center justify-center mt-20">
        <div className="w-96 rounded border bg-white px-7 py-10">
          <form onSubmit={handleLogin}>
            <h4 className="text-2xl mb-7"> Login</h4>
            <input
              type="text"
              placeholder="Email"
              className="input-box"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <PasswordInput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p className="text-red-500 text-xs pb-1">{error}</p>}
            <button type="submit" className="btn-primary">
              Login
            </button>
            <p className="text-sm text-center mt-4">
              {" "}
              Not Register yet ?{" "}
              <Link to="/signup" className="font-medium text-primary underline">
                Create an Account{" "}
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
