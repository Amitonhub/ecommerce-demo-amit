export const setUserDataInLocalStorage = (response: any) => {
  localStorage.setItem("user", JSON.stringify(response));
  localStorage.setItem("user-ID", JSON.stringify(response.id));
  localStorage.setItem("signed-in", JSON.stringify(true));
};

export const logOutUserDataInLocalStorage = () => {
  localStorage.setItem("signed-in", JSON.stringify(false));
  localStorage.setItem("user", JSON.stringify(null));
  localStorage.setItem("user-ID", JSON.stringify(null));
};