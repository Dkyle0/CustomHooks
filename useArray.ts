import { useState } from "react";

type UseArrayReturnType<T> = [
  T[],
  {
    push: (element: T) => void;
    update: (index: number, element: T) => void;
    clear: () => void;
    remove: (index: number) => void;
    filter: (callback: (element: T) => boolean) => void;
  }
];

export const useArray = <T>(defaultValue: T[]): UseArrayReturnType<T> => {
  const [array, setArray] = useState<T[]>(defaultValue);

  const push = (element: T) => {
    setArray(a => [...a, element]);
  };

  const update = (index: number, newElement: T) => {
    setArray(a => [...a.slice(0, index), newElement, ...a.slice(index + 1)]);
  };

  const clear = () => setArray([]);

  const remove = (index: number) => {
    setArray(a => [...a.slice(0, index), ...a.slice(index + 1)]);
  };

  const filter = (callback: (element: T) => boolean) => {
    setArray(a => a.filter(callback));
  };

  return [
    array,
    {
      push,
      update,
      clear,
      remove,
      filter,
    }
  ];
};
