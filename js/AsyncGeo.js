function printCityCoords(cityRequest) {
  findACity(cityRequest).then((res) => {
    console.log(
      `Coords of ${cityRequest} = Lat: ${res.latt}, Long: ${res.longt}`
    );
  });
}

async function findACity(cityName) {
  let cityJson;

  console.log("Going to check for a city named " + cityName + "!");
  cityData = await getCityInfo(cityName).then((resJson) => {
    cityJson = resJson;
  });
  return new Promise((resolve) => {
    resolve(cityJson);
  });
}

async function getCityInfo(cityName) {
  url = `https://geocode.xyz/${cityName}?json=1`;

  let res = await fetch(url);

  if (res.status != 200) {
    console.log("Failed the first fetch attempt for " + cityName + "!");
    res = await new Promise((x) =>
      setTimeout(async () => {
        const tmpRes = await fetch(url);
        x(tmpRes);
      }, 3000)
    );
  }

  const json = await res.json();

  const myPromise = new Promise((resolve) => {
    if (json) {
      resolve(json);
    }
  });
  return myPromise;
}

printCityCoords("Dallas");
printCityCoords("Shreveport");
printCityCoords("Minneapolis");
