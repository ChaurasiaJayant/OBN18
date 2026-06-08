function login(email, password) {
  const data = fetch("https://linkinbio-hxpl.onrender.com/api/auth/login", {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });

  data
    .then(function (response) {
      if (!response.ok) {
        console.log(response);
        throw new Error("Login failed:", response.body.message);
      }

      return response.JSON();
    })
    .then((data) => {
      console.log("Login successful");
      console.log(data.token);
      console.log(data.user);
    })
    .catch((err) => console.log(err.message));
}

login("vishoo@gmail.com", "StrongerPass@123");
