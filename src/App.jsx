import { useFormik } from 'formik';
import './App.css';
import { loginSchema } from './validation';
import toast from 'react-hot-toast';

function App() {
  const {
    values,
    handleChange,
    handleSubmit,
    handleBlur,
    errors,
    touched,
  } = useFormik({
    initialValues: {
      userName: '',
      userEmail: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: (value, actions) => {
      console.log(value);
      setTimeout(() => actions.resetForm(), 800)
      toast.success("You are logged in")
    },
  });

  return (
    <>
      <div className="bg w-full h-screen flex justify-center items-center">
        <form autoComplete='off'
          className="w-[500px] shadoww rounded-xl p-10 bg-transparent backdrop-blur-[15px] flex flex-col items-center space-y-[18px]"
          onSubmit={handleSubmit}
        >
          <h1 className="text-white font-bold text-[30px]">Login</h1>

          <label>
            <input
              type="text"
              placeholder="Enter Name"
              className={`${errors.userName && touched.userName
                ? 'placeholder:text-red-500 border border-red-500'
                : 'text-white border border-white'
                } p-[10px] placeholder:text-white w-[300px] outline-none mt-[30px] bg-transparent rounded-[5px]`}
              name="userName"
              value={values.userName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.userName && touched.userName && (
              <p className="text-red-500">{errors.userName}</p>
            )}
          </label>

          {/* Email Input */}
          <label>
            <input
              type="email"
              placeholder="Enter Email"
              className={`${errors.userEmail && touched.userEmail
                ? 'placeholder:text-red-500 border border-red-500'
                : 'text-white border border-white'
                } p-[10px] placeholder:text-white w-[300px] outline-none bg-transparent rounded-[5px] text-white`}
              name="userEmail"
              value={values.userEmail}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.userEmail && touched.userEmail && (
              <p className="text-red-500">{errors.userEmail}</p>
            )}
          </label>

          <label>
            <input
              type="password"
              placeholder="Password"
              className={`${errors.password && touched.password
                ? 'placeholder:text-red-500 border border-red-500'
                : 'text-white border border-white'
                } p-[10px] placeholder:text-white w-[300px] outline-none bg-transparent rounded-[5px] text-white`}
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && touched.password && (
              <p className="text-red-500">{errors.password}</p>
            )}
          </label>

          <button
            type="submit"
            className="text-white p-[10px] w-[30%] rounded-[5px] border-white border mt-[50px]"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default App;

