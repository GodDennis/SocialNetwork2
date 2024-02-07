import s from "./DialogSearchBar.module.scss";
export const DialogSearchBar = () => {
    return (
        <div className={s.searchBar}>
            <span className={s.search__icon}>
                <img
                    src='https://cdn-icons-png.flaticon.com/512/116/116836.png?w=826&t=st=1686105248~exp=1686105848~hmac=f0281eaaf1b81b04169e2d7a25e8bcca890590607bd948a4070c57fece8db546'
                    width='15px'
                    alt=''
                />
            </span>

            <input
                className={s.search}
                type='text'
                placeholder='Поиск'
            />
        </div>
    );
};
