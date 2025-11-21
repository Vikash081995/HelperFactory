const obj = {
  key: "value",
};

if ("key" in obj) {
  console.log("property exists");
}

if (obj.hasOwnProperty("key")) {
  console.log("property exists ");
}
