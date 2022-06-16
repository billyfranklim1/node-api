const app = require("../src/index");
const { useDatabase } = require("../src/database/index");
const { PORT, HOSTMONGO, MONGOBD } = require("../config/index");
useDatabase(HOSTMONGO, MONGOBD);

app.listen(PORT, () => {
  console.log(
    `Server is running on port: ${PORT}\n`
  );
});
