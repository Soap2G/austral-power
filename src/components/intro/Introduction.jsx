import './intro-style.css';
import { Parallax } from "react-scroll-parallax";

const Introduction = () => {
  return (
    <section className="intro-section">
		<div className="sun"></div> 
      
        <div className="intro-title">
		<Parallax speed={-15}>
          <h1 style={{ fontWeight: '500' }}>
            Austral Power
          </h1>
		  </Parallax>
        </div>
		
      
    </section>
  );
};

export default Introduction;


