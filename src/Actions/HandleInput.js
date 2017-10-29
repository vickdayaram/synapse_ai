export const selectTopic = (topic) => {
  console.log("testing")
  return {
    type: "SELECTED",
    payload: topic
  }
}
