import React from 'react';
import classNames from 'classnames';
import { useParams} from 'react-router-dom';
import { SectionTilesProps } from '../utils/SectionProps';
import ListView from '../components/elements/ListView';
import SectionHeader from '../components/sections/partials/SectionHeader';
const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Sponsors = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
 

  const outerClasses = classNames(
    'teams section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );
 


  const sectionHeader = {
    title: 'Why become a sponsor?',
    paragraph: 'Each year, our sponsors help us unite emerging cricketers all over southern Ontario. Our sponsors provide mentorship, equipments, and networking opportunities to support our players from around the world. Participants make lasting connections with our sponsors that extend past SOCA season. Stay tuned as we confirm more sponsors for the league.'
  };


  return (
    <section
      {...props}
      className={outerClasses}
    >





<SectionHeader data={sectionHeader} />



    </section>
  );
}

Sponsors.propTypes = propTypes;
Sponsors.defaultProps = defaultProps;

export default Sponsors; 