import React, { useState, useLayoutEffect } from 'react';

export type PropsWithLoadingError<G> = {
  loading?: boolean;
  error?: string;
} & G;

export const WithLoadingErrorData = <
  U extends object | undefined,
  K,
  T extends { data?: K; loading?: boolean; error?: string },
  Args = U | 'empty'
>(
  WrappedComponent: React.FC<T>,
  getFunction: (args: U) => Promise<K>
) => {
  const cache = new Map<Args, K>();

  return function Comp(props: T & { args?: U }) {
    const [data, setData] = useState<K>();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const addToCache = (value: K, argsToAdd: Args) => {
      cache.set(argsToAdd, value);
      setData(value);
    };

    useLayoutEffect(() => {
      const args: Args = (props?.args as Args) || ('empty' as Args);

      if (cache.has(args)) {
        setData(cache.get(args));
        console.log('Got from cache');
        return;
      }

      setLoading(true);

      getFunction(props.args as U)
        .then((res: K) => addToCache(res, args))
        .catch(setError)
        .finally(() => setLoading(false));
    }, [props.args]);

    return (
      <WrappedComponent
        data={data}
        loading={loading}
        error={error}
        {...props}
      />
    );
  };
};
