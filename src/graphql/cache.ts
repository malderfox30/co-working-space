import { InMemoryCache, makeVar } from '@apollo/client';

export const userInfoVar = makeVar({});

export const cache: InMemoryCache = new InMemoryCache();
