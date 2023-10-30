document
  .querySelector("[data-work = register]")
  .addEventListener("click", async (e) => {
    e.preventDefault();
    let body = JSON.stringify({
      email: document.querySelector("[data-work = username]").value,
      password: document.querySelector("[data-work = password]").value,
    });
    const resp = await fetch("/v1/register", {
      method: "POST",
      body: body,
      headers: {
        "content-type": "application/json; charset=UTF-8",
      },
    });
    let js = await resp.json();
    if (js.code == 2) console.error(js.status);
    else if (js.code == 3) console.error("User Already Exists");
    else console.log(js.status);
  });

document
  .querySelector("[data-work = login]")
  .addEventListener("click", async (e) => {
    e.preventDefault();
    let body = JSON.stringify({
      email: document.querySelector("[data-work = username]").value,
      password: document.querySelector("[data-work = password]").value,
    });
    const resp = await fetch("/auth/login", {
      method: "POST",
      body: body,
      headers: {
        "content-type": "application/json; charset=UTF-8",
      },
    });
    let js = await resp.json();
    if (js.status === 1) location.replace("/generate");
    else console.log(js.status);
  });
