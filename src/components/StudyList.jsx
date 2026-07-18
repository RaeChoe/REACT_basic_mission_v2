import StudyItem from "./StudyItem";

export default function StudyList({ items, selectedId, onSelect, favoriteIds, onToggleFavorite }) {
  return (
    <>
      <h2>학습 목록</h2>

      <section>
        {items.length === 0 ? (
          <p>표시할 학습 항목이 없습니다.</p>
        ) : (
          items.map(item => (
            <StudyItem
              key={item.id}
              item={item}
              isSelected={item.id === selectedId}
              isFavorite={favoriteIds.includes(item.id)}
              onSelect={onSelect}
              onToggleFavorite={onToggleFavorite}
            />
          ))
        )}
      </section>
    </>
  );
}
