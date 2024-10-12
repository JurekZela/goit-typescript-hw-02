import { FormEvent } from 'react';

export interface ISearchBar {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}