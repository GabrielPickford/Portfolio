import React, { useRef} from 'react';
import './moreinfo.css';

const Moreinfoa = ({ showMore, click }) => {
    const moreInfoRef = useRef(null);

    return (
        <div className={`app__more ${showMore ? 'show' : 'hide'}`} ref={moreInfoRef}>
            {/* <div ref={moreInfoRef} /> */}
            <p className='app__more__p p__opensans'>
                My name is Gabriel Tambare, I am 22 years old and I was born in Santa Cruz, Bolivia,
                although I spent my childhood in Madrid, Spain.
                Currently, I am studying Computer Engineering at the UAGRM in Santa Cruz.
            </p>
            <p className='app__more__p p__opensans'>
                Regarding my work experience, I started working at the age of 18 while at university, mostly in office environments, although I have also had experience in finance.
                I have the skills to work in a team and collaborate with different areas within a company.
            </p>
            <p className='app__more__p p__opensans'>
                Outside of my studies, I have passions that are an integral part of my life.
                Boxing is more than a sport for me, it is a passion that has taught me discipline and determination.
            </p>
            <p className='app__more__p p__opensans'>
                I have also been a fan of cars and racing since I was a child,
                but especially since Fernando Alonso won his first world championship, I am a big fan of Formula 1.
            </p>
            <p className='app__more__p p__opensans'>
                I am also passionate about music and I know how to play several instruments,
                having done concerts and presentations in high school.
            </p>
            <button type="button" className="app__more__button app__more__p" onClick={click}>
                {showMore ? 'Hide' : 'More'}
            </button>
        </div>
    );
};

export default Moreinfoa;
