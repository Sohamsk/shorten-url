document.querySelector("[data-work = register]").addEventListener('click', async (e) => {
    e.preventDefault();
    let body = JSON.stringify({
        email: document.querySelector("[data-work = username]").value,
        password: document.querySelector("[data-work = password]").value
    });
    const resp = await fetch("/register", {
        method: "POST",
        body: body,
        headers: {
            "content-type": "application/json; charset=UTF-8"
        }
    });
    let js = await resp.json()
    if (js.code == 02)
        console.error(js.status);
    else
        console.log(js.status);
})

document.querySelector("[data-work = login]").addEventListener('click', () => {
    console.log("test2");
});