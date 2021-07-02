import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../utils/SectionProps';
import ButtonGroup from '../components/elements/ButtonGroup';
import Button from '../components/elements/Button';
import Image from '../components/elements/Image';
import Modal from '../components/elements/Modal';
import FeaturesSplit from '../components/sections/FeaturesSplit';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const About = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  }

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  }   

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

  const aboutOfficials = [{position: 'CEO', name: 'Parveen Sharma', infoo: 'He tookover SOCA in 1989 and since then, he has taken it to new heights. His missing is to grow the popularity of the great game of cricket in southern Ontario and all over Canada.'},
    {position: 'President', name: 'Hariharan Krithivasan', infoo: 'not much'},
    {position: 'Vice-President', name: 'Ayaz Karim', infoo: 'not much'},
    {position: 'Secretary', name: 'Shakil Patel', infoo: 'not much'},
    {position: 'Coach', name: 'Gagandeep Singh', infoo: 'not much'}] 

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        
        <FeaturesSplit position={aboutOfficials[0].position} name={aboutOfficials[0].name} infoo={aboutOfficials[0].infoo} invertMobile  imageFill className="illustration-section-02 " invertDesktop />
        <FeaturesSplit position={aboutOfficials[1].position} name={aboutOfficials[1].name} infoo={aboutOfficials[1].infoo} invertMobile  imageFill className="illustration-section-02 "  />
        <FeaturesSplit position={aboutOfficials[2].position} name={aboutOfficials[2].name} infoo={aboutOfficials[2].infoo} invertMobile  imageFill className="illustration-section-02 " invertDesktop />
        <FeaturesSplit position={aboutOfficials[3].position} name={aboutOfficials[3].name} infoo={aboutOfficials[3].infoo} invertMobile  imageFill className="illustration-section-02 "  />
        <FeaturesSplit position={aboutOfficials[4].position} name={aboutOfficials[4].name} infoo={aboutOfficials[4].infoo} invertMobile  imageFill className="illustration-section-02 " invertDesktop />
      </div>
    </section>
  );
}

About.propTypes = propTypes;
About.defaultProps = defaultProps;

export default About;