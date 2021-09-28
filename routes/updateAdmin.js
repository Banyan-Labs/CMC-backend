const data = {
  month: "month",
  year: "year",
  introductions: [{
  name: "name",
  introDescription: " introDescription",
  introImage: "introImage",
  }],
  trainings: [{
  trainingTitle: " trainingTitle",
  presenter: " presenter",
  trainingDescription: "trainingDescription",
  role: "role",
  }],
  otherNotes: "otherNotes",
};
axios
  .put("https://localhost:8080/api/month/update", data)
  .then((response) => {
    console.log("Status: ", response.status);
    console.log("Data: ", response.data);
  })
  .catch((error) => {
    console.error("Something went wrong!", error);
  });

