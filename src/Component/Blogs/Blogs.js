import React from 'react';

const Blogs = () => {
    return (
        <div className='px-60'>
            <div className='bg-slate-50 px-7 py-24 rounded-2xl'>
            <h1 className='text-4xl py-4'>What is Context API?</h1>
            <p>Context api is a way of react app which pass global variables. It is a alternative way of prop drilling. Context api  using a state management it's called Redux. Context api returns provider and consumer. provider is grandParent component and consumer is child component.
            </p>
            </div>
            <div className='bg-slate-50 px-7 py-24 rounded-2xl mt-6'>
            <h1 className='text-4xl py-4'>What is semantic tag</h1>
            <p>Semantic tag is a tag of HTML. HTML uses main tag call semantic tag. HTML is article,aside, details,header etc. HTML is use tag call semantic tag. Semantic tag like header use website top part which the user watch. </p>
            </div>
        </div>
    );
};

export default Blogs;