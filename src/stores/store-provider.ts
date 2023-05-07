import { createContext } from 'react';

import { TodoList } from './TodoList';

export const StoreContext = createContext({} as TodoList);
export const StoreProvider = StoreContext.Provider;
