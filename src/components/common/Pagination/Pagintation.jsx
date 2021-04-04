import s from "./Pagionation.module.css";
import {useState} from "react";

const Pagintaion = (props) => {



    let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++)
        pages.push(i);

    let portionCount = Math.ceil(pagesCount / props.portionSize)
    let [portionNumber,setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * props.portionSize + 1;
    let rightPortionNumber =  portionNumber * props.portionSize
    return (
        <div className={s.pagination}>
            {portionNumber > 1 && <button className={s.button_prev} onClick={() => {setPortionNumber(portionNumber - 1)}}> > </button>}

            {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionNumber).map(p => {
                return <span onClick={(e) => {
                    props.onPageChanged(p)
                }} className={props.currentPage === p ? s.selected_page : s.page_item}>{p}</span>
            })}

            {portionCount > portionNumber &&  <button className={s.button} onClick={() => {setPortionNumber(portionNumber + 1)}}> > </button>}
        </div>
    )
}

export default Pagintaion;