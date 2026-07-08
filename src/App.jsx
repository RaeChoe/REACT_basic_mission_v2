import { useEffect, useState } from "react";
import "./App.css";
import data from "./data/data.json";
import StudyInfo from "./components/StudyInfo";
import StudyList from "./components/StudyList";

function App() {
  const [list, setList] = useState(data);
  console.log(list);
  const [selectedId, setSelectedId] = useState(null);

  const onSelect = _id => {
    setSelectedId(_id);
  };

  return (
    <div className="container text-center py-5">
      <h1>React Basic Review Mission 2</h1>
      <p>전체 학습 항목 수: {list.length}개</p>
      <StudyInfo title={list[0].title} desc={list[0].desc} category={list[0].category} />
      <StudyList items={list} onSelect={onSelect} selectedId={selectedId} />
    </div>
  );
}

export default App;
