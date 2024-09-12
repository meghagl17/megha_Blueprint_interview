import "./FlipCard.css";

/**
 * @param {boolean} isFront - Whether the card is front or back
 * @param {function} handleCardClick - Function to handle card click
 * @param {string} category - Category of the card
 * @param {string} ques - Question text
 * @param {string} img - Image URL
 * @param {string} ans - Answer text 
 * @returns 
 */
const FlipCard = ({isFront, handleCardClick, category, ques, img, ans}) => {

    return (
        <div className={`flip-card ${isFront ? null : "flip"}`} onClick={handleCardClick}>
            <div className="card-inner">
                <div className={`card-front ${category}`}>
                    <p className="ques card-text">{ques}</p>
                </div>
                <div className={`card-back ${category}`}>
                    <img src={img} alt="" className="card-img" />
                    <p className="ans card-text">{ans}</p>
                </div>
            </div>
        </div>
    );
}

export default FlipCard;