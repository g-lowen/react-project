import "./Rules.css";

function Rules() {
  return (
    <div className="Rules">
      <h1>How to play 10 000</h1>
      <h2>Scoring</h2>
      <div>These are the base methods of scoring:</div>
      <ul>
        <li>Single fives are worth 50 points</li>
        <li>Single ones are worth 100 points</li>
        <li>
          Three of a kind are worth 100 points times the number rolled, except
          for three ones which are worth 1000 points
        </li>
        <li>
          If four, five, or six of a kind are rolled, each additional dice
          doubles the amount of dice previously rolled. For example, 4 die
          showing the number 3 would be 600 points and 5 die showing the number
          3 would be 1200 points
        </li>
        <li>
          A straight from 1 to 6 is worth 1500 points. If a player fails to roll
          a straight they may make one attempt to complete the straight. If the
          desired number(s) does not turn up on the next roll that round is a
          "crap out" even if there are scoring dice on the table i.e. 1's or
          5's.
        </li>
        <li>
          Three pairs are worth 1000 points. For instance 2+2, 4+4, 5+5. This
          rule does not count if you roll a quadruple and a pair e.g. 2+2, 2+2,
          6+6 unless stated otherwise (some places have their own house rules).
        </li>
      </ul>

      <h2>Winning</h2>
      <p>
        The first player to score over 10,000 points temporarily becomes the
        winner, and each other player gets one more turn to top that player's
        score. Whoever ends with the highest score over 10,000 wins the game.
      </p>
      <p className="last-p">
        In one variation, players must score exactly 10,000 without going over.
        In the event that a player goes over, the score for that turn is lost.
        In this variation, if the 10,000 is hit, that player wins immediately
        without giving the other players a chance to roll. However, if the
        winner leaves at least one die then the next player may 'roll off the
        score'.
      </p>
    </div>
  );
}

export default Rules;
