import symbolDefs from 'assets/images/symbol-defs.svg';

export const Filter = ({inputValue, onChange}) => {
    return (
        <>
            <label htmlFor='search'>
                <svg>
                    <use href={`${symbolDefs}#search`}></use>
                </svg>
            </label>
            <input
                type="text"
                id='search'
                value={inputValue}
                onChange={onChange}
                placeholder="Search by name..."
            /> 
        </>
    )
}