import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Main from '~/pages/Main';
import imagemParoquias from '~/components/imagemPa/imagemParoquias';

const Routes = createAppContainer(createSwitchNavigator({ Main}));

export default Routes;
