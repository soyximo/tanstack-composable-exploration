import { ref } from "vue";

type Spaceship = {
  name: string;
};

// create a closure to maintain the singleton instance
const createSpaceshipManager = (() => {
  let instance: {
    spaceships: Ref<Spaceship[]>;
    addSpaceship: (name: string) => void;
  } | null = null;

  return () => {
    if (instance) {
      return instance;
    }

    const spaceships = ref<Spaceship[]>([
      { name: "Enterprise" },
      { name: "Millennium Falcon" },
    ]);

    const addSpaceship = (name: string) => {
      spaceships.value.push({ name });
    };

    instance = {
      spaceships,
      addSpaceship,
    };

    return instance;
  };
})();

// Composable that returns the singleton instance
export default function useSpaceships() {
  return createSpaceshipManager();
}
