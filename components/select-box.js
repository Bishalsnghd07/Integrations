import { useMemo } from "react";

const SelectBox = ({
  selectBox,
  vector,
  selectBoxPadding,
  selectBoxGap,
  selectBoxPosition,
  selectBoxTop,
  selectBoxLeft,
  selectBoxFontSize,
  frameDivHeight,
  frameDivPadding,
  vectorIconWidth,
  vectorIconHeight,
}) => {
  const selectBoxStyle = useMemo(() => {
    return {
      padding: selectBoxPadding,
      gap: selectBoxGap,
      position: selectBoxPosition,
      top: selectBoxTop,
      left: selectBoxLeft,
    };
  }, [
    selectBoxPadding,
    selectBoxGap,
    selectBoxPosition,
    selectBoxTop,
    selectBoxLeft,
  ]);

  const selectBox1Style = useMemo(() => {
    return {
      fontSize: selectBoxFontSize,
    };
  }, [selectBoxFontSize]);

  const frameDivStyle = useMemo(() => {
    return {
      height: frameDivHeight,
      padding: frameDivPadding,
    };
  }, [frameDivHeight, frameDivPadding]);

  const vectorIconStyle = useMemo(() => {
    return {
      width: vectorIconWidth,
      height: vectorIconHeight,
    };
  }, [vectorIconWidth, vectorIconHeight]);

  return (
    <div
      className="rounded-8xs bg-white overflow-hidden flex flex-row items-center justify-start py-0 pr-0 pl-5 gap-[8px] text-left text-base text-sub-heading font-poppins border-[1px] border-solid border-whitesmoke-200"
      style={selectBoxStyle}
    >
      <div className="relative" style={selectBox1Style}>
        {selectBox}
      </div>
      <div
        className="bg-mediumslateblue h-11 flex flex-row items-center justify-center p-5 box-border"
        style={frameDivStyle}
      >
        <img
          className="relative w-3 h-[7px]"
          alt=""
          src={vector}
          style={vectorIconStyle}
        />
      </div>
    </div>
  );
};

export default SelectBox;
