import React from "react";
import Slides from "/src/components/Slides"
import CardContainer from "/src/components/CardContainer"

const Comp9  = ({ className = "" }) => {
  return (
    <div
      className={`
        w-[100vw] flex flex-col items-end justify-start gap-[33.9px] text-center text-13xl text-black-white-white font-inter 
        mq750:gap-[17px] ${className}
        bg-cover bg-center bg-no-repeat
      `}
      style={{ backgroundImage: 'url(/images/paybg.png)' }}
    >
      {/* Content here */}
      <div className="self-stretch h-[815.9px] text-[#dfd218] flex flex-row items-start justify-start pt-[278.7px] pb-0 pl-[120px] pr-0 box-border gap-24 max-w-full z-[2] mq750:gap-12 mq750:pl-[30px] mq750:pt-[118px] mq750:box-border mq1225:pl-[60px] mq1225:pt-[181px] mq1225:box-border mq450:gap-6 mq1050:h-auto">
        <div className="w-[329px] flex flex-col items-start justify-start gap-[180.4px] max-w-[calc(100%_-_1041px)] mq1225:max-w-full mq450:gap-[90px]">
          <h1 className="m-0 w-[285px] relative text-inherit inline-block z-[1] font-[inherit] mq750:text-7xl mq450:text-lgi">
            <span>{`Our `}</span>
            <i className="font-black">Mission</i>
            <span> is to..</span>
          </h1>
          <div className="self-stretch flex flex-row items-start justify-end">
            <h1 className="m-0 w-[285px] relative text-inherit leading-[33.1px] inline-block shrink-0 z-[1] font-[inherit] mq750:text-7xl mq750:leading-[26px] mq450:text-lgi mq450:leading-[20px]">
              <span>{`Our `}</span>
              <i className="font-black">Story</i>
              <span>..</span>
            </h1>
          </div>
        </div>
        <div className="mt-[-278.8px] flex-1 flex flex-col items-start justify-start gap-[52.3px] max-w-[calc(100%_-_425px)] shrink-0 text-45xl font-inria-serif mq750:gap-[26px] mq1225:hidden">
          <h1 className="mt-20 w-[472px] relative text-inherit inline-block italic font-bold font-[inherit] max-w-full z-[1] mq750:text-32xl mq450:text-19xl ">
            About HOMEMEAL
          </h1>
          <div className="self-stretch flex flex-row items-start justify-end max-w-full text-13xl font-inter">
            <div className="w-[863px] flex flex-row items-start justify-center gap-[25px] max-w-full mq1050:flex-wrap">
              <div className="w-[285px] flex flex-col items-start justify-start pt-[526.8px] px-0 pb-0 box-border min-w-[285px] mq750:pt-[342px] mq750:box-border mq1050:flex-1">
                <h1 className="m-0 self-stretch relative text-inherit leading-[33.1px] z-[1] font-[inherit] mq750:text-7xl mq750:leading-[26px] mq450:text-lgi mq450:leading-[20px]">
                  <span>{`Our `}</span>
                  <i className="font-extrabold">Team</i>
                  <span>..</span>
                </h1>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start pt-[131.5px] pb-[228.2px] pl-[109px] pr-12 box-border relative gap-[147.5px] min-w-[359px] max-w-full mq750:gap-[74px] mq750:pt-[85px] mq750:pb-[148px] mq750:pl-[54px] mq750:pr-6 mq750:box-border mq750:min-w-full mq450:gap-[37px] mq450:pl-5 mq450:box-border">
                <div className="self-stretch flex flex-row items-start justify-end">
                  <h1 className="m-0 w-[285px] relative text-inherit inline-block shrink-0 z-[1] font-[inherit] mq750:text-7xl mq450:text-lgi">
                    <i className="font-black">Vision</i>
                    <span>{` and `}</span>
                    <i className="font-black">Values</i>
                    <span>..</span>
                  </h1>
                </div>
                <h1 className="m-0 w-[285px] h-[100.1px] relative text-inherit inline-block shrink-0 z-[1] font-[inherit] mq750:text-7xl mq450:text-lgi">
                  <span>{`Our `}</span>
                  <i className="font-black">{`Impact `}</i>
                  <span>Stories..</span>
                </h1>
                <div className="w-full !m-[0] absolute top-[0px] left-[0px] flex flex-row items-start justify-start max-w-full h-full">
                  <div className="h-[806.3px] w-[1451px] absolute !m-[0] top-[-130.6px] left-[-937px]">
                    <img
                      className="absolute top-[137.5px] left-[576.4px] rounded-mini w-[138.2px] h-[138.1px] object-cover"
                      loading="lazy"
                      alt=""
                      src="/images/rc11.png"
                    />
                    <img
                      className="absolute top-[127.2px] left-[735.8px] rounded-mini w-[205.2px] h-[160.9px] object-cover"
                      alt=""
                      src="/images/rc12.png"
                    />
                    <img
                      className="absolute top-[285.3px] left-[535px] rounded-mini w-[184px] h-[131.9px] object-cover"
                      alt=""
                      src="/images/rc21.png"
                    />
                    <img
                      className="absolute top-[306px] left-[735.8px] rounded-mini w-[219.2px] h-[134.7px] object-cover"
                      alt=""
                      src="/images/rc22.png"
                    />
                    <img
                      className="absolute top-[433.8px] left-[535px] rounded-mini w-[184px] h-[130.5px] object-cover"
                      alt=""
                      src="/images/rc31.png"
                    />
                    <img
                      className="absolute top-[452.4px] left-[734px] rounded-mini w-[172.6px] h-[135.4px] object-cover"
                      loading="lazy"
                      alt=""
                      src="/images/rc32.png"
                    />
                  </div>
                  <div className="h-px w-[1350px] absolute !m-[0] bottom-[25.1px] left-[-900px] border-black-white-white border-t-[1px] border-solid box-border z-[4]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1190px] flex flex-row items-start justify-start py-0 pl-0 pr-40 box-border gap-[40px] max-w-full mq1050:flex-wrap">
            <div className="flex-1 flex flex-col items-start justify-start pt-[76px] px-0 pb-0 box-border min-w-[502px] max-w-full mq750:min-w-full">
              <div className="self-stretch h-[187px] text-[#ffffff] relative inline-block shrink-0 z-[1] mq750:text-[29px] mq450:text-[22px]">
                <span>{`Our `}</span>
                <i className="text-[48px] font-serif font-bold text-lime text-[#ffffff]">Mission</i>
                <span>
                  {" "}
                  is to provide accurate and real-time data on the carbon
                  footprint produced by coal plants across the nation, enabling
                  informed decisions for a sustainable future
                </span>
              </div>
            </div>
            <img
              className="w-[364px] relative max-h-full object-cover max-w-full z-[1] mq1050:flex-1"
              loading="lazy"
              alt=""
              src="/src/image/untitled-design-19-1@2x.png"
            />
          </div>
    </div>
  );
};

export default Comp9;
