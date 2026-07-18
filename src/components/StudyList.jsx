export default function StudyList({ items, selectedId, onSelect, favoriteIds, onFavorite }) {
  return (
    <>
      <h2>학습 목록</h2>

      <section>
        {items.length === 0 ? (
          <p>표시할 학습 항목이 없습니다.</p>
        ) : (
          items.map(item => {
            const isFavorite = favoriteIds.includes(item.id);

            return (
              <article
                key={item.id}
                className={item.id === selectedId ? "active" : ""}
                onClick={() => {
                  onSelect(item.id);
                }}
              >
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <p>분류: {item.category}</p>

                  {item.id === selectedId && <p>선택된 항목입니다</p>}
                </div>

                <button
                  type="button"
                  onClick={e => {
                    e.stopPropagation();
                    onFavorite(item.id);
                  }}
                >
                  {isFavorite ? "★ 즐겨찾기 해제" : "☆ 즐겨찾기"}
                </button>
              </article>
            );
          })
        )}
      </section>
    </>
  );
}
