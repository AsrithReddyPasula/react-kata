import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Game from "./Game";

describe("Game Component", () => {
  let component: any;
  let result: string;

  beforeEach(() => {
    component = render(<Game resultCallback={(s) => result = s}/>);
  });

  it("should have a play button", () => {
    const button = component.getByText("Play");
    fireEvent.click(button);

    expect(result).toEqual("Draw");

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
    const playerOneInput = component.getByLabelText("Player One Input");
    fireEvent.change(playerOneInput, { target: { value: 'Rock' } });
    expect(playerOneInput.value).toBe('Rock');

    const playerTwoInput = component.getByLabelText("Player Two Input");
    fireEvent.change(playerTwoInput, { target: { value: 'Scissors' } });
    expect(playerTwoInput.value).toBe('Scissors');

    const button = component.getByText("Play");
    fireEvent.click(button);

    expect(result).toEqual("Player One Wins");
    //Hints
    // You will need to handle the onChange event for the inputs and save the information in state
    // (e) => e.target.value
    // https://www.w3schools.com/jsref/event_onchange.asp
  });
});



