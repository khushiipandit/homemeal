
import React from "react";
import Slides from "/src/components/Slides"
import CardContainer from "/src/components/CardContainer"

const Comp9  = ({ className = "" }) => {
 // Replace with the base64 string of the image.

  return (
    <div className={`bg-yellow-100 w-[100vw] flex flex-col items-end justify-start gap-[33.9px] text-center text-13xl text-black-white-white font-inter mq750:gap-[17px] ${className}`}>
  {/* Content here */}



      <div className="self-stretch h-[815.9px] flex flex-row items-start justify-start pt-[278.7px] pb-0 pl-[120px] pr-0 box-border gap-24 max-w-full z-[2] mq750:gap-12 mq750:pl-[30px] mq750:pt-[118px] mq750:box-border mq1225:pl-[60px] mq1225:pt-[181px] mq1225:box-border mq450:gap-6 mq1050:h-auto">
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
          <h1 className="m-0 w-[472px] relative text-inherit inline-block italic font-bold font-[inherit] max-w-full z-[1] mq750:text-32xl mq450:text-19xl">
            About SUDHAR
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
              <div className="self-stretch h-[187px] relative inline-block shrink-0 z-[1] mq750:text-[29px] mq450:text-[22px]">
                <span>{`Our `}</span>
                <i className="text-[48px] font-serif font-bold text-lime">Mission</i>
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
          <div
      className={`w-[1550px] flex flex-row items-start justify-start py-0 px-[77px] box-border max-w-full text-left text-xl text-black-white-white font-acme mq1225:pl-[38px] mq1225:pr-[38px] mq1225:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-center justify-start gap-2 max-w-full">
        <div className="self-stretch flex flex-row items-start justify-center pt-0 pb-[13px] pl-5 pr-[23px] box-border max-w-full text-61xl">
          <h1 className="m-0 w-[347px] relative text-inherit font-normal font-[inherit] inline-block shrink-0 max-w-full z-[1] mq750:text-21xl mq450:text-5xl">
            Our Story
          </h1>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0  pr-[200px] box-border max-w-full text-center font-inter">
          <div className="flex-1 flex flex-col items-end justify-start gap-[42px] max-w-full mq750:gap-[21px]">
            <div className="w-[981px] flex flex-col items-start justify-start gap-[31px] max-w-full mq750:gap-[15px]">
              <h3 className="m-0 self-stretch relative text-inherit font-normal font-[inherit] z-[1] mq450:text-base">
                started as a small initiative has now grown into a comprehensive
                tool used by government entities to monitor and reduce carbon
                footprints.
              </h3>
              <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 text-left text-burlywood font-acme">
                <div className="relative inline-block min-w-[43px] z-[1] mq450:text-base">
                  2024
                </div>
              </div>
            </div>
          
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'start', maxWidth: '100%', gap: '10px', color: 'burlywood' }}>
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'start', gap: '90px', maxWidth: '100%' }}>
    <div style={{ position: 'relative', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: '0 1px', boxSizing: 'border-box', maxWidth: '100%', width: '1500px' }}>
      <div style={{ position: 'absolute', top: '6%', left: '0', right: '0', height: '2px', backgroundColor: 'gray', zIndex: 1 }} />
      <div style={{ display: 'flex', flex: '1', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', maxWidth: '100%', gap: '5px', flexWrap: 'wrap' }}>
        <div style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
          <div style={{ width: '10px', height: '10px', backgroundColor: 'gray', borderRadius: '50%' }} />
          <h3 style={{ marginTop: '15px', font: 'inherit', fontWeight: 'normal', textAlign: 'center' }}>February</h3>
        </div>
        <div style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
          <div style={{ width: '10px', height: '10px', backgroundColor: 'gray', borderRadius: '50%' }} />
          <h3 style={{ marginTop: '15px', font: 'inherit', fontWeight: 'normal', textAlign: 'center' }}>March</h3>
        </div>
        <div style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
          <div style={{ width: '10px', height: '10px', backgroundColor: 'gray', borderRadius: '50%' }} />
          <h3 style={{ marginTop: '15px', font: 'inherit', fontWeight: 'normal', textAlign: 'center' }}>April</h3>
        </div>
        <div style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
          <div style={{ width: '10px', height: '10px', backgroundColor: 'gray', borderRadius: '50%' }} />
          <h3 style={{ marginTop: '15px', font: 'inherit', fontWeight: 'normal', textAlign: 'center' }}>May</h3>
        </div>
        <div style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
          <div style={{ width: '10px', height: '10px', backgroundColor: 'gray', borderRadius: '50%' }} />
          <h3 style={{ marginTop: '15px', font: 'inherit', fontWeight: 'normal', textAlign: 'center' }}>June</h3>
        </div>
        <div style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
          <div style={{ width: '10px', height: '10px', backgroundColor: 'gray', borderRadius: '50%' }} />
          <h3 style={{ marginTop: '15px', font: 'inherit', fontWeight: 'normal', textAlign: 'center' }}>July</h3>
        </div>
        <div style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
          <div style={{ width: '10px', height: '10px', backgroundColor: 'gray', borderRadius: '50%' }} />
          <h3 style={{ marginTop: '15px', font: 'inherit', fontWeight: 'normal', textAlign: 'center' }}>August</h3>
        </div>
      </div>
    </div>
    <div
  style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start', // 'start' should be 'flex-start'
    justifyContent: 'flex-start', // 'start' should be 'flex-start'
    paddingTop: '50px',
    paddingLeft: '150px',
    paddingBottom: '50px',
    paddingInline: '200px',
    borderRadius: '20px',
    backgroundColor: 'rgba(52, 58, 64, 1)',
    maxWidth: '100%',
    flexShrink: 1,
    zIndex: 1,
    fontSize: '24px', // Replace '18xl' with a valid size like '24px'
    fontFamily: 'Inter',
    marginLeft: '340px',
    marginTop: '-27px',
    boxSizing: 'border-box', // Keep only one instance
  }}
>
  

       <Slides />
      
    </div>
  </div>
</div>




        <div>
        <div className="self-stretch flex flex-row items-start justify-center pt-10 pb-[13px] pl-5 pr-[23px] box-border max-w-full text-61xl">
          <h1 className="m-0 w-[800px] relative  text-inherit font-normal   font-[inherit] inline-block shrink-0 max-w-full z-[1] mq750:text-21xl mq450:text-5xl text-center mx-auto">
          Meet The Team behind <span style={{display: 'inline-block', width: '100%', textAlign: 'center'}}>SUDHAR</span>
          </h1>
        </div>
        <div>
        <h3 className="m-0 self-stretch relative text-inherit font-normal font-[inherit] z-[1] mq450:text-base" style={{ fontSize: '32px', color: 'rgba(124, 125, 126, 1)', fontFamily: 'Inter' }}>
    A group of passionate engineering students committed to making a difference
</h3>

        </div>

        </div>
       <CardContainer />

       <div>
       
       <section style={{ backgroundColor: 'rgba(39, 42, 46, 1)', width: '1540px', height: '400px', marginTop: '25px', display: 'flex' }}>
    
    <div style={{ flex: '1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img src="src/image/podha1.png" alt="Podha1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
    </div>
    
    <div style={{ flex: '1', backgroundColor: 'rgba(39, 42, 46, 1)', padding: '30px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h1 style={{ fontSize: '80px', color: 'black', fontFamily: 'Acme', margin: '0 0 10px 0' }}>
            Our Vision
        </h1>
        <p style={{ fontSize: '16px', color: 'white', maxWidth: '90%', textAlign: 'center', fontFamily: 'Inter', margin: '0 0 20px 0' }}>
            At the heart of SUDHAR lies a deep commitment to sustainability and environmental stewardship. Our vision is not just about monitoring carbon footprints but about fostering a world where every decision is guided by an awareness of its impact on our planet. We believe in a future where technology and innovation lead the way to a healthier, more sustainable world for generations to come.
        </p>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ textAlign: 'center' }}>
                <img src="src/image/vision1.png" alt="Vision1" style={{ borderRadius: '50%', width: '160px', height: '80px', objectFit: 'cover' }} />
                <p style={{ color: 'white', fontSize: '12px', marginTop: '8px' }}>
                    Promoting Environmental Awareness
                </p>
            </div>
            <div style={{ textAlign: 'center' }}>
                <img src="src/image/vision2.png" alt="Vision2" style={{ borderRadius: '50%', width: '130px', height: '80px', objectFit: 'cover' }} />
                <p style={{ color: 'white', fontSize: '12px', marginTop: '8px' }}>
                    Empowering Informed Decisions
                </p>
            </div>
            <div style={{ textAlign: 'center' }}>
                <img src="src/image/vision3.png" alt="Vision3" style={{ borderRadius: '50%', width: '130px', height: '80px', objectFit: 'cover' }} />
                <p style={{ color: 'white', fontSize: '12px', marginTop: '8px' }}>
                    Driving Sustainable Innovation
                </p>
            </div>
            <div style={{ textAlign: 'center' }}>
                <img src="src/image/vision4.png" alt="Vision4" style={{ borderRadius: '50%', width: '130px', height: '80px', objectFit: 'cover' }} />
                <p style={{ color: 'white', fontSize: '12px', marginTop: '8px' }}>
                    Driving Sustainable Innovation
                </p>
            </div>
            <div style={{ textAlign: 'center' }}>
                <img src="src/image/vision5.png" alt="Vision5" style={{ borderRadius: '50%', width: '130px', height: '80px', objectFit: 'cover' }} />
                <p style={{ color: 'white', fontSize: '12px', marginTop: '8px' }}>
                    Building a Legacy for Future Generations
                </p>
            </div>
        </div>
    </div>
    
</section>

<section style={{ backgroundColor: 'rgba(39, 42, 46, 1)', width: '1540px', height: '400px', marginTop: '25px', display: 'flex' }}>
    
    
    
    <div style={{ flex: '1', backgroundColor: 'rgba(39, 42, 46, 1)', padding: '30px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h1 style={{ fontSize: '80px', color: 'black', fontFamily: 'Acme', margin: '0 0 10px 0' }}>
           The Impact
        </h1>
        <p style={{ fontSize: '16px', color: 'white', maxWidth: '90%', textAlign: 'center', fontFamily: 'Inter', margin: '0 0 20px 0' }}>
        "Our platform has already been deployed in Many coal mines, allowing for real-time monitoring of carbon emissions. In just six months, these mines have collectively reduced their emissions by 7%, contributing to a cleaner, more sustainable future. Our goal is to expand this impact, aiming to reduce carbon emissions by 200 tons by 2025."
        </p>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ textAlign: 'center' }}>
                <img src="src/image/13.png" alt="Vision1" style={{ width: '150px', height: '80px', objectFit: 'cover' }} />
                <p style={{ color: 'rgba(241, 86, 86, 1)', fontSize: '15px', marginTop: '-10px' }}>
                    Promoting Environmental Awareness
                </p>
            </div>
            <div style={{ textAlign: 'center' }}>
                <img src="src/image/7.png" alt="Vision2" style={{  width: '150px', height: '80px', objectFit: 'cover' }} />
                <p style={{ color: 'rgba(241, 86, 86, 1)', fontSize: '15px', marginTop: '-10px' }}>
                   Carbon Emission Reduction
                </p>
            </div>
            
            
           
        </div>
    </div>
    <div style={{ flex: '1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img src="src/image/perpodha.jpeg"  style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
    </div>
    
</section>

<div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
    <button style={{
        backgroundColor: 'rgba(0, 255, 0, 0.7)',
        width: '283px',
        height: '96px',
        borderRadius: '15px',
        opacity: '1',
        border: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer'
    }}>
        <span style={{
            fontFamily: 'Inter',
            fontSize: '48px',
            fontWeight: '400',
            lineHeight: '58.09px',
            textAlign: 'center',
            color: 'black'
        }}>
            Join Us
        </span>
    </button>
    </div>

       </div>
       
      </div>
    
      
     
    </div>
    
    </div>
  
  
  );
};

export default Comp9;