import React, { FC, useEffect, useState, lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
const Button = lazy(() => import('@components/button'));


const DetailPage: FC = () => {

    //     const [Button,setButton] = useState<any>();

    //   useEffect(() => {
    //     import('@components/button').then((res) => {
    //       setButton(res);
    //     })
    //   },[])



    return (
        <div>
            detail 页面
            {/* <Suspense>
            <Button text='detail 页面 异步加载按钮' />
            </Suspense> */}
            <Link to='/' >前往 list 页面</Link>

        </div>
    )
};

export default DetailPage;