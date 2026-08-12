import React from 'react';
import * as MarqueeModule from 'react-fast-marquee';

const Marquee = MarqueeModule.default.default;

const LatestNews = () => {
    return (
        <div className='flex items-center bg-base-200 gap-3 p-3'>
            <p className='text-base-100 bg-secondary px-3 py-2'>
                Latest
            </p>

            <Marquee speed={40} className="flex gap-5" pauseOnHover = {true}>
                <p className = "font-semibold">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Mollitia, perspiciatis.
                </p>
                <p className = "font-semibold">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Mollitia, perspiciatis.
                </p>
                <p className = "font-semibold">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Mollitia, perspiciatis.
                </p>
            </Marquee>
        </div>
    );
};

export default LatestNews;