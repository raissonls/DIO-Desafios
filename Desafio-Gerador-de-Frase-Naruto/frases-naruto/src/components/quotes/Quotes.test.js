import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom'
import Quotes from "./Quotes.js";

const quote = 'Test quote';
const speaker = 'randon speaker';

test('renders recived quote with an button, speaker and a button', () =>{
    render(<Quotes Quote={quote} Speaker={speaker}/>);

    const buttonEl = screen.getByRole('button');
    const QuoteEl = screen.getByText(quote);
    const SpeakerEl = screen.getByText(`- ${speaker}`);


    expect(buttonEl).toBeInTheDocument();
    expect(QuoteEl).toBeInTheDocument();
    expect(SpeakerEl).toBeInTheDocument();
});