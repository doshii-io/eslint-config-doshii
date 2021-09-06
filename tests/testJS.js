// Simple code examples to test ESLint configuration
function myTestFunction() {
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

export const myTestFunctionArrowStyle = () => {
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

export const myTestFunctionArrowStyleWithParam = (param1) => {
  let newerOverrideVariable = param1;
  const newNonOverrideVariable = true;

  if (param1 > 1) {
    newerOverrideVariable = !newNonOverrideVariable;
    return newerOverrideVariable;
  }
  return newNonOverrideVariable;
};

myTestFunctionArrowStyleWithParam(1);

// A couple of params should appear on separate lines
export const myTestFunctionArrowStyleWithObjectParams = ({ param1, param2 }) => {
  let newerOverrideVariable = param1 + param2;
  const newNonOverrideVariable = true;

  if (newerOverrideVariable > 1) {
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
}) => {
  let newerOverrideVariable = param1 + param2 + param3 + param4 + param5 + param6 + param7 + param8 + param9;
  const newNonOverrideVariable = true;

  if (newerOverrideVariable > 1) {
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
