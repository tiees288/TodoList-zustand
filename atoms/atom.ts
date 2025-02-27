import { Todo } from "@/interfaces/Todo.interface";
import { atom, createStore } from "jotai";
import { atomWithImmer } from "jotai-immer";

export const todoCounterAtom = atom((get) => get(todoAtom).length);
export const todoAtom = atomWithImmer<Todo[]>([]);

export const todoStore1 = createStore();
export const todoStore2 = createStore();

todoStore1.set(todoAtom, [
  {
    id: 1,
    description: "Learn Jotai",
    completed: false,
  },
]);
