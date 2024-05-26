import Navbar from "../../components/Navbar/Navbar";
import { useState } from "react";
import PasswordInput from "../../components/input/passwordInput";
import { Link } from "react-router-dom";
import { validateEmail } from "../../utils/helper";
const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  //
  const handleSignup = async (e) => {
    e.preventDefault();

    if (!name) {
      setError("Name is required");
      return;
    }

    if (!validateEmail(email)) {
      setError("Invalid Email");
      return;
    }
    if (!password) {
      setError("Password is required");
      return;
    }

    setError("");
    // Signup API call
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center mt-20">
        <div className="w-96 rounded border bg-white px-7 py-10">
          <form onSubmit={handleSignup}>
            <h4 className="text-2xl mb-7"> Sign Up</h4>
            <input
              type="text"
              placeholder="Name"
              className="input-box"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Email"
              className="input-box"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <PasswordInput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p className="text-red-500 text-xs pb-1">{error}</p>}

            <button type="submit" className="btn-primary">
              Create Account
            </button>
            <p className="text-sm text-center mt-4">
              {" "}
              Already have a account ?{" "}
              <Link to="/login" className="font-medium text-primary underline">
                LogIn{" "}
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
