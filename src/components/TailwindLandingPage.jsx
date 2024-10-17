// import React from 'react';

const TailwindLandingPage = () => {
    return (
        <div>
            <div className="container mx-auto">
                {/* <!-- header section --> */}
                <section className="flex flex-col p-3 bg-white">
                    <header className="flex flex-wrap gap-5 justify-between text-xl bg-white">
                        <img src="assets/company-logo.png" alt="Company logo" className="object-contain pl-10" />
                        <nav className="flex flex-wrap gap-10 items-center my-auto">
                            <ul className="flex items-center justify-center gap-10 text-black font-semibold font-Righteous">
                                <li><a href="#home">Home</a></li>
                                <li><a href="#about">About</a></li>
                                <li><a href="#courses">Courses</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                            <img src="assets/header-icons.png" alt="icons" className="object-contain pl-20 pr-20" />
                            <div className="flex gap-10 self-stretch font-medium whitespace-nowrap">
                                <a href="#login" className="my-auto leading-9 text-neutral-600 underline">Login</a>
                                <a href="#signup"
                                    className="px-9 py-5 text-white rounded-xl bg-gradient-to-r from-primary1 to-secondary1 pr-10">Signup</a>
                            </div>
                        </nav>
                    </header>
                    {/* <!-- main section --> */}
                    <div className="container mx-auto bg-gradient-to-r from-primary2 to-secondary2">
                        <main className="my-32 mx-24">
                            <div className="flex justify-around">
                                <div className="">
                                    <p className="text-xl text-white font-Righteous mb-5">Successful coaches are visionaries</p>
                                    <p className="text-white text-7xl font-Righteous mb-10">Good <span className="text-header1">coaching</span>
                                        is<br></br>good teaching &<br></br>nothing else.</p>
                                    <div className="flex flex-row justify-items-start">
                                        <button className="text-white font-Righteous rounded border-solid border-2 border-white px-6 py-3">View
                                            Courses</button>
                                        <p className="text-white font-Righteous text-sm pt-4 pl-7">Get Free Consultation</p>
                                    </div>
                                    <div className="flex">
                                        <form action="#" method="post" className="flex mt-20">
                                            <div className="flex flex-wrap py-2.5 pr-2.5 pl-9 mx-auto w-full bg-white rounded-lg">
                                                <label className="sr-only">What do you want to learn today?</label>
                                                <input type="text" id="search-input" placeholder="What do you want to learn today?"
                                                    className="flex-auto my-auto text-base text-slate-600 w-[228px]" />
                                                <button type="submit"
                                                    className="flex gap-3.5 items-start px-7 py-4 text-base leading-loose text-center text-white whitespace-nowrap rounded-xl max-md:px-5" />
                                            </div>
                                            <div></div>
                                            <div
                                                className="px-7 py-3 flex items-center text-white rounded-xl bg-gradient-to-r from-primary1 to-secondary1 pr-10 ">
                                                <img src="assets/main-search.png" alt="icon" className="pr-3" />
                                                <button>Search</button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="flex relative mb-72 ml-96 justify-self-stretch place-items-stretch flex-auto space-y-32">
                                        <section
                                            className="flex absolute pr-80 border-gray-400 border-solid border-[3px] max-w-[313px] min-h-[359px] rounded-[500px_500px_0px_0px]"
                                            aria-label="Rounded section"></section>
                                        <section
                                            className="flex absolute pr-72 border-gray-400 border-dashed border-[3px] max-w-[271px] min-h-[338px] rounded-[500px_500px_0px_0px]"
                                            aria-label="Rounded Section"></section>
                                        <section
                                            className="flex absolute pr-64 border-gray-400 border-solid border-[3px] max-w-[225px] min-h-[318px] rounded-[500px_500px_0px_0px]"
                                            aria-label="Rounded container section"></section>
                                    </div>
                                </div>
                                <div className="flex pl-32">
                                    <img src="assets/main-review.png" alt="image" className="h-28" />
                                    <div className="">
                                        <p className="text-white">Shyam</p>
                                        <p className="text-white font-Righteous text-sm pt-2">In a coaching role, you ask the<br></br>questions and rely
                                            more on your<br></br>staff, who become the experts, to<br></br>provide the information.</p>
                                        <p className="text-rating text-xs pt-3">4.9</p>
                                    </div>
                                </div>
                                <img src="assets/main-women image.svg" alt="women image" className="w-3/12 pl-10 my-0 mt-36 pt-52" />
                            </div>
                        </main>
                    </div>
                    {/* <!-- partner logo   --> */}
                    <section className="container mx-auto px-16 py-12 bg-gradient-to-b from-primary3 to-secondary3">
                        <div className="flex relative flex-wrap justify-around">
                            <img src="assets/partner-logo-1.png" alt="Partner logo 1" className="object-contain" />
                            <img src="assets/partner-logo-2.png" alt="Partner logo 2" className="object-contain" />
                            <img src="assets/partner-logo-1.png" alt="Partner logo 3" className="object-contain" />
                            <img src="assets/partner-logo-3.png" alt="Partner logo 4" className="object-contain" />
                            <img src="assets/partner-logo-4.png" alt="Partner logo 5" className="object-contain" />
                            <img src="assets/partner-logo-2.png" alt="Partner logo 6" className="object-contain" />
                        </div>
                    </section>
                </section>
            </div>
            {/* <!-- featured course --> */}
            <section className="flex flex-col justify-center items-center bg-gradient-to-b from-primary4 to-secondary4 mx-auto">
                <div className="flex flex-col mt-20">
                    <div className="flex flex-wrap gap-5 justify-center ml-20">
                        <div className="items-start content-start">
                            <div
                                className="flex shrink-0 rounded-full border-solid border-[19px] border-cyan-400 border-opacity-20 h-[103px] w-[103px]">
                            </div>
                        </div>
                        <div className="flex flex-col items-center mt-7">
                            <h2 className="items-center text-4xl font-Rowdies">Featured <span className="text-blue-500">Course</span></h2>
                            <p className="mt-3 text-2xl font-Righteous items-center justify-center">The feature courses are we invented our
                                teaching part</p>
                        </div>
                    </div>
                    <div className="mt-32 max-md:mt-10 max-md:max-w-full">
                        <div className="flex gap-5 max-md:flex-col">
                            <article className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full mt-20">
                                <div className="flex flex-col grow px-0.5 w-full bg-indigo-50 rounded-none max-md:mt-10 max-md:max-w-full">
                                    <div className="flex flex-col items-center pb-3.5 w-full bg-white rounded-3xl max-md:max-w-full">
                                        <img src="assets/course-1.png" alt="Motion Graphics course thumbnail"
                                            className="object-contain self-stretch w-full rounded-none aspect-[1.63] max-md:max-w-full" />
                                        <div className="flex gap-10 mt-7 max-w-full leading-9 w-[441px]">
                                            <div className="flex flex-col grow shrink-0 basis-0 w-fit">
                                                <p className="self-start text-sm font-medium tracking-tight text-slate-600">
                                                    1,957 Students
                                                </p>
                                                <h3 className="mt-5 text-2xl font-semibold tracking-tighter text-slate-700">
                                                    Motion Graphics: Create a Nice
                                                    <br />
                                                    Typography Animation
                                                </h3>
                                            </div>
                                            <p className="self-start text-sm font-medium tracking-tight text-slate-600">
                                                01h 59m
                                            </p>
                                        </div>
                                        <div
                                            className="flex gap-5 justify-between items-start mt-12 max-w-full text-2xl font-semibold tracking-tighter leading-loose whitespace-nowrap text-slate-600 w-[434px] max-md:mt-10">
                                            <p className="mt-4">Rs.499</p>
                                            <img src="assets/course-shop-icon.png" alt="Add to cart"
                                                className="object-contain shrink-0 aspect-square w-[26px]" />
                                        </div>
                                    </div>
                                </div>
                            </article>
                            <article className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                                <div className="flex flex-col grow mt-16 w-full bg-white rounded-3xl max-md:mt-10 max-md:max-w-full">
                                    <img loading="lazy" src="assets/course-2.png" alt="PHP and JS course thumbnail"
                                        className="object-contain z-10 mt-0 w-full rounded-none aspect-[1.63] max-md:max-w-full" />
                                    <div className="flex flex-col px-8 py-7 w-full bg-white rounded-none max-md:px-5 max-md:max-w-full">
                                        <div className="flex gap-px leading-9">
                                            <div className="flex flex-col grow shrink-0 basis-0 w-fit">
                                                <p className="self-start text-sm font-medium tracking-tight text-slate-600">
                                                    9,575 Students
                                                </p>
                                                <h3 className="mt-5 text-2xl font-semibold tracking-tighter text-slate-700">
                                                    Advance PHP knowledge with JS to
                                                    <br />
                                                    make smart web
                                                </h3>
                                            </div>
                                            <p className="self-start text-sm font-medium tracking-tight text-slate-600">
                                                01h 59m
                                            </p>
                                        </div>
                                        <div
                                            className="flex gap-5 justify-between mt-14 text-2xl font-semibold tracking-tighter leading-loose whitespace-nowrap text-slate-600 max-md:mt-10 max-md:max-w-full">
                                            <p>Rs.499</p>
                                            <img loading="lazy" src="assets/course-shop-icon.png" alt="Add to cart"
                                                className="object-contain shrink-0 self-start aspect-square w-[26px]" />
                                        </div>
                                    </div>
                                </div>
                            </article>
                            <article className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                                <div
                                    className="flex flex-col grow mt-16 w-full font-semibold leading-9 bg-white rounded-3xl text-slate-600 max-md:mt-10 max-md:max-w-full">
                                    <img loading="lazy" src="assets/course-3.png" alt="Education Software course thumbnail"
                                        className="object-contain z-10 mt-0 w-full rounded-none aspect-[1.63] max-md:max-w-full" />
                                    <div className="flex flex-col px-8 py-7 w-full bg-white rounded-none max-md:px-5 max-md:max-w-full">
                                        <div className="flex gap-5 justify-between text-sm font-medium tracking-tight max-md:max-w-full">
                                            <p>2957 Students</p>
                                            <p>02h 49m</p>
                                        </div>
                                        <h3 className="self-start mt-5 text-2xl tracking-tighter text-slate-700">
                                            Education Software and PHP and JS
                                            <br />
                                            System Script
                                        </h3>
                                        <div
                                            className="flex gap-5 justify-between mt-12 ml-3 text-2xl tracking-tighter leading-loose whitespace-nowrap max-md:mt-10 max-md:mr-1 max-md:max-w-full">
                                            <p>Rs.499</p>
                                            <img loading="lazy" src="assets/course-shop-icon.png" alt="Add to cart"
                                                className="object-contain shrink-0 self-start aspect-square w-[26px]" />
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                    <div className="mt-12 max-md:mt-10 max-md:max-w-full">
                        <div className="flex gap-5 max-md:flex-col">
                            <article className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                                <div
                                    className="flex flex-col mx-auto mt-20 w-full bg-white rounded-3xl text-slate-600 max-md:mt-10 max-md:max-w-full">
                                    <img loading="lazy" src="assets/course-4.png" alt="Financial Analyst course thumbnail"
                                        className="object-contain z-10 mt-0 w-full rounded-none aspect-[1.63] max-md:max-w-full" />
                                    <div className="flex flex-wrap gap-10 px-8 pt-7 pb-4 mt-1.5 bg-white rounded-none max-md:px-5">
                                        <div className="flex flex-col grow shrink-0 font-semibold basis-0 w-fit">
                                            <div className="flex z-10 flex-col items-start pl-2.5 leading-9">
                                                <p className="text-sm font-medium tracking-tight">
                                                    5,457 Students
                                                </p>
                                                <h3 className="self-stretch mt-5 text-2xl tracking-tighter text-slate-700">
                                                    The Complete Financial Analyst
                                                    <br />
                                                    Training & Investing
                                                </h3>
                                                <p className="mt-12 text-2xl tracking-tighter leading-loose max-md:mt-10">
                                                    Rs.499
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col self-start text-sm font-medium tracking-tight leading-9">
                                            <p>01h 49m</p>
                                            <img loading="lazy" src="assets/course-shop-icon.png" alt="Add to cart"
                                                className="object-contain self-end mt-32 aspect-square w-[26px] max-md:mt-10" />
                                        </div>
                                    </div>
                                </div>
                            </article>
                            <article className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                                <div
                                    className="flex flex-col px-0.5 w-full font-semibold leading-9 bg-indigo-50 rounded-none text-slate-600 max-md:mt-10 max-md:max-w-full">
                                    <div className="flex flex-col pb-5 bg-white rounded-3xl max-md:max-w-full">
                                        <img loading="lazy" src="assets/course-5.png" alt="Instagram Growth course thumbnail"
                                            className="object-contain w-full rounded-none aspect-[1.63] max-md:max-w-full" />
                                        <div className="flex flex-col px-8 mt-7 w-full max-md:px-5 max-md:max-w-full">
                                            <div className="flex gap-5 justify-between text-sm font-medium tracking-tight max-md:max-w-full">
                                                <p>595 Students</p>
                                                <p>01h 49m</p>
                                            </div>
                                            <h3 className="self-start mt-5 text-2xl tracking-tighter text-slate-700">
                                                Marketing 2023: Complete Guide To
                                                <br />
                                                Instagram Growth
                                            </h3>
                                            <div
                                                className="flex gap-5 justify-between mt-12 text-2xl tracking-tighter leading-loose whitespace-nowrap max-md:mt-10 max-md:max-w-full">
                                                <p>Rs.499</p>
                                                <img loading="lazy" src="assets/course-shop-icon.png" alt="Add to cart"
                                                    className="object-contain shrink-0 self-start aspect-square w-[26px]" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            <article className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                                <div
                                    className="flex flex-col mx-auto mt-16 w-full leading-9 bg-white rounded-3xl text-slate-600 max-md:mt-10 max-md:max-w-full">
                                    <img loading="lazy" src="assets/course-6.png" alt="3D Modelling course thumbnail"
                                        className="object-contain z-10 mt-0 w-full rounded-none aspect-[1.63] max-md:max-w-full" />
                                    <div className="flex flex-wrap gap-10 px-9 py-8 bg-white rounded-none max-md:px-5">
                                        <div className="flex flex-col grow shrink-0 items-start font-semibold basis-0 w-fit">
                                            <p className="text-sm font-medium tracking-tight">
                                                458 Students
                                            </p>
                                            <h3 className="self-stretch mt-5 text-2xl tracking-tighter text-slate-700">
                                                Learn 3D Modelling and Design
                                                <br />
                                                for Beginners
                                            </h3>
                                            <p className="mt-11 ml-3 text-2xl tracking-tighter leading-loose max-md:mt-10 max-md:ml-2.5">
                                                Rs.499
                                            </p>
                                        </div>
                                        <div className="flex flex-col self-start text-sm font-medium tracking-tight">
                                            <p>03h 00m</p>
                                            <img loading="lazy" src="assets/course-shop-icon.png" alt="Add to cart"
                                                className="object-contain self-end mt-32 aspect-square w-[26px] max-md:mt-10 max-md:mr-1" />
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
                <div
                    className="px-10 py-3 items-center text-white rounded-xl font-Righteous bg-gradient-to-r from-primary1 to-secondary1 pr-10 mt-5 mb-20">
                    <button>Explore courses</button>
                </div>
            </section>
            {/* <!-- learn course --> */}
            <section className="flex flex-col bg-gradient-to-r from-primary5 to-secondary5">
                <div className="flex flex-col justify-center items-center py-32">
                    <div className="flex flex-wrap gap-10 justify-around items-start -mb-7">
                        <div className="flex flex-col items-center self-end mt-6 text-white max-md:max-w-full">
                            <h2 className="text-5xl leading-none max-md:max-w-full max-md:text-4xl font-Righteous">
                                Why <span className="text-blue-700 fo">learn</span> with our courses?
                            </h2>
                            <p className="mt-6 text-2xl leading-9 text-center w-[728px] max-md:max-w-full">
                                We are providing the best courses and top classNamees. And extraordinary placement training.....
                            </p>
                            <div
                                className="flex flex-wrap gap-5 justify-between self-stretch mt-32 text-center max-md:mt-10 max-md:max-w-full">
                                <div className="flex flex-col items-center self-start">
                                    <img loading="lazy" src="assets/learn-1.png" alt="Learn icon" className="object-contain w-20 aspect-square" />
                                    <h3 className="mt-10 text-2xl leading-none max-md:mt-10 font-Righteous">01. Learn</h3>
                                    <p className="self-stretch mt-8 text-lg leading-7 font-Righteous">
                                        Learn continually. There is always
                                        <br />
                                        one more thing to learn.
                                    </p>
                                </div>
                                <div className="shrink-0 w-0.5 h-[250px]"></div>
                                <div className="flex flex-col self-start">
                                    <div className="flex flex-col pr-8 pl-2.5 text-2xl leading-none max-md:pr-5">
                                        <img loading="lazy" src="assets/learn-2.png" alt="Graduate icon"
                                            className="object-contain self-center w-20 aspect-square" />
                                        <h3 className="self-start mt-10 max-md:mt-10 font-Righteous">02. Graduate</h3>
                                    </div>
                                    <p className="mt-10 text-lg leading-7 font-Righteous">
                                        Be bold, be courageous,
                                        <br />
                                        be your best.
                                    </p>
                                </div>
                                <div className="shrink-0 w-0.5 h-[250px]"></div>
                                <div className="flex flex-col items-center">
                                    <img loading="lazy" src="assets/learn-3.png" alt="Work icon" className="object-contain w-20 aspect-square" />
                                    <h3 className="mt-10 text-2xl leading-none max-md:mt-10 font-Righteous">03. Work</h3>
                                    <p className="self-stretch mt-9 text-lg leading-7 font-Righteous">
                                        Great companies are built in
                                        <br />
                                        the office, with hard work put
                                        <br />
                                        in by team.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Top Categories --> */}
            <section
                className="flex flex-col justify-center items-center text-center bg-gradient-to-b from-primary6 to-secondary6 font-Righteous">
                <div className="flex flex-col items-center mt-20 mb-28">
                    <h2 className="text-5xl leading-none text-zinc-800 max-md:text-4xl font-Righteous">
                        Top <span className="text-blue-700">Categories</span>
                    </h2>
                    <p className="mt-4 ml-3 text-2xl leading-none text-slate-600 font-Righteous">
                        100+ unique online course list designs
                    </p>
                    <div className="flex flex-wrap gap-5 self-stretch mt-32 max-md:mt-10 max-md:max-w-full">
                        <article
                            className="flex flex-col flex-1 items-center px-12 py-11 bg-white rounded-3xl shadow-[0px_4px_4px_rgba(217,236,255,0.5)] max-md:px-5">
                            <img loading="lazy" src="assets/Categories-1.png" alt="Digital Marketing icon"
                                className="object-contain rounded-lg aspect-square w-[90px]" />
                            <h3 className="mt-12 text-2xl leading-9 text-slate-700 max-md:mt-10">
                                Digital
                                <br />
                                Marketing
                            </h3>
                            <p className="mt-11 text-lg leading-none text-slate-600 max-md:mt-10">25 Courses</p>
                        </article>
                        <article
                            className="flex flex-col flex-1 items-center px-12 py-11 bg-white rounded-3xl shadow-[0px_4px_4px_rgba(217,236,255,0.5)] max-md:px-5">
                            <img loading="lazy" src="assets/Categories-2.png" alt="Web Development icon"
                                className="object-contain rounded-lg aspect-square w-[90px]" />
                            <h3 className="mt-12 text-2xl leading-9 text-slate-700 max-md:mt-10">
                                Web
                                <br />
                                Development
                            </h3>
                            <p className="mt-11 text-lg leading-none text-slate-600 max-md:mt-10">16 Courses</p>
                        </article>
                        <article
                            className="flex flex-col flex-1 items-center px-12 py-11 bg-white rounded-3xl shadow-[0px_4px_4px_rgba(217,236,255,0.5)] max-md:px-5">
                            <img loading="lazy" src="assets/Categories-3.png" alt="Art & Humanities icon"
                                className="object-contain rounded-lg aspect-square w-[90px]" />
                            <h3 className="mt-12 text-2xl leading-9 text-slate-700 max-md:mt-10">
                                Art &
                                <br />
                                Humanities
                            </h3>
                            <p className="mt-10 text-lg leading-none text-slate-600">76 Courses</p>
                        </article>
                        <article
                            className="flex flex-col flex-1 items-center px-12 py-11 bg-white rounded-3xl shadow-[0px_4px_4px_rgba(217,236,255,0.5)] max-md:px-5">
                            <img loading="lazy" src="assets/Categories-4.png" alt="Personal Development icon"
                                className="object-contain rounded-lg aspect-square w-[90px]" />
                            <h3 className="mt-12 text-2xl leading-9 text-slate-700 max-md:mt-10">
                                Personal
                                <br />
                                Development
                            </h3>
                            <p className="mt-10 text-lg leading-none text-slate-600">22 Courses</p>
                        </article>
                        <article
                            className="flex flex-col flex-1 items-center px-12 py-11 bg-white rounded-3xl shadow-[0px_4px_4px_rgba(217,236,255,0.5)] max-md:px-5">
                            <img loading="lazy" src="assets/Categories-5.png" alt="IT and Software icon"
                                className="object-contain rounded-lg aspect-square w-[90px]" />
                            <h3 className="mt-12 text-2xl leading-9 text-slate-700 max-md:mt-10">
                                IT and
                                <br />
                                Software
                            </h3>
                            <p className="mt-10 text-lg leading-none text-slate-600">110 Courses</p>
                        </article>
                        <article
                            className="flex flex-col flex-1 items-center px-12 py-11 bg-white rounded-3xl shadow-[0px_4px_4px_rgba(217,236,255,0.5)] max-md:px-5">
                            <img loading="lazy" src="assets/Categories-6.png" alt="Graphic Design icon"
                                className="object-contain rounded-lg aspect-square w-[90px]" />
                            <h3 className="mt-12 text-2xl leading-9 text-slate-700 max-md:mt-10">
                                Graphic
                                <br />
                                Design
                            </h3>
                            <p className="mt-10 text-lg leading-none text-slate-600">85 Courses</p>
                        </article>
                    </div>
                </div>
            </section>
            {/* <!-- Subscribe Course --> */}
            <section className="flex z-10 flex-col self-center mt-40 ml-5 w-full max-w-[1398px] max-md:mt-10 max-md:max-w-full">
                <div className="px-12 py-16 max-w-full rounded-3xl w-[1280px] max-md:px-5">
                    <div
                        className="flex gap-5 max-md:flex-col bg-gradient-to-r from-color1 via-color2 to-color3 font-Righteous p-12 rounded-md">
                        <div className="flex flex-col w-1/5 max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow max-md:mt-10">
                                <img loading="lazy" src="assets/Subscribe-1.png" alt="Decorative circle"
                                    className="object-contain rounded-full aspect-square w-[60px]" />
                                <div className="flex flex-col pl-8 mt-11 max-md:pl-5 max-md:mt-10">
                                    <img loading="lazy" src="assets/Subscribe-2.png" alt="Decorative circle"
                                        className="object-contain self-end rounded-full aspect-square w-[60px]" />
                                    <img loading="lazy" src="assets/Subscribe-3.png" alt="Decorative circle"
                                        className="object-contain mt-16 rounded-full aspect-square w-[60px] max-md:mt-10" />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-[59%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col self-stretch my-auto w-full text-base text-white max-md:mt-10 max-md:max-w-full">
                                <h2 className="text-5xl text-center leading-[55px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
                                    Subscribe For Get Update
                                    <br />
                                    Every New Courses
                                </h2>
                                <p className="self-center mt-5 leading-8 text-center text-white text-opacity-70 max-md:max-w-full">
                                    20k+ students daily learn with Eduvi. Subscribe for new courses.
                                </p>
                                <form className="flex flex-wrap text-white mt-10 mr-4 ml-4 max-md:mr-2.5 max-md:max-w-full" action="#"
                                    method="POST">
                                    <label className="sr-only text-white">Enter your email</label>
                                    <input type="email" id="email-input" placeholder="enter your email"
                                        className="grow px-5 py-4 leading-8 rounded-xl bg-white bg-opacity-20 w-fit" required />
                                    <button type="submit" className="px-9 py-5 text-right whitespace-nowrap bg-blue-700 rounded-md max-md:px-5">
                                        Subscribe
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-1/5 max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow items-end max-md:mt-10">
                                <img loading="lazy" src="assets/Subscribe-4.png" alt="Decorative circle"
                                    className="object-contain mr-8 rounded-full aspect-square w-[60px] max-md:mr-2.5" />
                                <img loading="lazy" src="assets/Subscribe-5.png" alt="Decorative circle"
                                    className="object-contain self-start mt-16 rounded-full aspect-square w-[60px] max-md:mt-10" />
                                <img loading="lazy" src="assets/Subscribe-6.png" alt="Decorative circle"
                                    className="object-contain mt-11 rounded-full aspect-square w-[60px] max-md:mt-10" />
                            </div>
                        </div>
                    </div>
                </div>
                <img loading="lazy" src="assets/Polygon.png" alt="Decorative shape"
                    className="object-contain self-end mt-32 w-20 rounded-2xl aspect-[0.99] max-md:mt-10" />
                <img loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e8af3e0b509d71dcae1ca54fd1510a3978ecbd4c6591cf8b1fde71e7af46fda3?placeholderIfAbsent=true&apiKey=1a56bab3e85945d2844d1cc0f6f196f4"
                    alt="Testimonial background"
                    className="object-contain self-center mt-20 ml-2.5 w-full aspect-[1.82] max-w-[1334px] rounded-[68px] max-md:mt-10 max-md:max-w-full" />
            </section>
            {/* <!-- Testimonials section --> */}
            <section className="flex flex-col mt-12 bg-gradient-to-b from-primary6 to-secondary6 font-Righteous">
                <div className="flex flex-wrap gap-5 justify-between max-w-full text-center w-[979px]">
                    <img loading="lazy" src="assets/Ellipse.png" alt="Decorative circle"
                        className="object-contain shrink-0 self-start mt-1.5 max-w-full rounded-full" />
                    <div className="flex flex-col mt-20">
                        <h2 className="self-center text-5xl leading-none text-blue-700 max-md:text-4xl">
                            Testimonials
                        </h2>
                        <p className="mt-8 text-2xl leading-relaxed text-slate-600">
                            What our student say about us
                        </p>
                    </div>
                </div>
                <img loading="lazy" src="assets/Testimonial-women-image.png" alt="Quotation mark"
                    className="object-contain z-10 self-center mt-36" />
                <div className="self-center ml-5">
                    <div className="flex gap-5 max-md:flex-col">
                        <article className="flex flex-col">
                            <div className="flex z-10 flex-col grow mt-2.5 mr-0 text-base leading-8 text-slate-500">
                                <img loading="lazy" src="assets/Testimonial-women-image.png" alt="Quotation mark"
                                    className="object-contain z-10 self-center ml-5" />
                                <div className="flex flex-col px-14 pt-10 pb-6 bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
                                    <p className="">
                                        Such an amazing trainer and easily understand the entire
                                        <br />
                                        syllabus, and the guidance will be super and good to the way of explaining.
                                    </p>
                                    <img loading="lazy" src="assets/Testimonial-rating.png" alt="Five star rating"
                                        className="object-contain mt-11 max-w-full aspect-[7.25] w-[138px] max-md:mt-10" />
                                </div>
                            </div>
                        </article>
                        <article className="flex flex-col ml-5">
                            <div
                                className="flex flex-col px-16 pt-14 pb-2 mr-0 text-base leading-8 bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-slate-500">
                                <p className="">
                                    Such an amazing trainer and easily understand the entire
                                    <br />
                                    syllabus, and the guidance will be super and good to the way of explaining.
                                </p>
                                <img loading="lazy" src="assets/Testimonial-rating.png" alt="Five star rating"
                                    className="object-contain mt-9 max-w-full aspect-[7.25] w-[138px] max-md:ml-2.5" />
                            </div>
                        </article>
                        <article className="flex flex-col ml-5">
                            <div className="flex flex-col grow mt-3.5 text-base leading-8 text-slate-500">
                                <img loading="lazy" src="assets/Testimonial-women-image.png" alt="Quotation mark"
                                    className="object-contain z-10 self-center" />
                                <div className="flex flex-col px-12 pt-16 pb-3 bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
                                    <p className="">
                                        Such an amazing trainer and easily understand the entire
                                        <br />
                                        syllabus, and the guidance will be super and good to the way of explaining.
                                    </p>
                                    <img loading="lazy" src="assets/Testimonial-rating.png" alt="Five star rating"
                                        className="object-contain mt-8 ml-3 max-w-full aspect-[7.25] w-[138px] max-md:ml-2.5" />
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="flex self-end mt-40 mr-10 mb-8">
                    <button aria-label="Previous testimonial" className="focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <img loading="lazy" src="assets/Testimonial-left-arrow.png" alt="Left arrow"
                            className="object-contain shrink-0 aspect-[1.19] w-[50px]" />
                    </button>
                    <button aria-label="Next testimonial" className="focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <img loading="lazy" src="assets/Testimonial-right-arrow.png" alt="Right arrow"
                            className="object-contain shrink-0 aspect-[1.19] w-[50px]" />
                    </button>
                </div>
            </section>
            {/* <!-- footer section --> */}
            <footer
                className="flex flex-col pt-14 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] font-Righteous bg-gradient-to-b from-primary7 to-secondary7">
                <div className="flex flex-wrap gap-5 justify-between ml-10">
                    <div className="flex flex-col items-start self-start mt-3">
                        <h3 className="ml-12 text-2xl text-slate-900">Connect</h3>
                        <img loading="lazy" src="assets/company-logo.png" alt="Company logo" className="object-contain z-10 mt-12" />
                        <address className="self-stretch -mt-1.5 ml-3.5 text-base text-black mt-4">
                            Sri Jagannath Nivas,8-1-164/345/A/1,
                            <br />
                            Pragati Colony, Mailardevpally, Nawab
                            <br />
                            Saheb Kunta, Hyd, 500005
                        </address>
                    </div>
                    <nav className="flex flex-wrap gap-10 items-start">
                        <div className="flex flex-col items-start text-xl text-black">
                            <h3 className="text-3xl text-slate-900">classNamees</h3>
                            <ul className="mt-9">
                                <li><a href="#classNameroom-courses">classNameroom courses</a></li>
                                <li className="mt-8"><a href="#virtual-classNameroom-courses">Virtual classNameroom courses</a></li>
                                <li className="mt-6"><a href="#e-learning-courses">E-learning courses</a></li>
                                <li className="mt-5"><a href="#video-courses">Video Courses</a></li>
                                <li className="mt-6"><a href="#offline-courses">Offline Courses</a></li>
                            </ul>
                        </div>
                        <div className="flex flex-col whitespace-nowrap">
                            <h3 className="text-3xl text-slate-900">Community</h3>
                            <ul className="flex flex-col items-start pr-6 pl-1.5 mt-5 text-xl text-black">
                                <li><a href="#learners">Learners</a></li>
                                <li className="mt-8"><a href="#partners">Partners</a></li>
                                <li className="mt-6"><a href="#developers">Developers</a></li>
                                <li className="mt-5"><a href="#transactions">Transactions</a></li>
                                <li className="mt-7"><a href="#blog">Blog</a></li>
                            </ul>
                        </div>
                        <div className="flex flex-col items-start mt-1 text-xl text-black">
                            <h3 className="text-3xl text-slate-900">Quick links</h3>
                            <ul className="mt-6">
                                <li><a href="#home">Home</a></li>
                                <li className="mt-7"><a href="#professional-education">Professional Education</a></li>
                                <li className="mt-6"><a href="#courses">Courses</a></li>
                                <li className="mt-6"><a href="#admissions">Admissions</a></li>
                                <li className="mt-7"><a href="#testimonial">Testimonial</a></li>
                                <li className="mt-6"><a href="#programs">Programs</a></li>
                            </ul>
                        </div>
                        <div className="flex flex-col items-start self-stretch text-xl text-gray-800 whitespace-nowrap">
                            <h3 className="text-3xl text-slate-900">More</h3>
                            <ul className="mt-9 mr-32">
                                <li><a href="#press">Press</a></li>
                                <li className="mt-8"><a href="#investors">Investors</a></li>
                                <li className="mt-8"><a href="#terms">Terms</a></li>
                                <li className="mt-8"><a href="#privacy">Privacy</a></li>
                                <li className="mt-7"><a href="#help">Help</a></li>
                                <li className="mt-7"><a href="#contact">Contact</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div className="flex z-10 flex-col items-center px-20 pt-8 pb-3.5 mt-12 mb-0">
                    <div className="flex flex-col">
                        <div className="flex gap-8 items-start">
                            <a href="#Instagram"
                                className="flex flex-col flex-1 justify-center p-3.5 bg-white rounded-full border border-blue-700 border-solid"
                                aria-label="Instagram">
                                <img loading="lazy" src="assets/footer-Instagram.png" alt="" className="object-contain" />
                            </a>
                            <a href="#WhatsApp"
                                className="flex flex-col flex-1 justify-center p-3.5 bg-white rounded-full border border-blue-700 border-solid"
                                aria-label="WhatsApp">
                                <img loading="lazy" src="assets/footer-WhatsApp.png" alt="" className="object-contain" />
                            </a>
                            <a href="#X"
                                className="flex flex-col flex-1 justify-center p-3.5 bg-white rounded-full border border-blue-700 border-solid"
                                aria-label="X">
                                <img loading="lazy" src="assets/footer-X.png" alt="" className="object-contain" />
                            </a>
                            <a href="#LinkedIn"
                                className="flex flex-col flex-1 justify-center p-3.5 bg-white rounded-full border border-blue-700 border-solid"
                                aria-label="LinkedIn">
                                <img loading="lazy" src="assets/footer-LinkedIn.png" alt="" className="object-contain" />
                            </a>
                            <a href="#YouTube"
                                className="flex flex-col flex-1 justify-center p-3.5 bg-white rounded-full border border-blue-700 border-solid"
                                aria-label="YouTube">
                                <img loading="lazy" src="assets/footer-YouTube.png" alt="" className="object-contain" />
                            </a>
                        </div>
                        <p className="self-center mt-3.5 text-base text-white">
                            Copyright @ 2023 askmeidentity. All Rights Reserved
                        </p>
                    </div>
                </div>
            </footer>
            {/* </section> */}
        </div >
    );
};

export default TailwindLandingPage;