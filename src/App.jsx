import { useFormik } from 'formik';
import './App.css';
import { loginSchema } from './validation';
import Password from 'antd/es/input/Password';

function App() {
  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      userName: '',
      userEmail: '',
      password: ''
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      console.log(values); // Handle form submission here
    }
  });

  return (
    <>
      <div className='bg w-full h-screen flex justify-center items-center'>
        <form
          className='w-[500px] shadoww rounded-xl h-[400px] bg-transparent backdrop-blur-[15px] flex flex-col items-center space-y-[15px]'
          onSubmit={handleSubmit}
        >
          <h1 className='text-white font-bold text-[30px] mt-[30px]'>Login</h1>
          <label>
            <input
              type='text'
              placeholder='Enter Name'
              className='border border-white p-[10px] placeholder:text-white w-[300px] mt-[40px] bg-transparent rounded-[5px]'
              name='userName'
              value={values.userName}
              onChange={handleChange}
            />
          </label>
          <label>
            <input
              type='email'
              placeholder='Enter Email'
              className='border border-white p-[10px] placeholder:text-white w-[300px] bg-transparent rounded-[5px]'
              name='userEmail'
              value={values.userEmail}
              onChange={handleChange}
            />
          </label>
          <label>
            <input
              type='password'
              placeholder='Password'
              className='border border-white p-[10px] placeholder:text-white w-[300px] bg-transparent rounded-[5px]'
              name='password'
              value={values.password}
              onChange={handleChange}
            />
          </label>
          <button type='submit' className='text-white p-[10px] w-[30%] rounded-[5px] border-white border mt-[50px]'>
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default App; 