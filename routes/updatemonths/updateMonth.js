// const dataObject = { id: 1, month: "September" };

// fetch("https:///routes/api/months.js", {
//   method: "PUT",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(dataObject),
// })
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => console.log(data));

router.put('/routes/api/months.js/edit', (req, res) => {
    const month = getUser(req.params.monthId)
   
    if (!month) return res.status(404).json({})
   
    month.name = req.body.name
    res.json(month)
   })
