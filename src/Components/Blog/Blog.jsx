import React from 'react';

const Blog = () => {
    return (
        <div className='m-12'>
            <div className='mb-8'>
                <h1 className='text-2xl font-bold'>1 . When should you use context API?</h1>
                <p className='text-slate-600 mt-4'><span className='text-xl font-bold text-orange-600'>Ans</span> : The React Context API is a way to pass data down the component tree without having to pass props manually at every level. It is useful when you have data that needs to be shared across multiple components, but the components are not directly related in the component hierarchy.</p>
            </div>
            <div className='mb-8'>
                <h1 className='text-2xl font-bold'>2 . What is a custom hook?</h1>
                <p className='text-slate-600 mt-4'><span className='text-xl font-bold text-orange-600'>Ans</span> : A custom hook is a JavaScript function that starts with the prefix "use" and follows the rules of React hooks. A custom hook allows you to extract reusable logic from a React component and share it between multiple components. With custom hooks, you can create your own abstractions on top of the existing React hooks, allowing you to reuse code more easily and make your code more modular and reusable.</p>
            </div>
            <div className='mb-8'>
                <h1 className='text-2xl font-bold'>3 . What is useRef?</h1>
                <p className='text-slate-600 mt-4'><span className='text-xl font-bold text-orange-600'>Ans</span> : useRef is a React hook that provides a way to create a mutable reference to a DOM element or any other value that persists between renders. It allows you to access and manipulate the properties of a component's underlying DOM element directly, without needing to re-render the component.</p>
            </div>
            <div className='mb-8'>
                <h1 className='text-2xl font-bold'>4 . What is useMemo?</h1>
                <p className='text-slate-600 mt-4'><span className='text-xl font-bold text-orange-600'>Ans</span> :useMemo is a React hook that allows you to optimize the performance of your application by memoizing the results of expensive computations. It is used to cache the result of a function call and only recompute the result if one or more of its dependencies have changed.

</p>
            </div>
        </div>
    );
};

export default Blog;