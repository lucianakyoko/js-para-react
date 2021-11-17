import './style.css';
import CardFrontBack from '../../components/CardFrontBack';
import cards from './data.js';

function BoardGame(amountCards) {
  const htmlCardsList = cards.map((card) => CardFrontBack(card.icon, card.altIcon));
  const htmlCars = htmlCardsList.join('');

  return /*html*/`
    <section class="board-game">
      ${htmlCars}

    </section>
  `;
}

export default BoardGame
