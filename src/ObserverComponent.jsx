import { useState, useRef, useEffect } from "react";

export function ObserverComponent(props) {
  // const { ref: containerRef, inView: isVisible, entry } = useInView(options);
  //handle for ref div
  const containerRef = useRef(null);
  //variable for if ref is intersecting
  const [isVisible, setIsVisible] = useState(false);
  //variable for if ref has been activated
  const [isActivated, setIsActivated] = useState(false);

  const [name, setName] = useState(props.name);

  const callbackFunction = (entries) => {
    const [entry] = entries;
    //set is visible
    setIsVisible(entry.isIntersecting);
    if (isVisible == true) {
      props.settingVisible();
    } else {
      props.settingNotVisible();
    }
  };
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      // if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [containerRef, options]);

  return (
    <div className={props.mainDivClass}>
      {/* <div className="isVisible">{isVisible ? `${name} is visible` : ""}</div> */}
      <span className={` ${isActivated ? props.afterAnim : props.beforeAnim}`}>
        <div ref={containerRef}>
          {props.textContent}
          {props.children}
        </div>
      </span>
    </div>
  );
}
