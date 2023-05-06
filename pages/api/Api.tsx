import { LogIn } from "@/components/types/Types";
import { logIn } from "@/redux/actions/LogInAction";
import { useDispatch } from "react-redux";

export const fetchLogInData = async (data: LogIn) => {

  const res = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: data.username,
      password: data.password,
    }),
  });
  const dataFromApi = await res.json();
  return dataFromApi;



  // fetch("https://dummyjson.com/auth/login", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({
  //     username: data.username,
  //     password: data.password,
  //   }),
  // })
  //   .then((res) => res.json())
  //   .then((data) => {
  //     localStorage.setItem('user', JSON.stringify(data));
  //     localStorage.setItem('user-ID', JSON.stringify(data.id));
  //     localStorage.setItem('signed-in', JSON.stringify(true));
  //     console.log('User data stored in localStorage:', data);
  //   })
  //   .catch((error) => {
  //     console.error('Error while logging in:', error);
  //   });
};