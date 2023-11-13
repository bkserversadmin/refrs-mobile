import React from 'react';

// get the amount of referee confirmed for a game
const getRefereesOnGame = game_referees => {
  const totalLength = game_referees?.length;

  if (totalLength > 0) {
    const refereesConfirmed = game_referees.filter(ref => ref.referee_id);

    return refereesConfirmed?.length;
  }
};

export default getRefereesOnGame;
