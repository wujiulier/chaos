import React, { FC, useEffect, useState, lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
const Button = lazy(() => import('@components/button'));


const ListPage: FC = () => {

    //     const [Button,setButton] = useState<any>();

    //   useEffect(() => {
    //     import('@components/button').then((res) => {
    //       setButton(res);
    //     })
    //   },[])


    return (
        <div>
            list 页面ddd
            {/* <Suspense>
            <Button text='list 页面 异步加载按钮' />
            </Suspense> */}
            <Link to='/detail' >前往 detail 页面</Link>
        </div>
    )
};

export default ListPage;