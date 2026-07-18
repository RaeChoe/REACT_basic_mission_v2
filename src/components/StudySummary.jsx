import { useMemo } from "react";

export default function StudySummary({ total, visible, favorite, renderCount }) {
  const summary = useMemo(() => {
    return {
      total: total.length,
      visible: visible.length,
      favorite: favorite.length,
      renderCount: renderCount.current,
    };
  }, [visible, favorite]);

  return (
    <article>
      <p>전체 항목: {summary.total}개</p>
      <p>현재 표시: {summary.visible}개</p>
      <p>즐겨찾기: {summary.favorite}개</p>
      <p>App 렌더링 횟수: {summary.renderCount}</p>
    </article>
  );
}
