import React from 'react'

 function NotFound() {
  return (
    <div className='not-found'> 
      <h1 className='clr-primary-700 fw-bold fs-900'>404</h1>
      <h2 className='fs-500'>opps! page not found</h2>
      <p className='fs-600'>The page you are looking for <strong className='clr-primary-700'> does not exist</strong>.</p>
      <a href="./">
                <button className='btn-red'>Go back</button>
            </a>
    </div>
  );
}
export default NotFound;