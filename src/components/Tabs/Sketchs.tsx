
const Sketchs = () => {
 return (
  <div  style={{ 	height: "100vh" }}>
    <iframe
      src={`${process.env.PUBLIC_URL}/low-fidelity.pdf`}
      width="100%"
      height="100%"
      title="Sketches PDF"
      style={{ border: "none" }}

    ></iframe>
  </div>
 );
};
export default Sketchs;