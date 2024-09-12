import CARD_DATA from "./cards"

// create a list of objects to store data about the various questions cards
const CARDS_JSON = JSON.parse(CARD_DATA);
let indexesDrawn = [];
let lastIndex;
let currentIndex;

/* Gets a random card to display */
/**
 * Choose a random card that hasn't been drawn yet
 * @returns {object} - Card object
 */
function getRandomCard () {
    /**
     * Please implement this function so a random card is returned every time
     * not just the first card in the array.
     */
    return CARDS_JSON[0];
}

/**
 * Returns the last card that was drawn allowing the user to go back to it
 * If the user is at the first card and tries to go back, an alert will be shown
 * This function has been implemented for you 😄
 * @returns {object} - Card object
 */
export function prevCard() {
    const indexInDarwnArr = indexesDrawn.indexOf(currentIndex);

    // various consitions
    const isFirstCard = indexInDarwnArr === 0 && lastIndex === undefined;
    const allCardsHaveBeenDrawn = indexInDarwnArr === 0 && lastIndex !== undefined;

    // get the last card from the save var lastIndex because the indexes arr has just been reset
    if (isFirstCard) {
        alert("This is the first card");
        return CARDS_JSON[currentIndex];
    } else if (allCardsHaveBeenDrawn) {
        currentIndex = lastIndex; 
        return CARDS_JSON(lastIndex); 
    }
    else {
        currentIndex = indexesDrawn[indexInDarwnArr - 1];
        return CARDS_JSON[currentIndex];
    }

}

/**
 * Gets the next card to display
 * This function has been implemented for you 😄
 * @returns {object} - Card object
 */
export function nextCard() { 
    const indexInDarwnArr = indexesDrawn.indexOf(currentIndex);
    
    if (indexInDarwnArr !== (indexesDrawn.length - 1)) {
        currentIndex = indexesDrawn[indexInDarwnArr + 1];
        return CARDS_JSON[currentIndex];
    } else {
        return getRandomCard();
    }

}

/** Gets the total number of cards */
export function totalCards() { return CARDS_JSON.length; }