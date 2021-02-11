// const a = Math.floor(Math.random() * (9 - 1)) + 1;
// console.log(`Random value between 1 and 8 is ${a}`);

const fireInfo = document.getElementById("fireInfo");
const waterInfo = document.getElementById("waterInfo");
const grassInfo = document.getElementById("grassInfo");

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");

btn1.addEventListener("click", fireNumber);
btn2.addEventListener("click", waterNumber);
btn3.addEventListener("click", grassNumber);

/* ------- GRASS POKEMON ------- */

function grassNumber() {
  const a = Math.floor(Math.random() * (9 - 1)) + 1;
  const promises = [];

  if (a === 1) {
    for (let i = 1; i <= 3; i++) {
      const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
      promises.push(fetch(url).then((results) => results.json()));
    }
    Promise.all(promises).then((results) => {
      const pokemon = results.map((result) => ({
        name: result.name,
        image: result.sprites["front_default"],
        type: result.types.map((type) => type.type.name).join(", "),
        id: result.id,
      }));
      displayGrass(pokemon);
    });
  } else if (a === 2) {
    for (let i = 152; i <= 154; i++) {
      const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
      promises.push(fetch(url).then((results) => results.json()));
    }
    Promise.all(promises).then((results) => {
      const pokemon = results.map((result) => ({
        name: result.name,
        image: result.sprites["front_default"],
        type: result.types.map((type) => type.type.name).join(", "),
        id: result.id,
      }));
      displayGrass(pokemon);
    });
  } else if (a === 3) {
    for (let i = 252; i <= 254; i++) {
      const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
      promises.push(fetch(url).then((results) => results.json()));
    }
    Promise.all(promises).then((results) => {
      const pokemon = results.map((result) => ({
        name: result.name,
        image: result.sprites["front_default"],
        type: result.types.map((type) => type.type.name).join(", "),
        id: result.id,
      }));
      displayGrass(pokemon);
    });
  } else if (a === 4) {
    for (let i = 387; i <= 389; i++) {
      const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
      promises.push(fetch(url).then((results) => results.json()));
    }
    Promise.all(promises).then((results) => {
      const pokemon = results.map((result) => ({
        name: result.name,
        image: result.sprites["front_default"],
        type: result.types.map((type) => type.type.name).join(", "),
        id: result.id,
      }));
      displayGrass(pokemon);
    });
  } else if (a === 5) {
    for (let i = 495; i <= 497; i++) {
      const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
      promises.push(fetch(url).then((results) => results.json()));
    }
    Promise.all(promises).then((results) => {
      const pokemon = results.map((result) => ({
        name: result.name,
        image: result.sprites["front_default"],
        type: result.types.map((type) => type.type.name).join(", "),
        id: result.id,
      }));
      displayGrass(pokemon);
    });
  } else if (a === 6) {
    for (let i = 650; i <= 652; i++) {
      const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
      promises.push(fetch(url).then((results) => results.json()));
    }
    Promise.all(promises).then((results) => {
      const pokemon = results.map((result) => ({
        name: result.name,
        image: result.sprites["front_default"],
        type: result.types.map((type) => type.type.name).join(", "),
        id: result.id,
      }));
      displayGrass(pokemon);
    });
  } else if (a === 7) {
    for (let i = 722; i <= 724; i++) {
      const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
      promises.push(fetch(url).then((results) => results.json()));
    }
    Promise.all(promises).then((results) => {
      const pokemon = results.map((result) => ({
        name: result.name,
        image: result.sprites["front_default"],
        type: result.types.map((type) => type.type.name).join(", "),
        id: result.id,
      }));
      displayGrass(pokemon);
    });
  } else if (a === 8) {
    for (let i = 810; i <= 812; i++) {
      const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
      promises.push(fetch(url).then((results) => results.json()));
    }
    Promise.all(promises).then((results) => {
      const pokemon = results.map((result) => ({
        name: result.name,
        image: result.sprites["front_default"],
        type: result.types.map((type) => type.type.name).join(", "),
        id: result.id,
      }));
      displayGrass(pokemon);
    });
  }
}

