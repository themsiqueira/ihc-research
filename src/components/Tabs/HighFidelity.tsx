
const HighFidelity = () => {
 return (
  <div  style={{ 	height: "100vh" }}>
    <iframe
      src={`${process.env.PUBLIC_URL}/high-fidelity.pdf`}
      width="100%"
      height="100%"
      title="Sketches PDF"
      style={{ border: "none" }}

    ></iframe>
  </div>
 );
};
export default HighFidelity;