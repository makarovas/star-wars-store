const Film = ({ filmName }: { filmName: string }) => (
  <p>- {!filmName ? "loading..." : filmName}</p>
);
export default Film;
