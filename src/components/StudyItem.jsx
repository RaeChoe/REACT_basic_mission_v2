import { memo } from "react";

function StudyItem({ item, isSelected, isFavorite, onSelect, onToggleFavorite }) {
  console.log(`${item.title} 렌더링`);

  return (
    <article className={isSelected ? "active" : ""} onClick={() => onSelect(item.id)}>
      <div>
        <h3>{item.title}</h3>
        <p>{item.desc}</p>
        <p>분류: {item.category}</p>

        {isSelected && <p>선택된 항목입니다</p>}
      </div>

      <button
        type="button"
        onClick={() => {
          onToggleFavorite(item.id);
        }}
      >
        {isFavorite ? "★ 즐겨찾기 해제" : "☆ 즐겨찾기"}
      </button>
    </article>
  );
}

export default memo(StudyItem);
