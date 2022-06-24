import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <form className="form1">
          <label htmlFor="name-input">
            Nome
            <input data-testid="name-input" type="text" id="name-input" />
          </label>
          <label htmlFor="description">
            Descrição
            <textarea data-testid="description-input" type="text" id="description" />
          </label>
          <label htmlFor="power">
            Força
            <input data-testid="attr1-input" type="number" id="power" />
          </label>
          <label htmlFor="speed">
            Velocidade
            <input data-testid="attr2-input" type="number" id="speed" />
          </label>
          <label htmlFor="HP">
            Vida
            <input data-testid="attr3-input" type="number" id="HP" />
          </label>
          <label htmlFor="image">
            Imagem
            <input data-testid="image-input" type="text" id="image" />
          </label>
          <label htmlFor="rarity">
            Raridade
            <select data-testid="rare-input" id="rarity">
              <option value="normal"> normal </option>
              <option value="raro"> raro </option>
              <option value="muito raro"> muito raro </option>
            </select>
          </label>
          <label htmlFor="trunfo">
            Super Trunfo
            <input data-testid="trunfo-input" id="trunfo" />
          </label>
          <button data-testid="save-button" type="submit" id="saveBtn">
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
