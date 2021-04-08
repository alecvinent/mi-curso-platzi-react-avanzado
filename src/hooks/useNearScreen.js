import {useState, useEffect, useRef} from "react";

export const useNearScreen = () => {
  const elemento = useRef(null);
  const [show, setShow] = useState(false);

  // para procesar si el elemento está siendo visualizado por el usuario, o sea,
  // que esté en el viewport
  useEffect(function () {
    // importar sólo a demanda
    Promise.resolve(
      typeof window.IntersectionObserver !== 'undefined'
        ? window.IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      const observer = new window.IntersectionObserver(function (entries) {
        const {isIntersecting} = entries[0];
        if (isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      });
      observer.observe(elemento.current);
    });
  }, [elemento]);

  return [show, elemento]
};
