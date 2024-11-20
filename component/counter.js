let count = 0;

export function NewCounter() {
  return count++;
}

export function CurrentCounter() {
  return count;
}
