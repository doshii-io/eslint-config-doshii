// Simple code examples to test ESLint configuration
function myTestFunction(): boolean {
  let newerOverrideVariable = true;
  const newNonOverrideVariable = true;
  const test = 2;

  if (test > 1) {
    newerOverrideVariable = !newNonOverrideVariable;
    return newerOverrideVariable;
  }
  return newNonOverrideVariable;
}

myTestFunction();

export const myTestFunctionArrowStyle = (): boolean => {
  let newerOverrideVariable = true;
  const newNonOverrideVariable = true;
  const test = 2;

  if (test > 1) {
    newerOverrideVariable = !newNonOverrideVariable;
    return newerOverrideVariable;
  }
  return newNonOverrideVariable;
};

myTestFunctionArrowStyle();

export const myTestFunctionArrowStyleWithParam = (param1: number): boolean => {
  let newerOverrideVariable = true;
  const newNonOverrideVariable = true;

  if (param1 > 1) {
    newerOverrideVariable = !newNonOverrideVariable;
    return newerOverrideVariable;
  }
  return newNonOverrideVariable;
};

myTestFunctionArrowStyleWithParam(1);

// A couple of params should appear on separate lines
export const myTestFunctionArrowStyleWithObjectParams = ({
  param1,
  param2
}: {
  param1: number;
  param2: number;
}): boolean => {
  let newerOverrideVariable = true;
  const newNonOverrideVariable = true;
  const total = param1 + param2;

  if (total > 1) {
    newerOverrideVariable = !newNonOverrideVariable;
    return newerOverrideVariable;
  }
  return newNonOverrideVariable;
};

myTestFunctionArrowStyleWithObjectParams({
  param1: 1,
  param2: 2
});

// Large numbers of params should appear on separate lines
export const myTestFunctionArrowStyleWithNumerousObjectParams = ({
  param1,
  param2,
  param3,
  param4,
  param5,
  param6,
  param7,
  param8,
  param9
}: {
  param1: number;
  param2: number;
  param3: number;
  param4: number;
  param5: number;
  param6: number;
  param7: number;
  param8: number;
  param9: number;
}): boolean => {
  const total = param1 + param2 + param3 + param4 + param5 + param6 + param7 + param8 + param9;
  const newNonOverrideVariable = true;
  let newerOverrideVariable = true;

  if (total > 1) {
    newerOverrideVariable = !newNonOverrideVariable;
    return newerOverrideVariable;
  }
  return newNonOverrideVariable;
};

myTestFunctionArrowStyleWithNumerousObjectParams({
  param1: 1,
  param2: 2,
  param3: 3,
  param4: 4,
  param5: 5,
  param6: 6,
  param7: 7,
  param8: 8,
  param9: 9
});
