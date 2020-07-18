import React, {useState} from "react";
import style from "./Paginator.module.css"

const Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionCount}) => {
    const [currentPortion, setCurrentPortion] = useState(1);
    const leftPotionItem = (currentPortion - 1) * portionCount + 1;
    const rightPotionItem = currentPortion * portionCount;
    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    const lastPortion = Math.ceil(pagesCount / portionCount);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={style.paginator}>
            {totalItemsCount > 0
            && <button onClick={() => setCurrentPortion(currentPortion - 1)}
                       disabled={!(currentPortion >= 2)}>{"<"}</button>}
            {
                pages
                    .filter((p => p >= leftPotionItem && p <= rightPotionItem))
                    .map(p => <span className={currentPage === p ? style.selectedPage : style.page}
                                    onClick={() => onPageChanged(p)} key={p}>{p}</span>)
            }
            {totalItemsCount > 0
            && <button onClick={() => setCurrentPortion(currentPortion + 1)}
                       disabled={!(currentPortion >= 1 && currentPortion !== lastPortion)}>{">"}</button>}
        </div>
    )
};

export default Paginator;
