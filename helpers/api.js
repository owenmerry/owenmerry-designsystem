export const parseResponse = (data = {}, recurOn) => Object.entries(data)
  .reduce((acc, [key, value]) => {
    if (recurOn && value[recurOn]) {
      value[recurOn] = parseResponse(value[recurOn]);
    }

    return [...acc, { key, ...value }];
  }, [])
  .sort((a, b) => a.name.localeCompare(b.name));
