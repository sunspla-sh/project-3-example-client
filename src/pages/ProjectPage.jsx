import { useEffect } from 'react';
import axios from 'axios';

const API_URL = process.env.REACT_APP_SERVER_URL;

function ProjectPage(){

  useEffect(() => {

    const authToken = localStorage.getItem('authToken');

    axios.get(`${API_URL}/api/`, {
      headers: {
        'Authorization': `Bearer ${authToken}`
      }
    })
      .then(response => console.log(response.data))
      .catch(error => console.log(error));

  }, []);

  return <p>projects</p>;
}

export default ProjectPage;