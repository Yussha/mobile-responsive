import "./cartspecialnotes.css";

export default function CartSpecialNotes() {
  return (
    <div className="specialNotes">
      <h1>Special instructions for seller</h1>
      <textarea
        name="specialNotes"
        id="specialNotes"
        cols="30"
        rows="10"
      ></textarea>
    </div>
  );
}
