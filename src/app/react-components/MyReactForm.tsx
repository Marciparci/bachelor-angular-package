import * as React from 'react';
import { BubblyService } from '../bubbly-service.service';

class MyReactForm extends React.Component {

    handleSubmit(event: { preventDefault: () => void; }) {
        event.preventDefault();
        let framework = "react";
        console.log("submitted React");
        BubblyService.getInputValues(framework);

        //TSX Syntax für HTMLInputElement + Alte Variante der Datenbindung direkt über das Formular
        // let reactText = (document.getElementById("text") as HTMLInputElement).value;
        // (document.getElementById("Atext") as HTMLInputElement).value = reactText;

        // let reactNumber = (document.getElementById("number") as HTMLInputElement).value;
        // (document.getElementById("Anumber") as HTMLInputElement).value = reactNumber;

        // let reactDate = (document.getElementById("date") as HTMLInputElement).value;
        // (document.getElementById("Adate") as HTMLInputElement).value = reactDate;
    }

    override render(): React.ReactNode {
        return (
            // HTML Aufbau für das Form
            <div className='center'>
                <form onSubmit={this.handleSubmit}>
                    <div className='formDiv'>
                        <label htmlFor="text">Text</label>
                        <input
                            type={"text"}
                            name="text"
                            id="text"
                            className='formInput'
                        >
                        </input>
                    </div>
                    <div className='formDiv'>
                        <label htmlFor="number">Nummer</label>
                        <input
                            type={"number"}
                            name="number"
                            id='number'
                            className='formInput'
                        >
                        </input>
                    </div>
                    <div className='formDiv'>
                        <label htmlFor="date">Datum</label>
                        <input
                            type={"date"}
                            name="date"
                            id='date'
                            className='formInput'
                        >
                        </input>
                    </div>
                    <div className='formDiv'>
                        <button className='submitButton'>Absenden</button>
                    </div>
                </form>
            </div>
        )
    }   
}  
// export default um Komponente anderswo zu nutzen
export default MyReactForm