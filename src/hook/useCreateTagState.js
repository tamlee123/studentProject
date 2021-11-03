import useLocalStorage from "./useLocalStorage";

function useCreateTagState(initialTag) {
  const [createTag, setCreateTag] = useLocalStorage("createTag", initialTag);
  return {
    createTag,
    addTag: (newTag) => {
      const { v4: uuidv4 } = require("uuid");
      setCreateTag([...createTag, { id: uuidv4(), name: newTag }]);
    },
  };
}

export default useCreateTagState;
