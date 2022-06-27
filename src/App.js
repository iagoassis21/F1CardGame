import React from 'react';
import Form from './components/Form';
import './App.css';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
    };
  }

  onInputChange = ({ target }) => {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  checkState = () => {
    const maxStats = 90;
    const minStats = 0;
    const maxStatsOverall = 210;
    const { cardName, cardDescription, cardImage,
      cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const newAttr1 = parseInt(cardAttr1, 10);
    const newAttr2 = parseInt(cardAttr2, 10);
    const newAttr3 = parseInt(cardAttr3, 10);
    if (cardName.length === 0) {
      return true;
    }
    if (cardDescription.length === 0) {
      return true;
    }
    if (cardImage.length === 0) {
      return true;
    }
    if (newAttr1 < minStats || newAttr1 > maxStats) {
      return true;
    }
    if (newAttr2 < minStats || newAttr2 > maxStats) {
      return true;
    }
    if (newAttr3 < minStats || newAttr3 > maxStats) {
      return true;
    }
    if (newAttr1 + newAttr2 + newAttr3 > maxStatsOverall) {
      return true;
    }
    return false;
  }

  isSaveButtonDisabled = () => {
    if (this.checkState()) {
      return true;
    }
    return false;
  }

  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      onSaveButtonClick,
    } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          onInputChange={ this.onInputChange }
          isSaveButtonDisabled={ this.isSaveButtonDisabled() }
          onSaveButtonClick={ onSaveButtonClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
