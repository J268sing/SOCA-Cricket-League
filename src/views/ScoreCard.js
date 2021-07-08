import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../utils/SectionProps';

import Image from '../components/elements/Image';

const propTypes = {
    ...SectionProps.types
}

const defaultProps = {
    ...SectionProps.defaults
} 

const ScoreCard = ({
    className,
    topOuterDivider,
    bottomOuterDivider,
    topDivider,
    bottomDivider,
    hasBgColor,
    invertColor,
    ...props
}) => {



    const outerClasses = classNames(
        'hero section center-content',
        topOuterDivider && 'has-top-divider',
        bottomOuterDivider && 'has-bottom-divider',
        hasBgColor && 'has-bg-color',
        invertColor && 'invert-color',
        className
    );

    const innerClasses = classNames(
        'hero-inner section-inner',
        topDivider && 'has-top-divider',
        bottomDivider && 'has-bottom-divider'
    );



    return (
        <section
            {...props}>
            <div >
                <div className={innerClasses}>
                    <img width="100%" height="100%" src={require('../assets/images/scorecard.jpg')}></img>
                </div>
            </div>     </section>
    );
}

ScoreCard.propTypes = propTypes;
ScoreCard.defaultProps = defaultProps;

export default ScoreCard;