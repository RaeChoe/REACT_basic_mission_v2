import { useState } from "react";
import "./StudyList.css";

export default function StudyList({ items, onSelect, selectedId }) {
  const [category, setCategory] = useState("all");
  const [keyword, setKeyword] = useState("");

  const filteredItems = category === "all" ? items : items.filter(i => i.category === category);

  const studyList = filteredItems.map(f => {
    return (
      <div className="card mb-3">
        <div
          key={f.id}
          onClick={() => {
            onSelect(f.id);
          }}
          className={selectedId === f.id ? "card-body active" : "card-body"}
        >
          <h3>
            {f.id}. {f.title}
          </h3>
          <p>{f.desc}</p>
          <p>분류 : {f.category}</p>
          {selectedId === f.id && <p className="fw-bold">선택된 항목입니다.</p>}
        </div>
      </div>
    );
  });

  return (
    <>
      <h2 className="m-3">카테고리 필터</h2>
      <div className="d-flex justify-content-center gap-2 mb-4">
        <button className="btn btn-outline-secondary" onClick={() => setCategory("all")}>
          전체
        </button>
        <button className="btn btn-outline-secondary" onClick={() => setCategory("concept")}>
          concept
        </button>
        <button className="btn btn-outline-secondary" onClick={() => setCategory("library")}>
          library
        </button>
        <button className="btn btn-outline-secondary" onClick={() => setCategory("hook")}>
          hook
        </button>
      </div>

      <h2 className="m-3">검색</h2>
      <input
        className="form-control m-3"
        type="text"
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
      />

      <h2>학습 목록</h2>
      {studyList}
    </>
  );
}
