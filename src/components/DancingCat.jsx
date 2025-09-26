import catSvg from '../assets/images/cat.svg';
import useAnimation from '../hooks/useAnimation';
import '../styles/animations.css';

function DancingCat() {
  const { isAnimating, toggleAnimation } = useAnimation();

  return (
    <div className="dancing-cat-container">
      <div className="cat-stage">
        <img
          src={catSvg}
          alt="Dancing Cat"
          className={`dancing-cat ${isAnimating ? 'dancing' : ''}`}
        />
      </div>

      <button
        className="animation-toggle-btn"
        onClick={toggleAnimation}
        aria-label={isAnimating ? "Stop dancing" : "Start dancing"}
      >
        {isAnimating ? '⏸️ 정지' : '▶️ 춤추기'}
      </button>

      <h1 className="title">🐱 댄싱 고양이 🐱</h1>
      <p className="description">
        버튼을 눌러서 고양이와 함께 춤춰보세요!
      </p>
    </div>
  );
}

export default DancingCat;