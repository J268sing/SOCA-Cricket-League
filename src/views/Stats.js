import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../utils/SectionProps';
//import SectionHeader from '../components/sections/partials/SectionHeader';
import Testimonial from '../components/elements/Testimonial'
import PointsTableItem from '../components/elements/PointsTable'
import MatchList from '../components/elements/MatchList'
import MatchSummaryListView from '../components/elements/MatchSummaryListView';
import { Divider } from '@material-ui/core';



const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Stats = ({
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

  const innerClasses = classNames(
    'teams-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );
 
  
  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <div>


<PointsTableItem></PointsTableItem> 
         
          <MatchList className="mb-32 has-top-divider"></MatchList>
          <Divider ></Divider>
          <MatchList className="mb-32 has-top-divider"></MatchList>
          <Divider></Divider>
          <MatchList className="mb-32 has-top-divider"></MatchList>
          <Divider></Divider>
          <MatchList className="mb-32 has-top-divider"></MatchList>
          <Divider></Divider>
          <MatchList className="mb-32 has-top-divider"></MatchList>
          <Divider></Divider>
          <MatchList className="mb-32 has-top-divider"></MatchList>
          <Divider></Divider>
          <MatchList className="mb-32 has-top-divider"></MatchList>
          <Divider></Divider>
          <MatchList className="mb-32 has-top-divider"></MatchList>
          <Divider></Divider>
          <MatchList className="mb-32 has-top-divider"></MatchList>
          <Divider></Divider>
           
          


  




          </div>
        </div>
      </div>
    </section>
  );
}

Stats.propTypes = propTypes;
Stats.defaultProps = defaultProps;

export default Stats;