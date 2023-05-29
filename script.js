fetch("https://pokeapi.co/api/v2/pokemon/ditto")
      .then(function(response) {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Error: " + response.status);
        }
      })
      .then(function(data) {
        displayPokemonInfo(data);
      })
      .catch(function(error) {
        console.log(error);
      });

    function displayPokemonInfo(pokemon) {
      var pokemonInfoDiv = document.getElementById("pokemonInfo");
      var name = pokemon.name;
      var abilities = pokemon.abilities.map(function(ability) {
        return ability.ability.name;
      }).join(", ");
      var stats = pokemon.stats.map(function(stat) {
        return stat.stat.name + ": " + stat.base_stat;
      }).join("<br>");



      pokemonInfoDiv.innerHTML = `
        <h2>${name}</h2>
        <p><strong>Abilities:</strong> ${abilities}</p>
        <p><strong>Stats:</strong><br> ${stats}</p>
      `;
    }