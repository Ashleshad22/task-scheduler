const app = require("./app");

const PORT = process.env.PORT || 5000;

app.use("/api/tasks", taskRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
