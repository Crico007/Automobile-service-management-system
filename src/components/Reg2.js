import { createTheme } from '@mui/material/styles';
import axios from 'axios'; // Import Axios

const defaultTheme = createTheme();

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      firstName: data.get('firstName'),
      role: data.get('role'),
      email: data.get('email'),
      password: data.get('password'),
    });

    // Make POST request using Axios
    axios.post("http://localhost:8081/insert", {
      firstName: data.get('firstName'),
      role: data.get('role'),
      email: data.get('email'),
      password: data.get('password'),
    }).then(response => {
      console.log(response.data);
    }).catch(error => {
      console.error('Error:', error);
    });
  }; 

  return (
    <div>
      {/* Your form JSX here */}
      <form onSubmit={handleSubmit}>
        {/* Input fields for first name, role, email, password */}
      </form>
    </div>
  );
}
