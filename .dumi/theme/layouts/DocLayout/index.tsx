import DocLayout from 'dumi/theme-default/layouts/DocLayout';
import React, { useEffect, useState } from 'react';
import { service } from 'ndzy-utils';

const GlobalLayout = () => {
  // const [s, setS] = useState(false);

  // useEffect(() => {
  //   service({ url: 'users/loginInfo', method: 'GET' }).then((res) => {
  //     console.log(res);

  //     if (res.status === 11) {
  //       setS(true);
  //     }
  //   });
  // }, []);

  // return s && <DocLayout />;
  return <DocLayout />;
};

export default GlobalLayout;
