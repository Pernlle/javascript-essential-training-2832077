/**
 * Create a Backpack object, populate some HTML to display its properties.
 * Her tages modulet Backpack ud af main, hvilket resulterer i at den nu ikke kan findes i consollen i browseren.
 *    Dette kan være nødvendigt for eksempelvis klasser, men ikke objekter, som denne backpack. Det er kun til for at vise at det kan gøres i dette eksempel.
 *        At sætte klasser op i deres egne moduler er brugbart for at holde koden ren og mindske clutters.
 */
import backpack from "./backpack.js";

const markup = (backpack) => {
  return `
  <div>
    <h3>${backpack.name}</h3>
    <ul>
      <li>Volume: ${backpack.volume}</li>
      <li>Color: ${backpack.color}</li>
      <li>Number of pockets: ${backpack.pocketNum}</li>
      <li>Strap lengths: L: ${backpack.strapLength.left}, R: ${
    backpack.strapLength.right
  } </li>
      <li>Top lid: ${backpack.lidOpen ? "Open" : "Closed"}</li>
    </ul>
  </div>
`;
};

const main = document.createElement("main");
main.innerHTML = markup(backpack);
document.body.appendChild(main);
