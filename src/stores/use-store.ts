import { useContext } from 'react';

import { StoreContext } from './store-provider';
import { TodoList } from './TodoList';

export const useStore = (): TodoList => useContext(StoreContext);
