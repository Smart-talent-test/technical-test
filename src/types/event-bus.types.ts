export type EventMap = {
  myEvent: { data: string };
  anotherEvent: { someData: number };
};

export type EventKey<T extends EventMap> = keyof T;

export type EventPayload<T extends EventMap, K extends keyof T> = T[K];