const displayGrass = (pokemon) => {
  console.log(pokemon);
  const pokemonHTMLString = pokemon.map(
    (pokemon) => `
          <li>
              <img src = "${pokemon.image}"/>
              <h2>${pokemon.id}. ${pokemon.name}</h2>
              <p>Type: ${pokemon.type}</p>
          </li>
      `
  );
  grassInfo.innerHTML = pokemonHTMLString;
};

/* ------- FIRE POKEMON ------- */

function fireNumber() {
  const a = Math.floor(Math.random() * (9 - 1)) + 1;
  const promises = [];

  if (a === 1) {
    for (let i = 4; i <= 6; i++) {
      const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
      promises.push(fetch(url).then((results) => results.json()));
    }
    Promise.all(promises).then((results) => {
      const pokemon = results.map((result) => ({
        name: result.name,
        image: result.sprites["front_default"],
        type: result.types.map((type) => type.type.name).join(", "),
        id: result.id,
      }));
      displayFire(pokemon);
    });
  } else if (a === 2) {
    for (let i = 155; i <= 157; i++) {
      const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
      promises.push(fetch(url).then((results) => results.json()));
    }
    Promise.all(promises).then((results) => {
      const pokemon = results.map((result) => ({
        name: result.name,
        image: result.sprites["front_default"],
        type: result.types.map((type) => type.type.name).join(", "),
        id: result.id,
      }));
      displayFire(pokemon);
    });
  } else if (a === 3) {
    for (let i = 255; i <= 257; i++) {
      const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
      promises.push(fetch(url).then((results) => results.json()));
    }
    Promise.all(promises).then((results) => {
      const pokemon = results.map((result) => ({
        name: result.name,
        image: result.sprites["front_default"],
        type: result.types.map((type) => type.type.name).join(", "),
        id: result.id,
      }));
      displayFire(pokemon);
    });
  } else if (a === 4) {
    for (let i = 390; i <= 392; i++) {
      const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
      promises.push(fetch(url).then((results) => results.json()));
    }
    Promise.all(promises).then((results) => {
      const pokemon = results.map((result) => ({
        name: result.name,
        image: result.sprites["front_default"],
        type: result.types.map((type) => type.type.name).join(", "),
        id: result.id,
      }));
      displayFire(pokemon);
    });
  } else if (a === 5) {
    for (let i = 498; i <= 500; i++) {
      const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
      promises.push(fetch(url).then((results) => results.json()));
    }
    Promise.all(promises).then((results) => {
      const pokemon = results.map((result) => ({
        name: result.name,
        image: result.sprites["front_default"],
        type: result.types.map((type) => type.type.name).join(", "),
        id: result.id,
      }));
      displayFire(pokemon);
    });
  } else if (a === 6) {
    for (let i = 653; i <= 655; i++) {
      const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
      promises.push(fetch(url).then((results) => results.json()));
    }
    Promise.all(promises).then((results) => {
      const pokemon = results.map((result) => ({
        name: result.name,
        image: result.sprites["front_default"],
        type: result.types.map((type) => type.type.name).join(", "),
        id: result.id,
      }));
      displayFire(pokemon);
    });
  } else if (a === 7) {
    for (let i = 725; i <= 727; i++) {
      const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
      promises.push(fetch(url).then((results) => results.json()));
    }
    Promise.all(promises).then((results) => {
      const pokemon = results.map((result) => ({
        name: result.name,
        image: result.sprites["front_default"],
        type: result.types.map((type) => type.type.name).join(", "),
        id: result.id,
      }));
      displayFire(pokemon);
    });
  } else if (a === 8) {
    for (let i = 813; i <= 815; i++) {
      const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
      promises.push(fetch(url).then((results) => results.json()));
    }
    Promise.all(promises).then((results) => {
      const pokemon = results.map((result) => ({
        name: result.name,
        image: result.sprites["front_default"],
        type: result.types.map((type) => type.type.name).join(", "),
        id: result.id,
      }));
      displayFire(pokemon);
    });
  }
}

const displayFire = (pokemon) => {
  console.log(pokemon);
  const pokemonHTMLString = pokemon.map(
    (pokemon) => `
          <li>
              <img src = "${pokemon.image}"/>
              <h2>${pokemon.id}. ${pokemon.name}</h2>
              <p>Type: ${pokemon.type}</p>
          </li>
      `
  );
  fireInfo.innerHTML = pokemonHTMLString;
};

