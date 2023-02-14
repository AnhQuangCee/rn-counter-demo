import { Counter } from './components/couter';

export function multiply(a: number, b: number): Promise<number> {
  return Promise.resolve(a * b);
}

export { Counter };
