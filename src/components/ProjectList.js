import React from "react";
import PropTypes from 'prop-types';

function ProjectList(props) {
    const {projects} = props;
    return (
        <div className="list">
            {projects.map((element, index) =>
            <img
            key={index}
            alt={element.category}
            src={element.img}
            className={element.category}
            />)}
        </div>
    );
}

ProjectList.propTypes = {
    projects: PropTypes.array
}

export default ProjectList;