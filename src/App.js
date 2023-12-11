import "./App.css";
import { useFormik,Formik,Form,Field } from "formik";
import  * as Yup from 'yup' 


const initialValues = {
  name: "",
  email: "",
  password: "",
  cpassword: "",
};

function App() {
  const signupValidation = Yup.object({
    name: Yup.string().min(3).required("Please enter a valid name"),
    email: Yup.string().email("Please enter a valid email").required("Please enter an email"),
    password: Yup.string().min(5).required("Enter a valid password"),
    cpassword: Yup.string().oneOf([Yup.ref("password")], "Passwords do not match")
  });
  
  const onSubmit = (values) => {

    console.log("Form submitted with values:", values);
  };
  // const { values, handleBlur, handleChange, handleSubmit,errors } = useFormik({
  //   initialValues: initialValues,
  //   validationSchema: signupValidation,
  //   onSubmit: (values) => {
  //     console.log(values);
  //   },
  // });
  
  return (
    <div className="App">
      <h1>Formik And Yup</h1>
 <Formik
 initialValues={initialValues}
 validationSchema={signupValidation}
 onSubmit={onSubmit}
 >
   {({errors}) =>(


      <Form >
        <label htmlFor="name">Name</label>
        <br />
        <Field type="name" name="name"></Field>
        <br />
        {errors.name && <small>{errors.name}</small>}
        <br />
        <label htmlFor="email">Email</label>
        <br />
        <Field type="email" name="email"></Field>
        <br />
        {errors.email && <small>{errors.email}</small>}
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <Field type="password" name="password"></Field>
        <br />
        <label htmlFor="cpassword">Confirm Password</label>

        <br />
        {errors.password && <small>{errors.password}</small>}
        <br />
        <Field type="cpassword" name="cpassword"></Field>
        <br />
        {errors.cpassword && <small>{errors.cpassword}</small>}
        <br />
        <button type="submit">submit</button>
      </Form>
        )}
      </Formik>
    </div>
  );
}

export default App;
