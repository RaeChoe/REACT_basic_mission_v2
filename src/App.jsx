import "./App.css";
import reactData from "./data/data.json";
import StudyList from "./components/StudyList";
import StudySummary from "./components/StudySummary";
import { useState, useMemo } from "react";

function App() {
  const [selectedId, setSelectedId] = useState(null);
  const [category, setCategory] = useState("all");
  const [keyword, setKeyword] = useState("");
  const [favoriteIds, setFavoriteIds] = useState([]);
  const [favoriteOnly, setFavoriteOnly] = useState(false);

  const onSelect = id => {
    setSelectedId(id);
  };

  const onFavorite = id => {
    setFavoriteIds(prev =>
      prev.includes(id) ? prev.filter(itemId => itemId !== id) : [...prev, id],
    );
  };

  const filteredData = useMemo(() => {
    return reactData.filter(item => {
      const categoryMatch = category === "all" || category === item.category;
      const keywordMatch = item.title.toLowerCase().includes(keyword.toLowerCase());
      const favoriteMatch = !favoriteOnly || favoriteIds.includes(item.id);
      return categoryMatch && keywordMatch && favoriteMatch;
    });
  }, [keyword, category, favoriteOnly, favoriteIds]);

  return (
    <>
      <h1>React Mission 7</h1>
      <p>전체 학습 항목수 : {reactData.length}개</p>
      <hr />
      <h2>필터</h2>
      <div className="button-group">
        <button className={category === "all" ? "active" : ""} onClick={() => setCategory("all")}>
          All
        </button>
        <button
          className={category === "concept" ? "active" : ""}
          onClick={() => setCategory("concept")}
        >
          concept
        </button>
        <button
          className={category === "library" ? "active" : ""}
          onClick={() => setCategory("library")}
        >
          library
        </button>
        <button className={category === "hook" ? "active" : ""} onClick={() => setCategory("hook")}>
          hook
        </button>
      </div>
      <hr />
      <h2>검색</h2>
      <input
        type="text"
        value={keyword}
        placeholder="제목 검색"
        onChange={e => {
          setKeyword(e.target.value);
        }}
      />
      <hr />
      <button
        type="button"
        onClick={() => {
          setFavoriteOnly(prev => !prev);
        }}
      >
        {favoriteOnly ? "전체 항목 보기" : "즐겨찾기만 보기"}
      </button>
      <StudySummary total={reactData} visible={filteredData} favorite={favoriteIds} />
      <StudyList
        items={filteredData}
        onSelect={onSelect}
        selectedId={selectedId}
        favoriteIds={favoriteIds}
        onFavorite={onFavorite}
      />
    </>
  );
}

export default App;
