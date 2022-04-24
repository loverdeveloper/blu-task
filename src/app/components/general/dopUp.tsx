import React, { ReactNode, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import cn from "classnames";

export interface DropUpProps {
  children?: ReactNode;
  isOpen?: boolean;
  onClickOutside?: () => void;
  className?: string;
}
export const DropUp: React.FC<DropUpProps> = ({ children, isOpen, onClickOutside, className }) => {
  const opacityStyles = useSpring({ opacity: isOpen ? 1 : 0 });
  const dropStyles = useSpring({ bottom: isOpen ? "50%" : "0%" });

  useEffect(
    function () {
      if (isOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "unset";
      }
    },
    [isOpen],
  );

  return (
    <animated.div
      style={opacityStyles}
      className={cn("fixed top-0 left-0 w-full h-full", className, {
        "pointer-events-none": !isOpen,
      })}
    >
      <animated.div
        style={opacityStyles}
        className="absolute w-full h-full bg-gray-800 bg-opacity-50"
        onClick={onClickOutside}
      />
      <animated.div
        style={dropStyles}
        className="absolute shadow w-[80%] bg-white overflow-hidden rounded-xl left-[50%] transform -translate-x-1/2 translate-y-1/2"
      >
        {children}
      </animated.div>
    </animated.div>
  );
};
