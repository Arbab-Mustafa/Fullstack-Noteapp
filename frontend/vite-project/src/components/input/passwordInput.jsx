import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
const PasswordInput = ({ value, onChange, placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex item-center bg-transparent border-[1.5px] px-5 rounded mb-3">
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder || "Password"}
        type={showPassword ? "text" : "password"}
        className="w-full  text-sm bg-transparent outline-none py-3 mr-3"
      ></input>

      {showPassword ? (
        <FaRegEye
          size={22}
          onClick={togglePassword}
          className="cursor-pointer text-primary mt-3"
        />
      ) : (
        <FaRegEyeSlash
          size={22}
          className="text-slate-400 cursor-pointer mt-3"
          onClick={() => togglePassword()}
        />
      )}
    </div>
  );
};

export default PasswordInput;
