import axios from 'axios'
import Context from '../contexts/Context'
import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ENDPOINT } from '../config/constans'

const Profile = () => {
  const navigate = useNavigate()
  const { getDeveloper, setDeveloper } = useContext(Context)

  const getDeveloperData = () => {
    const token = window.sessionStorage.getItem('token');
    axios.get(ENDPOINT.users, { headers: { Authorization: `Bearer ${token}` } })
      .then(({ data }) => {
        const { profiles, user } = data;
        const { email } = user;
        if (profiles.length > 0) {
          const { rol, lenguage } = profiles[0];
          setDeveloper({ email, rol, lenguage });
        } else {
          console.error("No profile found for the user.");
          setDeveloper({ email, rol: "", lenguage: "" });
        }
      })
      .catch(({ response: { data } }) => {
        console.error(data);
        window.sessionStorage.removeItem('token');
        setDeveloper(null);
        navigate('/');
      });
  }

  useEffect(getDeveloperData, [])

  return (
    <div className='py-5'>
      <h1>
        Bienvenido <span className='fw-bold'>{getDeveloper?.email}</span>
      </h1>
      <h3>
        {getDeveloper?.rol} en {getDeveloper?.lenguage}
      </h3>
    </div>
  )
}

export default Profile


