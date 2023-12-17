const populateDB = async () => {
  console.log("Populating DB with all haircuts");
  try {
    const response = await fetch("http://localhost:3000/haircuts/populate", {
      method: "POST",
    });
    console.log("response", response);
    const json = await response.json();
    console.log("json", json);
  } catch (error) {
    console.log(error);
  }
};

const fetchHaircuts = async () => {
  console.log("Fetching haircuts");
  try {
    const response = await fetch("http://localhost:3000/haircuts");
    console.log(response);

    const json = await response.json();
    console.log("json", json);
  } catch (error) {
    console.log(error);
  }
};

//populateDB();
fetchHaircuts();
