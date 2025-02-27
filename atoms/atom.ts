import { Todo } from "@/interfaces/Todo.interface";
import { atom } from "jotai";
import { atomWithImmer } from "jotai-immer";

export const todoAtom = atomWithImmer<Todo[]>([]);