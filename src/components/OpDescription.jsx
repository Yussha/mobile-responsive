import "./opdescription.css";
export default function OpDescription({ displayItem }) {
  return (
    <section className="opDescription">
      <p className="opDescription-para">{displayItem.description}</p>

      <h2>About this item</h2>

      <ul>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        <li>
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </li>
        <li>As Cicero would put it, “Um, not so fast.”</li>
        <li>
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit.
        </li>
        <li>
          Sed quia non numquam eius modi tempora incidunt ut labore et dolore
          magnam aliquam quaerat voluptatem.
        </li>
        <li>
          Nor is there anyone who loves or pursues or desires to obtain pain of
          itself.
        </li>
        <li>
          Because it is pain, but occasionally circumstances occur in which toil
          and pain can procure him some great pleasure.
        </li>
      </ul>
    </section>
  );
}
