import React from "react";
import PropTypes from 'prop-types';

function Toolbar(props) {
    const { filters, selected, onSelectFilter } = props;
    return (
        <div className="buttons">
            {filters.map((item, index) =>
            <button
            onClick={(item) => onSelectFilter(item.currentTarget.innerText)}
            key={index}
            value={item}
            type={'button'}
            className={item===selected ? 'button-selected': 'button'}
            >{item}
            </button>
            )}
        </div>
    );
}

Toolbar.propTypes = {
    filters: PropTypes.array,
    selected: PropTypes.string,
    onSelectfilter: PropTypes.func,
}

export default Toolbar;