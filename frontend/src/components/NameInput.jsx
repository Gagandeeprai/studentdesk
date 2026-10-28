
function NameInput({ name, setName }) {
  return (
    <section>
      <h2>Change Name</h2>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />
    </section>
  );
}

export default NameInput;