import { useMemo } from "react";

const Group = ({
  groupGroup55,
  groupIconWidth,
  groupIconHeight,
  groupIconPosition,
  groupIconTop,
  groupIconLeft,
}) => {
  const groupIconStyle = useMemo(() => {
    return {
      width: groupIconWidth,
      height: groupIconHeight,
      position: groupIconPosition,
      top: groupIconTop,
      left: groupIconLeft,
    };
  }, [
    groupIconWidth,
    groupIconHeight,
    groupIconPosition,
    groupIconTop,
    groupIconLeft,
  ]);

  return (
    <img
      className="w-16 h-16"
      alt=""
      src={groupGroup55}
      style={groupIconStyle}
    />
  );
};

export default Group;
