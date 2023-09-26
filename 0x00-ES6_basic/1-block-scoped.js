export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  if (trueOrFalse) {
    // Remove var here to prevent overwriting the outer variables
    task = true;
    task2 = false;
  }

  return [task, task2];
}

