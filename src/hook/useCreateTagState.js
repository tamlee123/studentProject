import useLocalStorage from "./useLocalStorage";

function useCreateTagState(initialTag) {
  const [createTag, setCreateTag] = useLocalStorage("name", initialTag);
  const [studentTagMap, setStudentTagMap] = useLocalStorage(
    "student-tag-map",
    {}
  );
  return {
    studentTagMap,
    createTag,
    addTag: (studentId, newTag) => {
      const { v4: uuidv4 } = require("uuid");
      const tagId = uuidv4();
      setCreateTag([...createTag, { id: tagId, name: newTag }]);
      //
      // {
      //   'student1': ['tagId1', 'tagId2']
      // }
      const studentMap = {};
      studentMap[studentId] = studentTagMap[studentId] ?? [];
      studentMap[studentId].push(newTag);
      setStudentTagMap({ ...studentTagMap, ...studentMap });
    },
  };
}

export default useCreateTagState;
