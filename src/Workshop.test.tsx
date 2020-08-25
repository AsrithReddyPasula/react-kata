import React from 'react';
import {fireEvent, render, within} from '@testing-library/react';
import App from './App';
import {expectElementToContainExternalLink, expectRenderedComponent} from "./testHelpers";

describe("Workshop", () => {
  let component: any;

  const fillInPlayerInputs = () => {
    const playerOneInput = component.getByLabelText("Player One Input");
    fireEvent.change(playerOneInput, {target: {value: 'Rock'}});

    const playerTwoInput = component.getByLabelText("Player Two Input");
    fireEvent.change(playerTwoInput, {target: {value: 'Scissors'}});
  }

  const playGame = () => {
    fillInPlayerInputs();

    fireEvent.click(component.getByText("Play"));
  };

  beforeEach(() => {
    component = render(<App />);
  });

  describe("Workshop 1", () => {
    it('should display text on page', () => {
      expectRenderedComponent(component).toContainText("Welcome to Rock Paper Scissors")
    });

    it('should display a link to rock paper scissor rules', () => {
      expectElementToContainExternalLink(component, "Rock Paper Scissor Rules", "https://en.wikipedia.org/wiki/Rock_paper_scissors");
    });

    it("should have a play button", () => {
      const button = component.getByText("Play");
      fireEvent.click(button);

      expectRenderedComponent(component).toContainText("Draw");

      //Hints
      //This button should call playGame in RockPaperHelper.ts when clicked
      //https://reactjs.org/docs/handling-events.html
    });

    it('should display 2 input boxes',() => {
      component.getByLabelText("Player One Input");
      component.getByLabelText("Player Two Input");

      //Hints
      //The two inputs should have labels associated with them
      //https://www.w3schools.com/tags/tag_label.asp
    });

    it("should display winner when inputs are filled out", () => {
      playGame();

      const playerOneInput = component.getByLabelText("Player One Input");
      expect(playerOneInput.value).toBe('Rock');

      const playerTwoInput = component.getByLabelText("Player Two Input");
      expect(playerTwoInput.value).toBe('Scissors');

      const button = component.getByText("Play");
      fireEvent.click(button);
      expectRenderedComponent(component).toContainText("Player One Wins");

      //Hints
      // You will need to handle the onChange event for the inputs and save the information in state
      // (e) => e.target.value
      // https://www.w3schools.com/jsref/event_onchange.asp
    });
  });

  describe("Workshop 2", () => {
    it("should have a button that clears the inputs", () => {
      let playerOneInput = component.getByLabelText("Player One Input");
      fireEvent.change(playerOneInput, { target: { value: 'Rock' } });

      let playerTwoInput = component.getByLabelText("Player Two Input");
      fireEvent.change(playerTwoInput, { target: { value: 'Scissors' } });

      fireEvent.click(component.getByText("Clear"));

      playerOneInput = component.getByLabelText("Player One Input");
      expect(playerOneInput.value).toBe("");

      playerTwoInput = component.getByLabelText("Player Two Input");
      expect(playerTwoInput.value).toBe("");
    });

    it("should display header", () => {
      component.getByTestId("app-header");
      expectRenderedComponent(component).toContainText("Rock Paper Scissor Game");

      //Hints
      // There is a Header.tsx component
    });

    it("should popup modal with who won after you click play", () => {
      playGame();
      const modal = within(component.getByTestId("game-modal"));
      expectRenderedComponent(modal).toContainText("Game Result: Player One Wins");

      //Hints
      // There is a GameModal.tsx component
    });

    it("modal should contain a button to Play Again", () => {
      playGame();

      const modal = within(component.getByTestId("game-modal"));
      modal.getByText("Play Again");

      //Hints
      // Don't worry about any of the clicking logic yet. That's the next test!
    });

    it('play again button should reset game when clicked', () => {
      playGame();

      const modal = within(component.getByTestId("game-modal"));
      const playAgainButton = modal.getByText("Play Again");
      fireEvent.click(playAgainButton);

      expect(component.queryByTestId("game-modal")).toBeNull();
      expectRenderedComponent(modal).toNotContainText("Player One Wins");

      const playerOneInput = component.getByLabelText("Player One Input");
      expect(playerOneInput.value).toBe("");

      const playerTwoInput = component.getByLabelText("Player Two Input");
      expect(playerTwoInput.value).toBe("");

      //Hints
      //  This is an example of a child component communicating back up to a parent component
      //  https://medium.com/@thejasonfile/callback-functions-in-react-e822ebede766
      //  Let's break this down...
      //  1. Add a new prop to GameResultModal.tsx that is a function
      //  2. Call this new function prop when the button is clicked
      //  3. Have App.tsx pass a function to GameResult.tsx that clears the App.tsx state
    });
  });

  describe("Workshop 3", () => {
    it("Clicking Change Case button should uppercase the header text", () => {
      fireEvent.click(component.getByText("Change Case"));
      expectRenderedComponent(component).toContainText("ROCK PAPER SCISSOR GAME");

      fireEvent.click(component.getByText("Change Case"));
      expectRenderedComponent(component).toContainText("Rock Paper Scissor Game");

      //Hints
      // You'll need to set state within the Header component
      // Use the toDisplayText helper function
    });

    it("Clicking Change Case Button should uppercase banner text", () => {
      fireEvent.click(component.getByText("Change Case"));
      expectRenderedComponent(component).toContainText("WELCOME TO ROCK PAPER SCISSORS");
      expectRenderedComponent(component).toContainText("ROCK PAPER SCISSOR RULES");

      fireEvent.click(component.getByText("Change Case"));
      expectRenderedComponent(component).toContainText("Welcome to Rock Paper Scissors");
      expectRenderedComponent(component).toContainText("Rock Paper Scissor Rules");

      //Hints
      // You'll need to move the state up to the App component and pass a callback to the Header
      // You'll need to pass a property to the App Banner Component
      // See the Game and GameResultModal for an example
    });

    it("Clicking Change Case Button should uppercase player input labels", () => {
      fireEvent.click(component.getByText("Change Case"));
      expectRenderedComponent(component).toContainText("PLAYER ONE INPUT");
      expectRenderedComponent(component).toContainText("PLAYER TWO INPUT");

      fireEvent.click(component.getByText("Change Case"));
      expectRenderedComponent(component).toContainText("Player One Input");
      expectRenderedComponent(component).toContainText("Player Two Input");

      //Hints
      // You'll need to pass a property to the Game component
    });

    it("Clicking Change Case Button should uppercase the game outcome", () => {
      fillInPlayerInputs();
      fireEvent.click(component.getByText("Change Case"));
      fireEvent.click(component.getByText("Play"));

      const modal = within(component.getByTestId("game-modal"));
      expectRenderedComponent(modal).toContainText("GAME RESULT: PLAYER ONE WINS");

      //Hints
      // You'll need to pass a property to the GameResultModal
    });

    it('Should use react context', () => {
      //Try refactoring the app to use react context instead of passing isUpperCase everywhere
      //Hints
      // Wrap the entire App with an AppContext component
      // You will need to call useContext(UpperCaseContext) in all the components
      // useContext(UpperCaseContext).isUpperCase returns the current state
      // useContext(UpperCaseContext).toggleUpperCase returns the function to toggle the state
      // https://stackoverflow.com/questions/41030361/how-to-update-react-context-from-inside-a-child-component
    })
  });
});



