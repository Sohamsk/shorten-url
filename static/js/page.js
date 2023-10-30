document
  .getElementById("create-short-url")
  .addEventListener("click", async () => {
    console.log(document.querySelector("#longurl").value);
    let body = JSON.stringify({
      url: document.querySelector("#longurl").value,
    });
    const resp = await fetch("url/generate", {
      method: "POST",
      body: body,
      headers: {
        "content-type": "application/json; charset=UTF-8",
      },
    });

    let obj = await resp.json();

    const short = "http://192.168.126.75:3000/url/" + obj.id;

    let url = document.querySelector("#short-url");
    url.textContent = short;
    url.href = short;
  });
