export const LogInSubmit = () => {
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: "atuny0",
        password: "9uQFF1Lh",
      }),
    })
      .then((res) => res.json())
      .then(console.log);
}