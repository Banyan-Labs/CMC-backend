router.put("/routes/api/months.js/edit", (req, res) => {
  const month = getUser(req.params.monthId);
  if (!month) return res.status(404).json({});
  month.name = req.body.name;
  res.json(month);
});
