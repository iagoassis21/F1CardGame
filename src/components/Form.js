import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
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
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    const superTrunfo = (
      <label htmlFor="trunfo">
        Super Trunfo
        <input
          name="cardTrunfo"
          onChange={ onInputChange }
          checked={ cardTrunfo }
          type="checkbox"
          data-testid="trunfo-input"
          id="trunfo"
        />
      </label>
    );

    return (
      <div>
        <form className="form1">
          <label htmlFor="name-input">
            Nome
            <input
              required
              name="cardName"
              onChange={ onInputChange }
              value={ cardName }
              data-testid="name-input"
              type="text"
              id="name-input"
            />
          </label>
          <label htmlFor="description">
            Descrição
            <textarea
              required
              name="cardDescription"
              onChange={ onInputChange }
              value={ cardDescription }
              data-testid="description-input"
              type="text"
              id="description"
            />
          </label>
          <label htmlFor="power">
            Força
            <input
              name="cardAttr1"
              onChange={ onInputChange }
              value={ cardAttr1 }
              data-testid="attr1-input"
              type="number"
              id="power"
              max="90"
              min="0"
            />
          </label>
          <label htmlFor="speed">
            Velocidade
            <input
              name="cardAttr2"
              onChange={ onInputChange }
              value={ cardAttr2 }
              data-testid="attr2-input"
              type="number"
              id="speed"
              max="90"
              min="0"
            />
          </label>
          <label htmlFor="HP">
            Vida
            <input
              name="cardAttr3"
              onChange={ onInputChange }
              value={ cardAttr3 }
              data-testid="attr3-input"
              type="number"
              id="HP"
              max="90"
              min="0"
            />
          </label>
          <label htmlFor="image">
            Imagem
            <input
              required
              name="cardImage"
              onChange={ onInputChange }
              value={ cardImage }
              data-testid="image-input"
              type="text"
              id="image"
            />
          </label>
          <label htmlFor="rarity">
            Raridade
            <select
              name="cardRare"
              onChange={ onInputChange }
              value={ cardRare }
              data-testid="rare-input"
              id="rarity"
            >
              <option value="normal"> normal </option>
              <option value="raro"> raro </option>
              <option value="muito raro"> muito raro </option>
            </select>
          </label>
          {
            hasTrunfo ? <p>Você já tem um Super Trunfo em seu baralho</p> : superTrunfo
          }
          <button
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
            data-testid="save-button"
            type="submit"
            id="saveBtn"
          >
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
