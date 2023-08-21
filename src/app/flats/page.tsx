'use client';

import { useEffect, useRef } from 'react';

export default function Page() {
  const cont = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (cont.current) {
        const lastDiv = cont.current.lastChild as HTMLDivElement;

        const lastDivOffset = lastDiv.offsetTop + lastDiv.clientHeight;

        const pageOffset = window.scrollY + window.innerHeight;

        console.log(lastDivOffset, pageOffset);

        if (pageOffset > lastDivOffset - 40) {
          console.log('WORK');
          const dd = document.createElement('div');

          dd.style.backgroundColor = '#000';
          dd.style.marginBottom = '10px';
          dd.style.height = '100px';
          cont.current.appendChild(dd);
        }
      }
    });
  }, []);

  return (
    <div ref={cont}>
      <div
        style={{
          backgroundColor: '#000',
          marginBottom: '10px',
          height: '100px',
        }}
      ></div>
      <div
        style={{
          backgroundColor: '#000',
          marginBottom: '10px',
          height: '100px',
        }}
      ></div>

      <div
        style={{
          backgroundColor: '#000',
          marginBottom: '10px',
          height: '100px',
        }}
      ></div>

      <div
        style={{
          backgroundColor: '#000',
          marginBottom: '10px',
          height: '100px',
        }}
      ></div>

      <div
        style={{
          backgroundColor: '#000',
          marginBottom: '10px',
          height: '100px',
        }}
      ></div>
      <div
        style={{
          backgroundColor: '#000',
          marginBottom: '10px',
          height: '100px',
        }}
      ></div>
      <div
        style={{
          backgroundColor: '#000',
          marginBottom: '10px',
          height: '100px',
        }}
      ></div>
      <div
        style={{
          backgroundColor: '#000',
          marginBottom: '10px',
          height: '100px',
        }}
      ></div>
      <div
        style={{
          backgroundColor: '#000',
          marginBottom: '10px',
          height: '100px',
        }}
      ></div>
    </div>
  );
}
