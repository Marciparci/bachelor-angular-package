import * as React from 'react';
import { BubblyService } from '../bubbly-service.service';

class MyReactForm extends React.Component {

    // Funktion löst beim Absenden des Formulars aus
    handleSubmit(event: { preventDefault: () => void; }) {
        // Seite Neuladen unterdrücken
        event.preventDefault();
        // Aufruf des Services mit Parameter des React Formulars
        let framework = "react";
        BubblyService.getInputValues(framework);
    }

    override render(): React.ReactNode {
        return (
            // HTML Aufbau für das React Formular
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