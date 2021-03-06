// @flow

import React from 'react';
import { getSampleUser, getSampleUser2 } from '../../../../utils/test-helpers';
import {
  getBlankGame,
  addUserToGame,
  updatePlayer,
} from 'shared/reducers/game';
import GameOver from '..';

const user1 = getSampleUser();
const user2 = getSampleUser2();
let game = getBlankGame({ id: 'd2f', user: user1 });
game = addUserToGame(game, user2);
game = updatePlayer(game, user1.id, {
  status: 'WON',
});
game = updatePlayer(game, user2.id, {
  status: 'LOST',
  losses: 1,
});

export default (
  <GameOver
    disabled
    curUser={user1}
    game={game}
    onRestart={() => console.log('Restart')}
  />
);
