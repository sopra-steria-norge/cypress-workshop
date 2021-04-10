import React, { ChangeEvent } from "react";
import "../App.css";

interface Props {
  country: string;
  setCountry: (input: string) => void;
  refetch: () => void;
  handleKeyPress: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

const InputForm: React.FC<Props> = ({
  country,
  setCountry,
  refetch,
  handleKeyPress,
}) => {
  return (
    <div className="country-block">
      <div>
        <label htmlFor="inputField">Land:</label>
        <span>
          <input
            type="text"
            id="inputField"
            value={country}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setCountry(event.currentTarget.value)
            }
            onKeyPress={(event: React.KeyboardEvent<HTMLInputElement>) =>
              handleKeyPress(event)
            }
          />
        </span>
      </div>
      <div>
        <button className="searchButton" onClick={() => refetch()}>
          Søk
        </button>
      </div>
    </div>
  );
};

export default InputForm;
