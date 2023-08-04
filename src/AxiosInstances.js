import axios from "axios";
let axiosInstances ={
    post: (object)=>{
        axios.post('http://localhost:4000/save-response', object)
          .then(res => {
            if (res.status === 200)
              alert('Response successfully saved')
            else
              Promise.reject()
          })
          .catch(err => alert('Something went wrong'))
    },
    get: (setData)=>{
        axios.get("http://localhost:4000/")
      .then(({ data }) => {
        setData(data);
      })
      .catch((error) => {
        console.log(error);
      });
    }
}
export const AxiosInstance = axiosInstances;