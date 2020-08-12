import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';
import {expectElementToContainExternalLink, expectRenderedComponent} from "./testHelpers";

describe("App Component", () => {
  let component: any;

  beforeEach(() => {
    component = render(<App />);
  });

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
    const playerOneInput = component.getByLabelText("Player One Input");
    fireEvent.change(playerOneInput, { target: { value: 'Rock' } });
    expect(playerOneInput.value).toBe('Rock');

    const playerTwoInput = component.getByLabelText("Player Two Input");
    fireEvent.change(playerTwoInput, { target: { value: 'Scissors' } });
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