/* ------- WATER POKEMON ------- */

function waterNumber() {
  const a = Math.floor(Math.random() * (9 - 1)) + 1;
  const promises = [];

  if (a === 1) {
    for (let i = 7; i <= 9; i++) {
      const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
      promises.push(fetch(url).then((results) => results.json()));
    }
    Promise.all(promises).then((results) => {
      const pokemon = results.map((result) => ({
        name: result.name,
        image: result.sprites["front_default"],
        type: result.types.map((type) => type.type.name).join(", "),
        id: result.id,
      }));
      displayWater(pokemon);
    });
  } else if (a === 2) {
    for (let i = 158; i <= 160; i++) {
      const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
      promises.push(fetch(url).then((results) => results.json()));
    }
    Promise.all(promises).then((results) => {
      const pokemon = results.map((result) => ({
        name: result.name,
        image: result.sprites["front_default"],
        type: result.types.map((type) => type.type.name).join(", "),
        id: result.id,
      }));
      displayWater(pokemon);
    });
  } else if (a === 3) {
    for (let i = 258; i <= 260; i++) {
      const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
      promises.push(fetch(url).then((results) => results.json()));
    }
    Promise.all(promises).then((results) => {
      const pokemon = results.map((result) => ({
        name: result.name,
        image: result.sprites["front_default"],
        type: result.types.map((type) => type.type.name).join(", "),
        id: result.id,
      }));
      displayWater(pokemon);
    });
  } else if (a === 4) {
    for (let i = 393; i <= 395; i++) {
      const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
      promises.push(fetch(url).then((results) => results.json()));
    }
    Promise.all(promises).then((results) => {
      const pokemon = results.map((result) => ({
        name: result.name,
        image: result.sprites["front_default"],
        type: result.types.map((type) => type.type.name).join(", "),
        id: result.id,
      }));
      displayWater(pokemon);
    });
  } else if (a === 5) {
    for (let i = 501; i <= 503; i++) {
      const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
      promises.push(fetch(url).then((results) => results.json()));
    }
    Promise.all(promises).then((results) => {
      const pokemon = results.map((result) => ({
        name: result.name,
        image: result.sprites["front_default"],
        type: result.types.map((type) => type.type.name).join(", "),
        id: result.id,
      }));
      displayWater(pokemon);
    });
  } else if (a === 6) {
    for (let i = 656; i <= 658; i++) {
      const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
      promises.push(fetch(url).then((results) => results.json()));
    }
    Promise.all(promises).then((results) => {
      const pokemon = results.map((result) => ({
        name: result.name,
        image: result.sprites["front_default"],
        type: result.types.map((type) => type.type.name).join(", "),
        id: result.id,
      }));
      displayWater(pokemon);
    });
  } else if (a === 7) {
    for (let i = 728; i <= 730; i++) {
      const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
      promises.push(fetch(url).then((results) => results.json()));
    }
    Promise.all(promises).then((results) => {
      const pokemon = results.map((result) => ({
        name: result.name,
        image: result.sprites["front_default"],
        type: result.types.map((type) => type.type.name).join(", "),
        id: result.id,
      }));
      displayWater(pokemon);
    });
  } else if (a === 8) {
    for (let i = 816; i <= 818; i++) {
      const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
      promises.push(fetch(url).then((results) => results.json()));
    }
    Promise.all(promises).then((results) => {
      const pokemon = results.map((result) => ({
        name: result.name,
        image: result.sprites["front_default"],
        type: result.types.map((type) => type.type.name).join(", "),
        id: result.id,
      }));
      displayWater(pokemon);
    });
  }
}

const displayWater = (pokemon) => {
  console.log(pokemon);
  const pokemonHTMLString = pokemon.map(
    (pokemon) => `
          <li>
              <img src = "${pokemon.image}"/>
              <h2>${pokemon.id}. ${pokemon.name}</h2>
              <p>Type: ${pokemon.type}</p>
          </li>
      `
  );
  waterInfo.innerHTML = pokemonHTMLString;
};
