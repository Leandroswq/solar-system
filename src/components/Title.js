import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { headline, classNameProp } = this.props;
    return (
      <h2 className={ classNameProp }>
        {headline}
      </h2>
    );
  }
}

Title.propTypes = {
  headline: PropTypes.string.isRequired,
  classNameProp: PropTypes.string.isRequired,
};

export default Title;
