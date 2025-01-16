const characters = reactive([
  { name: "Luke Skywalker", darkSide: false },
  { name: "Darth Vader", darkSide: true },
]);

export const useCharacters = () => {
  const switchSide = (name: string) => {
    const target = characters.find((c) => c.name === name);
    if (target) {
      target.darkSide = !target.darkSide;
    }
  };

  return {
    characters,
    switchSide,
  };
};
