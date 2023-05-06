export const setUserDataInLocalStorage = (response: any) => {
    localStorage.setItem("user", JSON.stringify(response));
    localStorage.setItem("user-ID", JSON.stringify(response.id));
    localStorage.setItem("signed-in", JSON.stringify(true));
  };
  