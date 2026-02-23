export const NewTopic = () => {
  return (
    <>
      <h2>Add a new topic</h2>
      <form className="new-topic">
        <label>
          Title
          <input type="text" />
        </label>
        <label>
          Content
          <textarea rows={5} />
        </label>
        <button type="submit">Save</button>
      </form>
    </>
  )
}
