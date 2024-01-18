import * as React from "react";

function MyComponent(props) {
  return (
    <div>
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-[84%] max-md:w-full max-md:ml-0">
          <div className="bg-white flex grow flex-col items-stretch w-full pt-8 pb-12 max-md:max-w-full max-md:mt-8">
            <div className="self-center flex w-full max-w-[1222px] items-center justify-between gap-5 px-5 max-md:max-w-full max-md:flex-wrap">
              <div className="text-lime-800 text-3xl font-medium leading-8 tracking-tight my-auto">
                World Peas
              </div>
              <div className="self-stretch flex items-start justify-between gap-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
                <div className="text-black text-center text-base leading-5 self-center whitespace-nowrap my-auto">
                  Shop
                </div>
                <div className="text-black text-center text-base leading-5 self-center my-auto">
                  Newstand
                </div>
                <div className="text-black text-center text-base leading-5 self-center my-auto">
                  Who we are
                </div>
                <div className="text-black text-center text-base leading-5 self-center my-auto">
                  My profile
                </div>
                <div className="text-white text-center text-base font-semibold leading-5 whitespace-nowrap justify-center items-stretch bg-lime-800 self-stretch grow px-6 py-4 rounded-lg max-md:px-5">
                  Basket (3)
                </div>
              </div>
            </div>
            <div className="bg-white flex w-full justify-between gap-5 mt-8 px-20 py-11 items-start max-md:max-w-full max-md:flex-wrap max-md:px-5">
              <div className="flex justify-between gap-5 mt-3.5 items-start max-md:max-w-full max-md:flex-wrap">
                <div className="text-black text-6xl leading-[76.8px] tracking-tighter grow whitespace-nowrap max-md:text-4xl">
                  Produce
                </div>
                <div className="text-black text-xl leading-7 grow whitespace-nowrap mt-8 self-end">
                  <span className="font-medium">Fresh</span>
                  <span className="font-light"> — August 21, 2023</span>
                </div>
              </div>
              <div className="flex items-stretch gap-2 mt-7 self-end max-md:justify-center">
                <div className="text-white text-center text-base font-semibold leading-5 whitespace-nowrap justify-center items-stretch bg-lime-800 grow px-4 py-3.5 rounded-3xl">
                  Default
                </div>
                <div className="text-black text-center text-base font-semibold leading-5 whitespace-nowrap justify-center items-stretch border bg-white aspect-[1.55] px-4 py-3.5 rounded-3xl border-solid border-stone-300">
                  A-Z
                </div>
                <div className="text-black text-center text-base font-semibold leading-5 whitespace-nowrap justify-center items-stretch border bg-white grow px-5 py-3.5 rounded-3xl border-solid border-stone-300">
                  List view
                </div>
              </div>
            </div>
            <div className="self-center w-full max-w-[1257px] mt-10 mb-44 px-5 max-md:max-w-full max-md:mb-10">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-[32%] max-md:w-full max-md:ml-0">
                  <div className="bg-stone-50 flex grow flex-col items-stretch w-full pb-8 rounded-3xl border-2 border-solid border-neutral-200 max-md:mt-8">
                    <img
                      loading="lazy"
                      srcSet="..."
                      className="aspect-[1.3] object-contain object-center w-full overflow-hidden"
                    />
                    <div className="flex flex-col items-stretch ml-6 mt-7 self-start max-md:ml-2.5">
                      <div className="text-black text-xl font-semibold leading-7">
                        Heirloom tomato
                      </div>
                      <div className="text-lime-800 text-xl font-semibold leading-7 mt-3.5">
                        $5.99 / lb
                      </div>
                      <div className="text-neutral-500 text-base leading-6 whitespace-nowrap mt-7">
                        Grown in San Juan Capistrano, CA
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-stretch w-[35%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="bg-stone-50 flex grow flex-col items-stretch w-full pb-8 rounded-3xl border-2 border-solid border-neutral-200 max-md:mt-8">
                    <img
                      loading="lazy"
                      srcSet="..."
                      className="aspect-[1.31] object-contain object-center w-full overflow-hidden"
                    />
                    <div className="flex flex-col items-stretch ml-6 mt-7 self-start max-md:ml-2.5">
                      <div className="text-black text-xl font-semibold leading-7">
                        Organic ginger
                      </div>
                      <div className="text-lime-800 text-xl font-semibold leading-7 mt-2.5">
                        $12.99 / lb
                      </div>
                      <div className="text-neutral-500 text-base leading-6 whitespace-nowrap mt-7">
                        Grown in Huntington Beach, CA
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                  <img
                    loading="lazy"
                    srcSet="..."
                    className="aspect-[1.33] object-contain object-center w-full overflow-hidden max-md:mt-8"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-stretch w-[16%] ml-5 max-md:w-full max-md:ml-0">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0501d455a1b25cfaa0ba3cc6a8b2b497fe8475f1823d079e58d522081225cf5c?"
            className="aspect-[1.81] object-contain object-center w-[266px] stroke-[6px] stroke-black overflow-hidden shrink-0 max-w-full my-auto max-md:mt-10"
          />
        </div>
      </div>
    </div>
  );
}

export default MyComponent;
