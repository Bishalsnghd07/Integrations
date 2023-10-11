import { useMemo, useState } from "react";



const Header = ({
  group15,
  group62,
  vector40,
  search,
  group45,
  questionIcon4,
  headerWidth,
  headerHeight,
  headerPosition,
  headerTop,
  headerLeft,
  searchByEmployeeFontSize,
  frameDivPadding,
  frameDivGap,
  groupIconWidth,
  groupIconHeight,
  inviteMembersFontSize,
  questionIcon4Top,
  questionIcon4Left,
  questionIcon4Width,
  questionIcon4Height,
}) => {
  const headerStyle = useMemo(() => {
    return {
      width: headerWidth,
      height: headerHeight,
      position: headerPosition,
      top: headerTop,
      left: headerLeft,
    };
  }, [headerWidth, headerHeight, headerPosition, headerTop, headerLeft]);

  const searchByEmployeeStyle = useMemo(() => {
    return {
      fontSize: searchByEmployeeFontSize,
    };
  }, [searchByEmployeeFontSize]);

  const frameDivStyle = useMemo(() => {
    return {
      padding: frameDivPadding,
      gap: frameDivGap,
    };
  }, [frameDivPadding, frameDivGap]);

  const groupIcon1Style = useMemo(() => {
    return {
      width: groupIconWidth,
      height: groupIconHeight,
    };
  }, [groupIconWidth, groupIconHeight]);

  const inviteMembersStyle = useMemo(() => {
    return {
      fontSize: inviteMembersFontSize,
    };
  }, [inviteMembersFontSize]);

  const questionIcon4Style = useMemo(() => {
    return {
      top: questionIcon4Top,
      left: questionIcon4Left,
      width: questionIcon4Width,
      height: questionIcon4Height,
    };
  }, [
    questionIcon4Top,
    questionIcon4Left,
    questionIcon4Width,
    questionIcon4Height,
  ]);

  const [isEditing, setIsEditing] = useState(false);
  const [textInput, setTextInput] = useState('');

  const handleTextClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    setTextInput(e.target.value);
  };

  const handleInputBlur = () => {
    setIsEditing(false);
  };

  return (
    <div
      className="sticky top-0 left-[4.46rem] sm:left-[16.25rem] w-[104rem] sm:w-[88.24rem] md:w-[68.32rem] z-10 lg:w-[85.4rem] xl:w-[102.48rem] h-[5.64rem] sm:h-[4.44rem] text-left text-base text-darkslategray font-poppins"
      style={headerStyle}
    >
      <div className="absolute h-[98.59%] w-[99.94%] top-[0%] right-[0.06%] bottom-[1.41%] left-[0%] bg-white" />
      <img
        className="absolute h-[36.62%] w-[1.22%] top-[32.39%] right-[7.3%] bottom-[30.99%] left-[91.48%] max-w-full overflow-hidden max-h-full cursor-pointer"
        // className="flex h-8 md:h-10 md:ml-10 md:pl-5 border border-[#303030] rounded-l-3xl group-focus-within:border-blue-500 md:group-focus-within:ml-5 md:group-focus-within:pl-0"
        alt=""
        src={group15}
      />
      <img
        className="absolute h-[50.7%] w-[3.6%] top-[23.94%] right-[1.89%] bottom-[25.35%] left-[94.51%] max-w-full overflow-hidden max-h-full cursor-pointer"
        alt=""
        src={group62}
      />
      <img
        className="absolute h-[7px] w-[10px] top-[44.04%] right-[0.85%] bottom-[15.35%] left-[97.81%] max-w-full overflow-hidden max-h-full cursor-pointer"
        alt=""
        src={vector40}
      />
      <div className="absolute h-[1.41%] w-full top-[99.3%] right-[0.03%] bottom-[-0.7%] left-[-0.03%] box-border border-t-[1px] border-solid border-whitesmoke-200 overflow-hidden"
      onClick={() => {
        console.log('Clicked on the div as a button');
      }}
      style={{ cursor: 'pointer'}} 
      />
      <div className="absolute h-[71.97%] sm:h-[61.97%] w-[48.59%] top-[18.31%] right-[58.29%] bottom-[19.72%] left-[5.12%]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-8xs bg-whitesmoke-100" />

        {isEditing ? (
          <input
            type="text"
            className="absolute w-[47.18%] h-[50.50%] top-[26.73%] left-[8.83%] inline-block"
            value={textInput}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            autoFocus
          />
        ) : (
        <div
          className="absolute w-[72.18%] sm:w-[62.18%] sm:h-[88.88%] top-[29.73%] sm:top-[22.73%] left-[8.83%] inline-block cursor-pointer text-xl sm:text-base"
          style={searchByEmployeeStyle}
          onClick={handleTextClick}
        >
          Search by employee or application
        </div>
        )}
        <img
          className="absolute h-[40.91%] w-[3%] top-[29.55%] right-[92.96%] bottom-[29.55%] left-[4.04%] max-w-full overflow-hidden max-h-full cursor-pointer"
          alt=""
          src={search}
        />
      </div>
      <div
        className="absolute h-[56.34%] w-[12.07%] top-[21.13%] right-[10.3%] bottom-[22.54%] left-[77.62%] rounded-8xs bg-lavender flex flex-row items-center justify-start py-2 px-5 box-border gap-[10px] text-primery"
        style={frameDivStyle}
      >
        <img
          className="relative w-[22px] h-4 cursor-pointer"
          alt=""
          src={group45}
          style={groupIcon1Style}
        />
        <div className="relative cursor-pointer" style={inviteMembersStyle}>
          Invite members
        </div>
      </div>
      <img
        className="absolute top-[4.437rem] sm:top-[1.437rem] left-[25px] sm:left-[27px] w-6 h-6 overflow-hidden cursor-pointer"
        alt=""
        src={questionIcon4}
        style={questionIcon4Style}
      />
    </div>
  );
};

export default Header;
