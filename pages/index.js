import Entryfield from "../components/Entryfield";
import Progress from "../components/ProgressBar";
import Valuefields from "../components/InOutputFields";
import Navmenu from "../components/Navbar";
import Valueinfo from "../components/Valueinfofields";
import Header from "../components/Header";
import styled from "styled-components";
import {useState, useEffect} from "react";

export default function Home() {
  const [budget, setBudget] = useState(0);
  const [reset, setReset] = useState(0);
  const [currentbudget, setCurrentBudget] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [addvalue, setAddvalue] = useState(0);
  const [minusvalue, setMinusValue] = useState(0);

  useEffect(() => {
    setCurrentBudget(budget + addvalue + minusvalue);
  }, [addvalue, minusvalue, budget]);

  useEffect(() => {
    if (budget) {
      setPercentage(Math.round((currentbudget / budget) * 100));
    }
  }, [budget, currentbudget]);
  function handleChangeBudget(newBudget) {
    setBudget(newBudget);
  }
  function handlePrecent() {
    setPercentage(percentage);
  }
  function handleAdd50() {
    setAddvalue(addvalue + 50);
  }
  function handleAdd100() {
    setAddvalue(addvalue + 100);
  }
  function handleSubtract50() {
    setMinusValue(minusvalue - 50);
  }
  function handleSubtract100() {
    setMinusValue(minusvalue - 100);
  }
  function handleReset() {
    setReset(0);
    setPercentage(percentage - percentage);
    setBudget(budget - budget);
    setAddvalue(0);
    setMinusValue(0);
  }
  return (
    <Homepage>
      <Header />
      <Entryfield
        budget={budget}
        percentage={percentage}
        onChangeBudget={handleChangeBudget}
        onChangePercent={handlePrecent}
      />
      <Navmenu />
      <Valuefields
        handleAdd100={handleAdd100}
        handleSubtract50={handleSubtract50}
        handleAdd50={handleAdd50}
        handleSubtract100={handleSubtract100}
      />
      <Progress
        addvalue={addvalue}
        percentage={percentage}
        budget={budget}
        minusvalue={minusvalue}
        onReset={handleReset}
      />
      <Valueinfo
        reset={reset}
        minusvalue={minusvalue}
        addvalue={addvalue}
        budget={budget}
      />
    </Homepage>
  );
}

const Homepage = styled.div`
  border: none;
`;
