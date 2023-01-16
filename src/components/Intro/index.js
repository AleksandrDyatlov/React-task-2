import './style.scss';

function Intro({ img }) {
  return (
    <div className="intro">
      <img src={img} alt="image description" />
    </div>
  );
}

export default Intro;
