import React, { useMemo } from "react";

const Menu = ({
  vector,
  logo,
  group271,
  hover,
  vector1,
  vector2,
  vector3,
  union,
  vector4,
  vector5,
  vector6,
  group43,
  vector7,
  group44,
  union1,
  vector8,
  group,
  vector9,
  menuWidth,
  menuHeight,
  menuPosition,
  menuTop,
  menuLeft,
  rectangleDivTop,
  rectangleDivLeft,
  rectangleDivWidth,
  rectangleDivHeight,
  charliewebexcomFontSize,
  charliewebexcomLineHeight,
  webexStarshipFontSize,
  webexStarshipLineHeight,
  insightsFontSize,
  applicationsFontSize,
  transactionsFontSize,
  renewalsFontSize,
  employeesFontSize,
  groupDivOpacity,
  integrationsFontSize,
  integrationsColor,
  accountFontSize,
  mENUTop,
  mENULeft,
  mENUFontSize,
  sETTINGSTop,
  sETTINGSLeft,
  sETTINGSFontSize,
  lineDivTop,
  lineDivLeft,
  lineDivWidth,
  lineDivHeight,
  ellipseDivTop,
  ellipseDivLeft,
  ellipseDivWidth,
  ellipseDivHeight,
}) => {
  const menuStyle = useMemo(() => {
    return {
      width: menuWidth,
      height: menuHeight,
      position: menuPosition,
      top: menuTop,
      left: menuLeft,
    };
  }, [menuWidth, menuHeight, menuPosition, menuTop, menuLeft]);

  const rectangleDivStyle = useMemo(() => {
    return {
      top: rectangleDivTop,
      left: rectangleDivLeft,
      width: rectangleDivWidth,
      height: rectangleDivHeight,
    };
  }, [
    rectangleDivTop,
    rectangleDivLeft,
    rectangleDivWidth,
    rectangleDivHeight,
  ]);

  const charliewebexcomStyle = useMemo(() => {
    return {
      fontSize: charliewebexcomFontSize,
      lineHeight: charliewebexcomLineHeight,
    };
  }, [charliewebexcomFontSize, charliewebexcomLineHeight]);

  const webexStarshipStyle = useMemo(() => {
    return {
      fontSize: webexStarshipFontSize,
      lineHeight: webexStarshipLineHeight,
    };
  }, [webexStarshipFontSize, webexStarshipLineHeight]);

  const insightsStyle = useMemo(() => {
    return {
      fontSize: insightsFontSize,
    };
  }, [insightsFontSize]);

  const applicationsStyle = useMemo(() => {
    return {
      fontSize: applicationsFontSize,
    };
  }, [applicationsFontSize]);

  const transactionsStyle = useMemo(() => {
    return {
      fontSize: transactionsFontSize,
    };
  }, [transactionsFontSize]);

  const renewalsStyle = useMemo(() => {
    return {
      fontSize: renewalsFontSize,
    };
  }, [renewalsFontSize]);

  const employeesStyle = useMemo(() => {
    return {
      fontSize: employeesFontSize,
    };
  }, [employeesFontSize]);

  const groupDivStyle = useMemo(() => {
    return {
      opacity: groupDivOpacity,
    };
  }, [groupDivOpacity]);

  const integrationsStyle = useMemo(() => {
    return {
      fontSize: integrationsFontSize,
      color: integrationsColor,
    };
  }, [integrationsFontSize, integrationsColor]);

  const accountStyle = useMemo(() => {
    return {
      fontSize: accountFontSize,
    };
  }, [accountFontSize]);

  const mENUStyle = useMemo(() => {
    return {
      top: mENUTop,
      left: mENULeft,
      fontSize: mENUFontSize,
    };
  }, [mENUTop, mENULeft, mENUFontSize]);

  const sETTINGSStyle = useMemo(() => {
    return {
      top: sETTINGSTop,
      left: sETTINGSLeft,
      fontSize: sETTINGSFontSize,
    };
  }, [sETTINGSTop, sETTINGSLeft, sETTINGSFontSize]);

  const lineDivStyle = useMemo(() => {
    return {
      top: lineDivTop,
      left: lineDivLeft,
      width: lineDivWidth,
      height: lineDivHeight,
    };
  }, [lineDivTop, lineDivLeft, lineDivWidth, lineDivHeight]);

  const ellipseDivStyle = useMemo(() => {
    return {
      top: ellipseDivTop,
      left: ellipseDivLeft,
      width: ellipseDivWidth,
      height: ellipseDivHeight,
    };
  }, [ellipseDivTop, ellipseDivLeft, ellipseDivWidth, ellipseDivHeight]);
  

  return (
      
    <div
      className="w-[17.4996rem] sm:w-[17.4996rem] md:w-[17.4996rem] lg:w-[17.4996rem] xl:w-[17.4996rem] overflow-y-auto h-[65.50rem] md:relative translate-x-[-17.4996rem] md:translate-x-0 transition-all"
      style={menuStyle}
    >  
      <div className="sticky h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-white" />
      <div
        className="absolute top-[899px] left-[0px] bg-black w-[280px] h-20 opacity-[0]"
        style={rectangleDivStyle}
      />
      <div className="absolute h-[4.77%] w-[44.29%] top-[87.13%] right-[29.29%] bottom-[8.1%] left-[26.43%] text-xs text-sub-heading">
        <div
          className="absolute top-[40%] left-[0%] leading-[30px]"
          style={charliewebexcomStyle}
        >
          charlie@webex.com
        </div>
        <div
          className="absolute top-[0%] left-[0%] text-base leading-[30px] text-heading"
          style={webexStarshipStyle}
        >
          Webex Starship
        </div>
      </div>
      <img
        className="absolute h-[0.67%] w-[4.29%] top-[89.23%] right-[10.36%] bottom-[10.1%] left-[85.36%] max-w-full overflow-hidden max-h-full"
        alt=""
        src={vector}
      />
      <div className="absolute h-[0.1%] w-[100.36%] top-[6.72%] right-[-0.18%] bottom-[93.18%] left-[-0.18%] box-border border-t-[1px] border-solid border-whitesmoke-200" />
      <img
        className="absolute h-[3.24%] w-[52.14%] top-[1.72%] right-[23.93%] bottom-[95.04%] left-[23.93%] max-w-full overflow-hidden max-h-full cursor-pointer"
        alt=""
        src={logo}
      />
      <div className="absolute h-[0.1%] w-[100.36%] top-[85.65%] right-[-0.18%] bottom-[14.25%] left-[-0.18%] box-border border-t-[1px] border-solid border-whitesmoke-200" />
      <div className="absolute h-[3.05%] w-[11.43%] top-[87.99%] right-[77.86%] bottom-[8.96%] left-[10.71%]">
        <button
          className="cursor-pointer [border:none] p-0 bg-primery absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-10xs"
          autoFocus={true}
        />
        <img
          className="absolute h-3/6 w-6/12 top-[25%] right-[25%] bottom-[25%] left-[25%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/9040610-person-workspace-icon-1.svg"
        />
      </div>
      <div className="absolute h-[4.77%] w-[92.86%] top-[10.49%] right-[3.57%] bottom-[84.75%] left-[3.57%]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] opacity-[0]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-8xs bg-primery opacity-[0.08]" />
          <div className="absolute h-3/5 w-[1.54%] top-[20%] right-[98.08%] bottom-[20%] left-[0.38%] rounded-21xl bg-primery" />
        </div>
        <div className="absolute top-[26%] left-[21.92%]" style={insightsStyle}>
          Insights
        </div>
        <img
          className="absolute h-[41.5%] w-[7.98%] top-[250%] right-[78.94%] bottom-[-191.5%] left-[13.08%] max-w-full overflow-hidden max-h-full hidden"
          alt=""
          src={hover}
        />
        <img
          className="absolute h-[38%] w-[8.08%] top-[250%] right-[78.85%] bottom-[-188%] left-[13.08%] max-w-full overflow-hidden max-h-full hidden"
          alt=""
          src={vector1}
        />
        <img
          className="absolute h-[43%] w-[8.27%] top-[28%] right-[82.4%] bottom-[29%] left-[9.33%] max-w-full overflow-hidden max-h-full"
          alt=""
          src={vector2}
        />
      </div>
      <div className="absolute h-[4.77%] w-[92.86%] top-[21.45%] right-[3.57%] bottom-[73.78%] left-[3.57%]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] opacity-[0]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-8xs bg-primery opacity-[0.08]" />
          <div className="absolute h-3/5 w-[1.54%] top-[20%] right-[98.46%] bottom-[20%] left-[0%] rounded-21xl bg-primery" />
        </div>
        <div
          className="absolute top-[26%] left-[21.92%]"
          style={applicationsStyle}
        >
          Applications
        </div>
        <img
          className="absolute h-[36%] w-[6.92%] top-[482%] right-[79.62%] bottom-[-418%] left-[13.46%] max-w-full overflow-hidden max-h-full hidden"
          alt=""
          src={vector3}
        />
        <img
          className="absolute h-[41%] w-[7.88%] top-[30%] right-[82.98%] bottom-[29%] left-[9.13%] max-w-full overflow-hidden max-h-full"
          alt=""
          src={union}
        />
      </div>
      <div className="absolute h-[4.77%] w-[92.86%] top-[33.84%] right-[3.57%] bottom-[61.39%] left-[3.57%]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] opacity-[0]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-8xs bg-primery opacity-[0.08]" />
          <div className="absolute h-3/5 w-[1.54%] top-[20%] right-[98.46%] bottom-[20%] left-[0%] rounded-21xl bg-primery" />
        </div>
        <div
          className="absolute top-[26%] left-[21.92%]"
          style={transactionsStyle}
        >
          Transactions
        </div>
        <img
          className="absolute h-[43%] w-[7.5%] top-[28%] right-[83.65%] bottom-[29%] left-[8.85%] max-w-full overflow-hidden max-h-full"
          alt=""
          src={vector4}
        />
      </div>
      <div className="absolute h-[4.77%] w-[92.86%] top-[27.65%] right-[3.57%] bottom-[67.59%] left-[3.57%]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] opacity-[0]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-8xs bg-primery opacity-[0.08]" />
          <div className="absolute h-3/5 w-[1.54%] top-[20%] right-[98.46%] bottom-[20%] left-[0%] rounded-21xl bg-primery" />
        </div>
        <div className="absolute top-[26%] left-[21.92%]" style={renewalsStyle}>
          Renewals
        </div>
        <img
          className="absolute h-[36%] w-[6.92%] top-[612%] right-[80%] bottom-[-548%] left-[13.08%] max-w-full overflow-hidden max-h-full hidden"
          alt=""
          src={vector5}
        />
        <img
          className="absolute h-[39%] w-[8.27%] top-[30%] right-[82.5%] bottom-[31%] left-[9.23%] max-w-full overflow-hidden max-h-full"
          alt=""
          src={vector6}
        />
      </div>
      <div className="absolute h-[4.77%] w-[92.86%] top-[40.04%] right-[3.57%] bottom-[55.2%] left-[3.57%]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] opacity-[0]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-8xs bg-primery opacity-[0.08]" />
          <div className="absolute h-3/5 w-[1.54%] top-[20%] right-[98.46%] bottom-[20%] left-[0%] rounded-21xl bg-primery" />
        </div>
        <div
          className="absolute top-[26%] left-[21.92%]"
          style={employeesStyle}
        >
          Employees
        </div>
        <img
          className="absolute h-[31.09%] w-[7.31%] top-[874%] right-[79.23%] bottom-[-805.09%] left-[13.46%] max-w-full overflow-hidden max-h-full hidden"
          alt=""
          src={group43}
        />
        <img
          className="absolute h-[41%] w-[7.88%] top-[30%] right-[82.88%] bottom-[29%] left-[9.23%] max-w-full overflow-hidden max-h-full"
          alt=""
          src={vector7}
        />
      </div>
      <div className="absolute h-[4.77%] w-[92.86%] top-[51%] right-[3.57%] bottom-[44.23%] left-[3.57%] cursor-pointer">
        <div
          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] opacity-[0]"
          style={groupDivStyle}
        >
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-8xs bg-primery opacity-[0.08]" />
          <div className="absolute h-3/5 w-[1.54%] top-[20%] right-[98.46%] bottom-[20%] left-[0%] rounded-21xl bg-primery" />
        </div>
        <div
          className="absolute top-[26%] left-[21.92%] cursor-pointer"
          style={integrationsStyle}
        >
          Integrations
        </div>
        <img
          className="absolute h-[46.15%] w-[7.69%] top-[1096%] right-[79.23%] bottom-[-1042.15%] left-[13.08%] max-w-full overflow-hidden max-h-full hidden"
          alt=""
          src={group44}
        />
        <img
          className="absolute h-[27%] w-[8.27%] top-[36%] right-[82.5%] bottom-[37%] left-[9.23%] max-w-full overflow-hidden max-h-full"
          alt=""
          src={union1}
        />
      </div>
      <div className="absolute h-[4.77%] w-[92.86%] top-[57.2%] right-[3.57%] bottom-[38.04%] left-[3.57%]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] opacity-[0]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-8xs bg-primery opacity-[0.08]" />
          <div className="absolute h-3/5 w-[1.54%] top-[20%] right-[98.46%] bottom-[20%] left-[0%] rounded-21xl bg-primery" />
        </div>
        <div className="absolute top-[26%] left-[21.92%]" style={accountStyle}>
          Account
        </div>
        <img
          className="absolute h-[43%] w-[8.27%] top-[28%] right-[82.5%] bottom-[29%] left-[9.23%] max-w-full overflow-hidden max-h-full"
          alt=""
          src={vector8}
        />
      </div>
      <div
        className="absolute top-[185px] left-[34px] text-smi text-lightslategray"
        style={mENUStyle}
      >
        MENU
      </div>
      <div
        className="absolute top-[495px] left-[34px] text-smi text-lightslategray"
        style={sETTINGSStyle}
      >
        SETTINGS
      </div>
      <img
        className="absolute h-[1.81%] w-[6.79%] top-[58.63%] right-[80.71%] bottom-[39.56%] left-[12.5%] max-w-full overflow-hidden max-h-full hidden"
        alt=""
        src={group}
      />
      <div
        className="absolute top-[-0.5px] left-[279.5px] box-border w-px h-[1050px] border-r-[1px] border-solid border-whitesmoke-200"
        style={lineDivStyle}
      />
      <img
        className="absolute h-[2.19%] w-[7.14%] top-[35.08%] right-[81.07%] bottom-[62.73%] left-[11.79%] max-w-full overflow-hidden max-h-full hidden"
        alt=""
        src={vector9}
      />
      <div
        className="absolute top-[246px] left-[253px] rounded-[50%] bg-darkorange w-2 h-2"
        style={ellipseDivStyle}
      />
      </div>
  );
};

export default Menu;
