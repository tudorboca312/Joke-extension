// const joke = document.getElementById("joke");
// const button = document.getElementById("btn--joke");

// const apiKey = "DNBGYNmIR67BJEN4RocvsA==IUfmFuRE0jFSJgcy";
// const url = "https://api.api-ninjas.com/v1/jokes?limit=1";

// const handleClick = () => {
//   fetch("https://api.api-ninjas.com/v1/jokes?limit=1", {
//     method: "GET",
//     headers: { "X-Api-Key": apiKey },
//     contentType: "application/json",
//   })
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       return response.json();
//     })
//     .then((result) => {
//       joke.textContent = "";
//       joke.textContent = result[0].joke;
//     })
//     .catch((error) => console.error("Error:", error));
// };

// button.addEventListener("click", () => {
//   handleClick();
// });

const joke = document.getElementById("joke");
const button = document.getElementById("btn--joke");

const url = "https://icanhazdadjoke.com/";

const handleClick = () => {
  fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "User-Agent":
        "JokesOnYou/1.0.0 (+https://www.jokesonyou.com; support@jokesonyou.com)",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((result) => {
      joke.textContent = result.joke;
    })
    .catch((error) => console.error("Error:", error));
};

button.addEventListener("click", handleClick);
