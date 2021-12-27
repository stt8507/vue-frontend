import axios from 'axios'

// http request
axios.interceptors.request.use(
  
  config => {
    if (localStorage.getItem('token') != null) { 
      config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);
  
  // http response
  axios.interceptors.response.use(
    response => {
      return response;
    },
    error => {
      if (error.response) {
        console.log('axios:' + error.response.status);
        switch (error.response.status) {
          case 401:
              console.log(error);
        }
      }
      return Promise.reject(error.response);  
    }
  );

  export default axios;