/* eslint-disable @typescript-eslint/no-unsafe-function-type */
// EventBusContext.tsx
import React, {
  createContext,
  useContext,
  useCallback,
  useState,
  ReactNode,
} from "react";
import { EventKey, EventMap, EventPayload } from "../types/event-bus.types";

interface EventBusContextProps {
  emit<K extends EventKey<EventMap>>(
    event: K,
    payload: EventPayload<EventMap, K>
  ): void;
  on<K extends EventKey<EventMap>>(
    event: K,
    callback: (payload: EventPayload<EventMap, K>) => void
  ): void;
}

const EventBusContext = createContext<EventBusContextProps | undefined>(
  undefined
);

export const useEventBus = (): EventBusContextProps => {
  const context = useContext(EventBusContext);
  if (!context) {
    throw new Error("useEventBus must be used within an EventBusProvider");
  }
  return context;
};

export const EventBusProvider = ({ children }: { children: ReactNode }) => {
  const [listeners, setListeners] = useState<
    Partial<Record<EventKey<EventMap>, Function[]>>
  >({});

  const emit = useCallback(
    <K extends EventKey<EventMap>>(
      event: K,
      payload: EventPayload<EventMap, K>
    ) => {
      listeners[event]?.forEach((callback) => {
        callback(payload);
      });
    },
    [listeners]
  );

  const on = useCallback(
    <K extends EventKey<EventMap>>(
      event: K,
      callback: (payload: EventPayload<EventMap, K>) => void
    ) => {
      setListeners((prev) => ({
        ...prev,
        [event]: [...(prev[event] || []), callback],
      }));
    },
    []
  );

  return (
    <EventBusContext.Provider value={{ emit, on }}>
      {children}
    </EventBusContext.Provider>
  );
};
