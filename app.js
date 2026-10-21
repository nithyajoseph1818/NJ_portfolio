"use strict";
const BRANDS = { "java": { "vb": "0 0 384 512", "inner": "<path d=\"M277.74 312.9c9.8-6.7 23.4-12.5 23.4-12.5s-38.7 7-77.2 10.2c-47.1 3.9-97.7 4.7-123.1 1.3-60.1-8 33-30.1 33-30.1s-36.1-2.4-80.6 19c-52.5 25.4 130 37 224.5 12.1zm-85.4-32.1c-19-42.7-83.1-80.2 0-145.8C296 53.2 242.84 0 242.84 0c21.5 84.5-75.6 110.1-110.7 162.6-23.9 35.9 11.7 74.4 60.2 118.2zm114.6-176.2c.1 0-175.2 43.8-91.5 140.2 24.7 28.4-6.5 54-6.5 54s62.7-32.4 33.9-72.9c-26.9-37.8-47.5-56.6 64.1-121.3zm-6.1 270.5a12.19 12.19 0 0 1-2 2.6c128.3-33.7 81.1-118.9 19.8-97.3a17.33 17.33 0 0 0-8.2 6.3 70.45 70.45 0 0 1 11-3c31-6.5 75.5 41.5-20.6 91.4zM348 437.4s14.5 11.9-15.9 21.2c-57.9 17.5-240.8 22.8-291.6.7-18.3-7.9 16-19 26.8-21.3 11.2-2.4 17.7-2 17.7-2-20.3-14.3-131.3 28.1-56.4 40.2C232.84 509.4 401 461.3 348 437.4zM124.44 396c-78.7 22 47.9 67.4 148.1 24.5a185.89 185.89 0 0 1-28.2-13.8c-44.7 8.5-65.4 9.1-106 4.5-33.5-3.8-13.9-15.2-13.9-15.2zm179.8 97.2c-78.7 14.8-175.8 13.1-233.3 3.6 0-.1 11.8 9.7 72.4 13.6 92.2 5.9 233.8-3.3 237.1-46.9 0 0-6.4 16.5-76.2 29.7zM260.64 353c-59.2 11.4-93.5 11.1-136.8 6.6-33.5-3.5-11.6-19.7-11.6-19.7-86.8 28.8 48.2 61.4 169.5 25.9a60.37 60.37 0 0 1-21.1-12.8z\"></path>", "color": "#E76F00" }, "springboot": { "vb": "0 0 24 24", "inner": "<path d=\"m23.693 10.7058-4.73-8.1844c-.4094-.7106-1.4166-1.2942-2.2402-1.2942H7.2725c-.819 0-1.8308.5836-2.2402 1.2942L.307 10.7058c-.4095.7106-.4095 1.873 0 2.5837l4.7252 8.189c.4094.7107 1.4166 1.2943 2.2402 1.2943h9.455c.819 0 1.826-.5836 2.2402-1.2942l4.7252-8.189c.4095-.7107.4095-1.8732 0-2.5838zM10.9763 5.7547c0-.5365.4377-.9742.9742-.9742s.9742.4377.9742.9742v5.8217c0 .5366-.4377.9742-.9742.9742s-.9742-.4376-.9742-.9742zm.9742 12.4294c-3.6427 0-6.6077-2.965-6.6077-6.6077.0047-2.0896.993-4.0521 2.6685-5.304a.8657.8657 0 0 1 1.2142.1788.8657.8657 0 0 1-.1788 1.2143c-2.1602 1.6048-2.612 4.6592-1.0072 6.8194 1.6049 2.1603 4.6593 2.612 6.8195 1.0072 1.2378-.9177 1.9673-2.372 1.9673-3.9157a4.8972 4.8972 0 0 0-1.9861-3.925c-.386-.2824-.466-.8284-.1836-1.2143.2824-.386.8283-.466 1.2143-.1835 1.6895 1.2471 2.6826 3.2238 2.6873 5.3228 0 3.6474-2.965 6.6077-6.6077 6.6077z\"></path>", "color": "#6DB33F" }, "python": { "vb": "0 0 24 24", "inner": "<path d=\"M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z\"></path>", "color": "#3776AB" }, "c": { "vb": "0 0 24 24", "inner": "<path d=\"M16.5921 9.1962s-.354-3.298-3.627-3.39c-3.2741-.09-4.9552 2.474-4.9552 6.14 0 3.6651 1.858 6.5972 5.0451 6.5972 3.184 0 3.5381-3.665 3.5381-3.665l6.1041.365s.36 3.31-2.196 5.836c-2.552 2.5241-5.6901 2.9371-7.8762 2.9201-2.19-.017-5.2261.034-8.1602-2.97-2.938-3.0101-3.436-5.9302-3.436-8.8002 0-2.8701.556-6.6702 4.047-9.5502C7.444.72 9.849 0 12.254 0c10.0422 0 10.7172 9.2602 10.7172 9.2602z\"></path>", "color": "#5C8DC9" }, "html": { "vb": "0 0 24 24", "inner": "<path d=\"M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z\"></path>", "color": "#E34F26" }, "css": { "vb": "0 0 512 512", "inner": "<path d=\"M480 32l-64 368-223.3 80L0 400l19.6-94.8h82l-8 40.6L210 390.2l134.1-44.4 18.8-97.1H29.5l16-82h333.7l10.5-52.7H56.3l16.3-82H480z\"></path>", "color": "#1572B6" }, "javascript": { "vb": "0 0 24 24", "inner": "<path d=\"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z\"></path>", "color": "#F0B90B" }, "git": { "vb": "0 0 24 24", "inner": "<path d=\"M13.09 23.549a1.54 1.54 0 0 1-2.18 0L.451 13.089a1.54 1.54 0 0 1 0-2.179l7.191-7.19 2.733 2.733a1.85 1.85 0 0 0 .964 2.326v6.66a1.849 1.849 0 1 0 1.54 0V8.957l2.508 2.508a1.85 1.85 0 1 0 1.09-1.09l-2.634-2.634a1.85 1.85 0 0 0-2.378-2.377L8.73 2.63 10.91.451a1.54 1.54 0 0 1 2.179 0l10.459 10.46a1.54 1.54 0 0 1 0 2.179z\"></path>", "color": "#F05032" }, "github": { "vb": "0 0 24 24", "inner": "<path d=\"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12\"></path>", "color": "" }, "figma": { "vb": "0 0 24 24", "inner": "<path d=\"M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z\"></path>", "color": "#F24E1E" }, "streamlit": { "vb": "0 0 24 24", "inner": "<path d=\"M16.673 11.32l6.862-3.618c.233-.136.554.12.442.387L20.463 17.1zm-8.556-.229l3.473-5.187c.203-.328.578-.316.793-.028l7.886 11.75zm-3.375 7.25c-.28 0-.835-.284-.993-.716l-3.72-9.46c-.118-.331.139-.614.48-.464l19.474 10.306c-.149.147-.453.337-.72.334z\"></path>", "color": "#FF4B4B" }, "linkedin": { "vb": "0 0 448 512", "inner": "<path d=\"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z\"></path>", "color": "#0A66C2" }, "mysql": { "vb": "0 0 24 24", "inner": "<path d=\"M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zM5.77 18.695h-.927a50.854 50.854 0 00-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a72.892 72.892 0 00-.195 4.41H0c.055-1.966.192-3.81.41-5.53h1.15l1.335 4.064h.008l1.347-4.064h1.095c.242 2.015.384 3.86.428 5.53zm4.017-4.08c-.378 2.045-.876 3.533-1.492 4.46-.482.716-1.01 1.073-1.583 1.073-.153 0-.34-.046-.566-.138v-.494c.11.017.24.026.386.026.268 0 .483-.075.647-.222.197-.18.295-.382.295-.605 0-.155-.077-.47-.23-.944L6.23 14.615h.91l.727 2.36c.164.536.233.91.205 1.123.4-1.064.678-2.227.835-3.483zm12.325 4.08h-2.63v-5.53h.885v4.85h1.745zm-3.32.135l-1.016-.5c.09-.076.177-.158.255-.25.433-.506.648-1.258.648-2.253 0-1.83-.718-2.746-2.155-2.746-.704 0-1.254.232-1.65.697-.43.508-.646 1.256-.646 2.245 0 .972.19 1.686.574 2.14.35.41.877.615 1.583.615.264 0 .506-.033.725-.098l1.325.772.36-.622zM15.5 17.588c-.225-.36-.337-.94-.337-1.736 0-1.393.424-2.09 1.27-2.09.443 0 .77.167.977.5.224.362.336.936.336 1.723 0 1.404-.424 2.108-1.27 2.108-.445 0-.77-.167-.978-.5zm-1.658-.425c0 .47-.172.856-.516 1.156-.344.3-.803.45-1.384.45-.543 0-1.064-.172-1.573-.515l.237-.476c.438.22.833.328 1.19.328.332 0 .593-.073.783-.22a.754.754 0 00.3-.615c0-.33-.23-.61-.648-.845-.388-.213-1.163-.657-1.163-.657-.422-.307-.632-.636-.632-1.177 0-.45.157-.81.47-1.085.315-.278.72-.415 1.22-.415.512 0 .98.136 1.4.41l-.213.476a2.726 2.726 0 00-1.064-.23c-.283 0-.502.068-.654.206a.685.685 0 00-.248.524c0 .328.234.61.666.85.393.215 1.187.67 1.187.67.433.305.648.63.648 1.168zm9.382-5.852c-.535-.014-.95.04-1.297.188-.1.04-.26.04-.274.167.055.053.063.14.11.214.08.134.218.313.346.407.14.11.28.216.427.31.26.16.555.255.81.416.145.094.293.213.44.313.073.05.12.14.214.172v-.02c-.046-.06-.06-.147-.105-.214-.067-.067-.134-.127-.2-.193a3.223 3.223 0 00-.695-.675c-.214-.146-.682-.35-.77-.595l-.013-.014c.146-.013.32-.066.46-.106.227-.06.435-.047.67-.106.106-.027.213-.06.32-.094v-.06c-.12-.12-.21-.283-.334-.395a8.867 8.867 0 00-1.104-.823c-.21-.134-.476-.22-.697-.334-.08-.04-.214-.06-.26-.127-.12-.146-.19-.34-.275-.514a17.69 17.69 0 01-.547-1.163c-.12-.262-.193-.523-.34-.763-.69-1.137-1.437-1.826-2.586-2.5-.247-.14-.543-.2-.856-.274-.167-.008-.334-.02-.5-.027-.11-.047-.216-.174-.31-.235-.38-.24-1.364-.76-1.644-.072-.18.434.267.862.422 1.082.115.153.26.328.34.5.047.116.06.235.107.356.106.294.207.622.347.897.073.14.153.287.247.413.054.073.146.107.167.227-.094.136-.1.334-.154.5-.24.757-.146 1.693.194 2.25.107.166.362.534.703.393.3-.12.234-.5.32-.835.02-.08.007-.133.048-.187v.015c.094.188.188.367.274.555.206.328.566.668.867.895.16.12.287.328.487.402v-.02h-.015c-.043-.058-.1-.086-.154-.133a3.445 3.445 0 01-.35-.4 8.76 8.76 0 01-.747-1.218c-.11-.21-.202-.436-.29-.643-.04-.08-.04-.2-.107-.24-.1.146-.247.273-.32.453-.127.288-.14.642-.188 1.01-.027.007-.014 0-.027.014-.214-.052-.287-.274-.367-.46-.2-.475-.233-1.238-.06-1.785.047-.14.247-.582.167-.716-.042-.127-.174-.2-.247-.303a2.478 2.478 0 01-.24-.427c-.16-.374-.24-.788-.414-1.162-.08-.173-.22-.354-.334-.513-.127-.18-.267-.307-.368-.52-.033-.073-.08-.194-.027-.274.014-.054.042-.075.094-.09.088-.072.335.022.422.062.247.1.455.194.662.334.094.066.195.193.315.226h.14c.214.047.455.014.655.073.355.114.675.28.962.46a5.953 5.953 0 012.085 2.286c.08.154.115.295.188.455.14.33.313.663.455.982.14.315.275.636.476.897.1.14.502.213.682.286.133.06.34.115.46.188.23.14.454.3.67.454.11.076.443.243.463.378z\"></path>", "color": "#4479A1" } };
/* Nithya Joseph portfolio. React 18 (UMD globals). All facts come from the CV. */
const { useState, useEffect, useRef, useCallback } = React;
const EMAIL = "nithyajoseph1818@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/nithyajoseph-sns";
const GITHUB = "https://github.com/nithyajoseph1818";
const CV = "assets/Nithya_Joseph_Resume.pdf";
const NAV = [
    ["about", "About"], ["skills", "Skills"], ["projects", "Projects"],
    ["experience", "Experience"], ["achievements", "Achievements"], ["contact", "Contact"],
];
const SKILLS = [
    { key: "backend", title: "Backend development", primary: true, items: ["Spring Boot", "Microservices", "REST APIs", "Backend architecture"] },
    { key: "languages", title: "Programming languages", items: ["Java", "Python", "C", "SQL"] },
    { key: "ai", title: "AI and machine learning", items: ["Generative AI", "Machine learning", "RAG", "CNN", "LLM APIs", "Prompt engineering"] },
    { key: "tools", title: "Frontend and tools", items: ["HTML", "CSS", "JavaScript", "Git", "GitHub", "Figma", "Canva"] },
];
const PROJECTS = [
    {
        id: "airline", viz: "flight", file: "AirlineManagement.java", name: "Airline Management System", tag: "Backend / Microservices",
        summary: "A flight management application for flight scheduling and crew management, built on a modular microservices architecture.",
        points: [
            "Admin dashboard with five modules: flight scheduler, booking, crew management, check-in and boarding, and loyalty program.",
            "Booking confirmation view with PNR reference, route, travel date, seat and passenger details.",
        ],
        stack: ["Java", "Spring Boot", "Microservices"],
        shots: [
            { src: "assets/arfoms-dashboard.webp", w: 1290, h: 680, label: "Admin dashboard", alt: "ARFOMS dashboard with Flight Scheduler, Booking, Crew Management, Check-in and Boarding, and Loyalty Program modules" },
            { src: "assets/arfoms-booking.webp", w: 1290, h: 643, label: "Booking confirmation", alt: "Booking confirmation page showing PNR reference, route and passenger details" },
        ],
    },
    {
        id: "mercurious", viz: "learn", file: "mercurious_ai.py", name: "Mercurious.AI", tag: "Generative AI / RAG",
        summary: "A YouTube-based learning assistant with video summarization and AI-generated quizzes.",
        points: [
            "Built with Python and Streamlit, using retrieval-augmented generation and machine learning.",
            "Selected for the Google Hack 2024, and placed in the Top 98 teams of the Google Cloud AI for Impact APAC Hackathon.",
        ],
        stack: ["Python", "Streamlit", "RAG", "Machine learning"],
        badge: "Top 98 teams, AI for Impact APAC Hackathon 2024",
        shots: [
            { src: "assets/mercurious-ui.webp", w: 1290, h: 671, label: "Home screen", alt: "Mercurious AI landing page" },
            { src: "assets/team-mercurious.webp", w: 1400, h: 1050, label: "Team demo review", confetti: true, alt: "Nithya and teammates reviewing the Mercurious.AI paper and demo on a laptop" },
        ],
    },
    {
        id: "her", viz: "scan", file: "her_analysis_engine.py", name: "HER, Human-AI Evidence Reviewer", tag: "Machine learning / REST APIs",
        summary: "An AI-powered forensic tool for deepfake detection and media verification, with REST APIs and a web interface.",
        points: [
            "Three analysis modules: metadata (EXIF and device info), pixel forensics (FFT and texture), and screenshot or crop detection.",
            "An aggregator combines module output into a likelihood score, a confidence level and evidence signals.",
        ],
        stack: ["Python", "Machine learning", "REST APIs"],
        shots: [
            { src: "assets/her-architecture.webp", w: 1280, h: 853, label: "System architecture", alt: "HER system architecture: frontend web app, backend API server, three analysis modules and scoring aggregator" },
            { src: "assets/her-ui.webp", w: 1400, h: 758, label: "Analysis result", alt: "HER result screen with AI likelihood, confidence, final label and numeric signals" },
        ],
    },
    {
        id: "lidar", viz: "lidar", file: "lidar_spoof_detect.c", name: "LiDAR Spoofing Detection and Prevention", tag: "Machine learning / C",
        summary: "A detection and prevention solution against sensor manipulation in autonomous systems.",
        points: ["Built with machine learning and C.", "Ranked in the Top 10 Tech Nissan projects, 2025."],
        stack: ["Machine learning", "C"],
        badge: "Top 10 Tech Nissan projects, 2025",
        shots: [],
    },
];
const JOBS = [
    {
        when: "Apr 2026 to Jul 2026", where: "Chennai, Tamil Nadu", role: "Programmer Analyst Trainee", org: "Cognizant",
        points: [
            "Completed intensive training in Java full stack development, Spring Boot and microservices, covering core backend concepts and application design.",
            "Developed and debugged Java and Spring Boot application modules, following structured coding practices with a goal of reducing implementation effort by 20%.",
            "Worked with REST APIs and microservices concepts to build modular, maintainable backend components.",
            "Served as Project Head, allocating tasks and tracking progress to improve team coordination by a targeted 25%.",
        ],
    },
    {
        when: "May 2025 to Nov 2025", where: "Bangalore, Karnataka", role: "Content Creator and Web Designer Intern", org: "WiseWork",
        points: [
            "Designed digital content and pitch decks in Figma and Canva for Wise Maestro and Longer Life Tech.",
            "Supported website redesign and SEO work, targeting a 20% increase in website visibility.",
        ],
    },
];
const CERTS = [
    ["Apr 2026", "Cloud Computing and Distributed Systems", "NPTEL"],
    ["Mar 2026", "Generative AI and Agentic AI for Executives", "Snowflake"],
    ["Sep 2025", "Microsoft Azure AI Fundamentals", "Microsoft"],
    ["Mar 2025", "MERN Stack and Full Stack Development", "Infosys Springboard"],
    ["Jan 2024", "Web Development", "PrepInsta"],
];
const GALLERY = [
    { src: "assets/trophy.webp", w: 750, h: 1000, title: "Academic Topper 2025-26", text: "SNS College of Engineering, Computer Science and Engineering (IoT), CGPA 9.4.", alt: "Academic Topper 2025-26 trophy" },
    { src: "assets/hackathon-cert.webp", w: 1200, h: 900, title: "Google Cloud hackathon", text: "Top 98 teams, AI for Impact APAC Hackathon 2024.", alt: "Google Cloud AI for Impact APAC Hackathon 2024 certificate of achievement" },
    { src: "assets/medals.webp", w: 323, h: 700, title: "Annual Day medals", text: "SNS College of Engineering, 16th Annual Day, April 2024.", alt: "Two gold medals from the SNS College of Engineering 16th Annual Day" },
    { src: "assets/stage-event.webp", w: 1062, h: 1062, title: "Campus event", confetti: true, text: "On stage at a department event, SNS College of Engineering.", alt: "Students in dark green blazers on stage at a department event" },
];
/* ---------- hooks ---------- */
function useReveal() {
    const ref = useRef(null);
    useEffect(() => {
        const el = ref.current;
        if (!el)
            return;
        if (!("IntersectionObserver" in window)) {
            el.classList.add("in");
            return;
        }
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight) {
            el.classList.add("in");
            return;
        }
        const io = new IntersectionObserver((es) => {
            es.forEach((e) => { if (e.isIntersecting) {
                el.classList.add("in");
                io.disconnect();
            } });
        }, { threshold: 0.08 });
        io.observe(el);
        return () => io.disconnect();
    }, []);
    return ref;
}
function Reveal({ as: Tag = "div", className = "", children, ...rest }) {
    const ref = useReveal();
    return React.createElement(Tag, { ref: ref, className: "rv " + className, ...rest }, children);
}
function useCountUp(to, dec, ref) {
    const [v, setV] = useState(to);
    useEffect(() => {
        const el = ref.current;
        if (!el || !("IntersectionObserver" in window))
            return;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches)
            return;
        let raf, started = false;
        const io = new IntersectionObserver((es) => {
            es.forEach((e) => {
                if (!e.isIntersecting || started)
                    return;
                started = true;
                io.disconnect();
                let t0 = null;
                const step = (t) => {
                    if (!t0)
                        t0 = t;
                    const p = Math.min(1, (t - t0) / 1100);
                    setV(to * (1 - Math.pow(1 - p, 3)));
                    if (p < 1)
                        raf = requestAnimationFrame(step);
                    else
                        setV(to);
                };
                raf = requestAnimationFrame(step);
            });
        }, { threshold: 0.6 });
        io.observe(el);
        return () => { io.disconnect(); cancelAnimationFrame(raf); };
    }, []);
    return v.toFixed(dec);
}
/* ---------- small pieces ---------- */
function Icon({ name }) {
    const p = {
        down: React.createElement("path", { d: "M12 3v12m0 0l-5-5m5 5l5-5M4 21h16" }),
        sun: React.createElement("g", null,
            React.createElement("circle", { cx: "12", cy: "12", r: "4" }),
            React.createElement("path", { d: "M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4l1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4m11.4-11.4l1.4-1.4" })),
        in: React.createElement("g", null,
            React.createElement("rect", { x: "3", y: "3", width: "18", height: "18", rx: "3" }),
            React.createElement("path", { d: "M8 10v7M8 7v.01M12 17v-4a2.5 2.5 0 015 0v4M12 10v7" })),
        gh: React.createElement("path", { d: "M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 00-1.3-3.2 4.2 4.2 0 00-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 00-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 00-.1 3.2A4.6 4.6 0 004 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" }),
        copy: React.createElement("g", null,
            React.createElement("rect", { x: "9", y: "9", width: "11", height: "11", rx: "2" }),
            React.createElement("path", { d: "M5 15V6a2 2 0 012-2h9" })),
        mail: React.createElement("g", null,
            React.createElement("rect", { x: "3", y: "5", width: "18", height: "14", rx: "2" }),
            React.createElement("path", { d: "M3 7l9 6 9-6" })),
        pin: React.createElement("g", null,
            React.createElement("path", { d: "M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11z" }),
            React.createElement("circle", { cx: "12", cy: "10", r: "2.5" })),
        check: React.createElement("path", { d: "M5 12.5l4.5 4.5L19 7.5" }),
        layers: React.createElement("g", null,
            React.createElement("path", { d: "M12 3l9 5-9 5-9-5 9-5z" }),
            React.createElement("path", { d: "M3 12.5l9 5 9-5M3 17l9 5 9-5" })),
        api: React.createElement("path", { d: "M8 8l-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14" }),
        blocks: React.createElement("g", null,
            React.createElement("rect", { x: "3", y: "3", width: "7", height: "7", rx: "1" }),
            React.createElement("rect", { x: "14", y: "3", width: "7", height: "7", rx: "1" }),
            React.createElement("rect", { x: "3", y: "14", width: "7", height: "7", rx: "1" }),
            React.createElement("rect", { x: "14", y: "14", width: "7", height: "7", rx: "1" })),
        db: React.createElement("g", null,
            React.createElement("ellipse", { cx: "12", cy: "5.5", rx: "8", ry: "3" }),
            React.createElement("path", { d: "M4 5.5v13c0 1.7 3.6 3 8 3s8-1.3 8-3v-13M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" })),
        spark: React.createElement("path", { d: "M12 3l2 6 6 2-6 2-2 6-2-6-6-2 6-2z" }),
        brain: React.createElement("g", null,
            React.createElement("rect", { x: "6", y: "6", width: "12", height: "12", rx: "2" }),
            React.createElement("path", { d: "M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4" })),
        search: React.createElement("g", null,
            React.createElement("circle", { cx: "11", cy: "11", r: "7" }),
            React.createElement("path", { d: "M21 21l-5-5" })),
        network: React.createElement("g", null,
            React.createElement("circle", { cx: "5", cy: "12", r: "2" }),
            React.createElement("circle", { cx: "19", cy: "5", r: "2" }),
            React.createElement("circle", { cx: "19", cy: "19", r: "2" }),
            React.createElement("path", { d: "M7 12l10-6M7 12l10 6" })),
        chat: React.createElement("path", { d: "M4 5h16v11H9l-5 4z" }),
        pencil: React.createElement("path", { d: "M4 20l1-4L16 5l3 3L8 19zM14 7l3 3" }),
        canva: React.createElement("g", null,
            React.createElement("circle", { cx: "12", cy: "12", r: "9" }),
            React.createElement("path", { d: "M15.5 9a4 4 0 100 6" })),
    }[name];
    return React.createElement("svg", { className: "i", viewBox: "0 0 24 24", "aria-hidden": "true" }, p);
}
const SK_BRAND = { "Spring Boot": "springboot", Java: "java", Python: "python", C: "c", HTML: "html", CSS: "css", JavaScript: "javascript", Git: "git", GitHub: "github", Figma: "figma" };
const SK_GLYPH = { Microservices: "layers", "REST APIs": "api", "Backend architecture": "blocks", SQL: "db", "Generative AI": "spark", "Machine learning": "brain", RAG: "search", CNN: "network", "LLM APIs": "chat", "Prompt engineering": "pencil", Canva: "canva" };
const REDUCE = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
function Logo({ k, size = 20 }) {
    const b = BRANDS[k];
    if (!b)
        return null;
    return React.createElement("svg", { className: "logo", viewBox: b.vb, width: size, height: size, fill: b.color || "currentColor", stroke: "none", "aria-hidden": "true", dangerouslySetInnerHTML: { __html: b.inner } });
}
function Words({ text }) {
    return text.split(" ").map((w, i) => (React.createElement(React.Fragment, { key: i },
        React.createElement("span", { className: "w" },
            React.createElement("span", { style: { transitionDelay: i * 70 + "ms" } }, w)),
        " ")));
}
function SectionHead({ idx, label, title, lead }) {
    return (React.createElement(Reveal, { className: "head" },
        React.createElement("div", { className: "eyebrow" },
            React.createElement("span", null, idx),
            label),
        React.createElement("h2", null,
            React.createElement(Words, { text: title })),
        lead && React.createElement("p", { className: "lead" }, lead)));
}
function Shot({ s, onOpen }) {
    return (React.createElement("figure", { className: "shot", "data-confetti": s.confetti ? "" : undefined },
        React.createElement("div", { className: "chrome" },
            React.createElement("i", null),
            React.createElement("i", null),
            React.createElement("i", null),
            React.createElement("span", null, s.label)),
        React.createElement("button", { type: "button", className: "zoom", onClick: () => onOpen(s), "aria-label": "Enlarge: " + s.label },
            React.createElement("img", { src: s.src, alt: s.alt, width: s.w, height: s.h, loading: "lazy" }))));
}
/* ---------- header ---------- */
function Header({ theme, onTheme }) {
    const [active, setActive] = useState("");
    const [prog, setProg] = useState(0);
    useEffect(() => {
        const onScroll = () => {
            const h = document.documentElement.scrollHeight - window.innerHeight;
            setProg(h > 0 ? Math.min(1, window.scrollY / h) : 0);
        };
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        let io;
        if ("IntersectionObserver" in window) {
            io = new IntersectionObserver((es) => {
                es.forEach((e) => { if (e.isIntersecting)
                    setActive(e.target.id); });
            }, { rootMargin: "-40% 0px -55% 0px" });
            NAV.forEach(([id]) => { const el = document.getElementById(id); if (el)
                io.observe(el); });
        }
        return () => { window.removeEventListener("scroll", onScroll); io && io.disconnect(); };
    }, []);
    return (React.createElement("header", { className: "top" },
        React.createElement("div", { className: "wrap bar" },
            React.createElement("a", { className: "brand", href: "#top" },
                React.createElement("span", { className: "mark" }, "NJ"),
                React.createElement("span", null, "Nithya Joseph")),
            React.createElement("nav", { "aria-label": "Sections" }, NAV.map(([id, label]) => (React.createElement("a", { key: id, href: "#" + id, className: (active === id ? "on " : "") + (id === "contact" ? "keep" : "") }, label)))),
            React.createElement("button", { type: "button", className: "icon-btn", onClick: onTheme, "aria-label": "Switch to " + (theme === "dark" ? "light" : "dark") + " theme" },
                React.createElement(Icon, { name: "sun" }))),
        React.createElement("div", { className: "prog", style: { transform: "scaleX(" + prog + ")" } })));
}
/* ---------- hero ---------- */
const NAMES = [{ t: "Nithya Joseph", lang: "en" }, { t: "நித்யா ஜோசப்", lang: "ta" }];
const seg = (str) => (typeof Intl !== "undefined" && Intl.Segmenter
    ? Array.from(new Intl.Segmenter("ta", { granularity: "grapheme" }).segment(str), (x) => x.segment)
    : Array.from(str));
function MorphName() {
    const [i, setI] = useState(0);
    const [anim, setAnim] = useState(false);
    useEffect(() => {
        if (REDUCE)
            return;
        const t = setInterval(() => { setAnim(true); setI((n) => (n + 1) % NAMES.length); }, 4600);
        return () => clearInterval(t);
    }, []);
    const cur = NAMES[i];
    let word = 0;
    return (React.createElement("h1", { className: "giant", lang: cur.lang, "aria-label": "Nithya Joseph, in Tamil \u0BA8\u0BBF\u0BA4\u0BCD\u0BAF\u0BBE \u0B9C\u0BCB\u0B9A\u0BAA\u0BCD" },
        React.createElement("span", { className: "gline", "aria-hidden": "true", key: i }, seg(cur.t).map((c, k) => {
            if (c === " ") {
                word++;
                return React.createElement("span", { key: k, className: "gch" }, "\u00A0");
            }
            return React.createElement("span", { key: k, className: "gch" + (word ? " acc" : "") + (anim ? " go" : ""), style: { animationDelay: k * 55 + "ms" } }, c);
        }))));
}
function Network() {
    const ref = useRef(null);
    useEffect(() => {
        const cv = ref.current, ctx = cv.getContext("2d");
        let W = 0, H = 0, pts = [], raf = 0, mx = -999, my = -999;
        const color = () => getComputedStyle(document.documentElement).getPropertyValue("--accent").trim() || "#5AA2FF";
        const init = () => {
            const r = cv.getBoundingClientRect(), dpr = Math.min(2, window.devicePixelRatio || 1);
            W = r.width;
            H = r.height;
            cv.width = W * dpr;
            cv.height = H * dpr;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            const n = Math.max(24, Math.round((W * H) / 15000));
            pts = Array.from({ length: n }, () => ({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35 }));
        };
        const draw = () => {
            ctx.clearRect(0, 0, W, H);
            const c = color();
            ctx.fillStyle = c;
            ctx.strokeStyle = c;
            ctx.lineWidth = 1;
            if (!REDUCE) {
                for (const p of pts) {
                    p.x += p.vx;
                    p.y += p.vy;
                    if (p.x < 0 || p.x > W)
                        p.vx *= -1;
                    if (p.y < 0 || p.y > H)
                        p.vy *= -1;
                    const dx = p.x - mx, dy = p.y - my, d = Math.hypot(dx, dy);
                    if (d < 130 && d > 0.1) {
                        p.x += (dx / d) * 1.3;
                        p.y += (dy / d) * 1.3;
                    }
                }
            }
            for (let i = 0; i < pts.length; i++) {
                const p = pts[i];
                ctx.globalAlpha = 0.75;
                ctx.beginPath();
                ctx.arc(p.x, p.y, 1.9, 0, 6.283);
                ctx.fill();
                for (let j = i + 1; j < pts.length; j++) {
                    const q = pts[j], d = Math.hypot(p.x - q.x, p.y - q.y);
                    if (d < 130) {
                        ctx.globalAlpha = (1 - d / 130) * 0.32;
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(q.x, q.y);
                        ctx.stroke();
                    }
                }
                const dm = Math.hypot(p.x - mx, p.y - my);
                if (dm < 170) {
                    ctx.globalAlpha = (1 - dm / 170) * 0.7;
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(mx, my);
                    ctx.stroke();
                }
            }
            ctx.globalAlpha = 1;
            if (!REDUCE)
                raf = requestAnimationFrame(draw);
        };
        const mv = (e) => { const r = cv.getBoundingClientRect(); mx = e.clientX - r.left; my = e.clientY - r.top; };
        const rs = () => { init(); if (REDUCE)
            draw(); };
        init();
        draw();
        window.addEventListener("mousemove", mv, { passive: true });
        window.addEventListener("resize", rs);
        return () => { cancelAnimationFrame(raf); window.removeEventListener("mousemove", mv); window.removeEventListener("resize", rs); };
    }, []);
    return React.createElement("canvas", { ref: ref, className: "net", "aria-hidden": "true" });
}
function Typed({ phrases }) {
    const [txt, setTxt] = useState(phrases[0]);
    useEffect(() => {
        if (REDUCE)
            return;
        let i = 0, n = phrases[0].length, del = true, timer;
        const tick = () => {
            if (del) {
                n--;
                if (n <= 0) {
                    del = false;
                    i = (i + 1) % phrases.length;
                    n = 0;
                }
            }
            else {
                n++;
                if (n >= phrases[i].length) {
                    del = true;
                    setTxt(phrases[i]);
                    timer = setTimeout(tick, 2400);
                    return;
                }
            }
            setTxt(phrases[i].slice(0, n));
            timer = setTimeout(tick, del ? 35 : 70);
        };
        timer = setTimeout(tick, 2600);
        return () => clearTimeout(timer);
    }, []);
    return React.createElement("span", { className: "typed" },
        txt,
        React.createElement("i", { className: "tcaret" }));
}
function Hero() {
    return (React.createElement("section", { className: "hero", id: "top" },
        React.createElement(Network, null),
        React.createElement("div", { className: "wrap hero-in" },
            React.createElement("p", { className: "status" },
                React.createElement("span", { className: "dot" }),
                "Open to backend roles \u00B7 Coimbatore, India"),
            React.createElement(MorphName, null),
            React.createElement("p", { className: "typed-line" },
                React.createElement("span", { className: "art" }, "a"),
                " ",
                React.createElement(Typed, { phrases: ["Java Backend Developer", "Spring Boot Engineer", "Microservices Builder", "Generative AI Developer"] })),
            React.createElement("div", { className: "hero-grid" },
                React.createElement("div", { className: "hero-copy" },
                    React.createElement("p", { className: "sub" }, "Computer Science graduate with hands-on experience in Java backend development, Spring Boot microservices, and AI-powered applications using Python, Generative AI and RAG. Seeking a backend developer role to build practical, scalable software solutions."),
                    React.createElement("div", { className: "hero-rows" },
                        React.createElement("div", null,
                            React.createElement("h4", null, "Find me on"),
                            React.createElement("div", { className: "tiles" },
                                React.createElement("a", { className: "tile", href: LINKEDIN, target: "_blank", rel: "noopener", "aria-label": "LinkedIn", title: "LinkedIn" },
                                    React.createElement(Logo, { k: "linkedin", size: 22 })),
                                React.createElement("a", { className: "tile", href: GITHUB, target: "_blank", rel: "noopener", "aria-label": "GitHub", title: "GitHub" },
                                    React.createElement(Logo, { k: "github", size: 22 })),
                                React.createElement("a", { className: "tile", href: "#contact", "aria-label": "Email", title: "Email" },
                                    React.createElement(Icon, { name: "mail" })))),
                        React.createElement("div", null,
                            React.createElement("h4", null, "Best skills in"),
                            React.createElement("div", { className: "tiles" }, ["java", "springboot", "python", "git"].map((k) => (React.createElement("span", { className: "tile", key: k, title: k === "springboot" ? "Spring Boot" : k.charAt(0).toUpperCase() + k.slice(1) },
                                React.createElement(Logo, { k: k, size: 24 }))))))),
                    React.createElement("div", { className: "cta" },
                        React.createElement("a", { className: "btn primary", href: "#projects" }, "View projects"),
                        React.createElement("a", { className: "btn", href: CV, target: "_blank", rel: "noopener", download: true },
                            React.createElement(Icon, { name: "down" }),
                            "Download CV"))),
                React.createElement(Reveal, { className: "hero-photo" },
                    React.createElement("figure", { className: "pframe" },
                        React.createElement("img", { src: "assets/portrait-hero.webp", alt: "Portrait of Nithya Joseph in a black blazer", width: "800", height: "1000" }),
                        React.createElement("figcaption", null,
                            React.createElement("span", null,
                                React.createElement("i", { className: "dot" }),
                                "Nithya Joseph"),
                            React.createElement("b", null, "Java Backend Developer"))))))));
}
/* ---------- about, skills ---------- */
function About() {
    return (React.createElement("section", { className: "band", id: "about" },
        React.createElement("div", { className: "wrap" },
            React.createElement(SectionHead, { idx: "01", label: "About", title: "Backend development with an AI edge." }),
            React.createElement("div", { className: "about-grid" },
                React.createElement(Reveal, { className: "about-text" },
                    React.createElement("p", null, "I write Java backends with Spring Boot and microservices, and I build AI-powered applications with Python, generative AI and retrieval-augmented generation."),
                    React.createElement("p", null, "At Cognizant I completed training in Java full stack development and served as Project Head for my team. Before that I designed digital content and pitch decks as a web design intern at WiseWork."),
                    React.createElement("dl", { className: "langs" },
                        React.createElement("div", null,
                            React.createElement("dt", null, "Tamil"),
                            React.createElement("dd", null, "Native")),
                        React.createElement("div", null,
                            React.createElement("dt", null, "English"),
                            React.createElement("dd", null, "Proficient")),
                        React.createElement("div", null,
                            React.createElement("dt", null, "Hindi"),
                            React.createElement("dd", null, "Intermediate")),
                        React.createElement("div", null,
                            React.createElement("dt", null, "German"),
                            React.createElement("dd", null, "Elementary")))),
                React.createElement(Reveal, { className: "edu" },
                    React.createElement("div", { className: "card spot" },
                        React.createElement("div", { className: "when" }, "2022 to 2026"),
                        React.createElement("h3", null, "B.E. Computer Science and Engineering"),
                        React.createElement("p", null, "SNS College of Engineering, Coimbatore"),
                        React.createElement("p", { className: "muted" }, "CGPA 9.4 / 10. Specialization: IoT and Cyber Security, including Blockchain Technology.")),
                    React.createElement("div", { className: "card spot" },
                        React.createElement("div", { className: "when" }, "2019 to 2021"),
                        React.createElement("h3", null, "Higher Secondary (HSC) and SSLC"),
                        React.createElement("p", null, "Presentation Convent Matric. Hr. Sec. School, Coimbatore"),
                        React.createElement("p", { className: "muted" }, "HSC 92%. SSLC 92%.")))))));
}
const LOGO_NAMES = { java: "Java", springboot: "Spring Boot", python: "Python", c: "C", html: "HTML", css: "CSS", javascript: "JavaScript", git: "Git", github: "GitHub", figma: "Figma", streamlit: "Streamlit" };
const CONCEPTS = [["layers", "Microservices"], ["api", "REST APIs"], ["spark", "Generative AI"], ["search", "RAG"], ["chat", "LLM APIs"], ["brain", "Machine learning"], ["pencil", "Prompt engineering"], ["network", "CNN"], ["blocks", "Backend architecture"]];
function Marquee() {
    const logos = Object.keys(LOGO_NAMES);
    const rowA = [...logos, ...logos].map((k, i) => React.createElement("li", { key: i },
        React.createElement(Logo, { k: k, size: 22 }),
        LOGO_NAMES[k]));
    const rowB = [...CONCEPTS, ...CONCEPTS].map(([g, t], i) => React.createElement("li", { key: i },
        React.createElement(Icon, { name: g }),
        t));
    return (React.createElement("div", { className: "marquee", "aria-label": "Technologies and concepts I work with" },
        React.createElement("ul", { className: "mrow" }, rowA),
        React.createElement("ul", { className: "mrow rev" }, rowB)));
}
function Skills() {
    return (React.createElement("section", { className: "band alt", id: "skills" },
        React.createElement("div", { className: "wrap" },
            React.createElement(SectionHead, { idx: "02", label: "Skills", title: "Tools I use to build and ship.", lead: "Backend development is the core. Everything else supports it." }),
            React.createElement(Marquee, null),
            React.createElement("div", { className: "skills" }, SKILLS.map((g) => (React.createElement(Reveal, { key: g.key, className: "sk spot" + (g.primary ? " primary" : "") },
                React.createElement("code", null, "/" + g.key),
                React.createElement("h3", null, g.title),
                React.createElement("ul", null, g.items.map((it) => (React.createElement("li", { key: it },
                    SK_BRAND[it] ? React.createElement(Logo, { k: SK_BRAND[it], size: 16 }) : SK_GLYPH[it] ? React.createElement(Icon, { name: SK_GLYPH[it] }) : null,
                    it)))))))),
            React.createElement(Reveal, { className: "soft" },
                React.createElement("span", null, "Soft skills"),
                React.createElement("ul", null,
                    React.createElement("li", null, "Problem-solving"),
                    React.createElement("li", null, "Analytical thinking"),
                    React.createElement("li", null, "Communication"))))));
}
/* ---------- projects ---------- */
function VizFrame({ title, children }) {
    return (React.createElement("figure", { className: "shot viz" },
        React.createElement("div", { className: "chrome" },
            React.createElement("i", null),
            React.createElement("i", null),
            React.createElement("i", null),
            React.createElement("span", null, title)),
        children));
}
function VizFlight() {
    const mods = ["Flight scheduler", "Booking", "Crew", "Check-in", "Loyalty"];
    return (React.createElement(VizFrame, { title: "Illustration: booking flow" },
        React.createElement("div", { className: "viz-body flight" },
            React.createElement("svg", { viewBox: "0 0 560 280", role: "img", "aria-label": "Animated flight route from DEL to MAA" },
                React.createElement("defs", null,
                    React.createElement("path", { id: "route", d: "M80 214 C 190 30, 390 30, 480 196" })),
                React.createElement("g", { className: "vgrid" },
                    [60, 120, 180, 240].map((y) => React.createElement("line", { key: y, x1: "0", x2: "560", y1: y, y2: y })),
                    [100, 200, 300, 400, 500].map((x) => React.createElement("line", { key: x, y1: "0", y2: "280", x1: x, x2: x }))),
                React.createElement("use", { href: "#route", className: "route" }),
                React.createElement("circle", { cx: "80", cy: "214", r: "9", className: "vnode" }),
                React.createElement("circle", { cx: "480", cy: "196", r: "9", className: "vnode end" }),
                React.createElement("text", { x: "80", y: "246", textAnchor: "middle", className: "vtext" }, "DEL"),
                React.createElement("text", { x: "480", y: "228", textAnchor: "middle", className: "vtext" }, "MAA"),
                React.createElement("g", { className: "plane" },
                    React.createElement("path", { d: "M-12 -6 L14 0 L-12 6 L-8 0 Z" }),
                    !REDUCE && React.createElement("animateMotion", { dur: "5.5s", repeatCount: "indefinite", rotate: "auto" },
                        React.createElement("mpath", { href: "#route" })))),
            React.createElement("ul", { className: "vchips" }, mods.map((m, i) => React.createElement("li", { key: m, className: "cyc", style: { animationDelay: i + "s" } }, m))))));
}
function VizLearn() {
    const steps = ["Video", "Retrieve", "Generate", "Summary + quiz"];
    return (React.createElement(VizFrame, { title: "Illustration: video to quiz" },
        React.createElement("div", { className: "viz-body learn" },
            React.createElement("ol", { className: "pipe" }, steps.map((t, i) => React.createElement("li", { key: t, className: "cyc", style: { animationDelay: i * 1.2 + "s" } }, t))),
            React.createElement("div", { className: "outcard" },
                React.createElement("div", { className: "skel w90" }),
                React.createElement("div", { className: "skel w70" }),
                React.createElement("div", { className: "skel w80" }),
                React.createElement("div", { className: "qopts" },
                    React.createElement("span", null),
                    React.createElement("span", { className: "right" }),
                    React.createElement("span", null))))));
}
function VizScan() {
    const mods = ["Metadata (EXIF)", "Pixel forensics (FFT)", "Screenshot / crop check"];
    return (React.createElement(VizFrame, { title: "Illustration: evidence analysis" },
        React.createElement("div", { className: "viz-body scan" },
            React.createElement("div", { className: "scanbox", "aria-hidden": "true" },
                React.createElement("div", { className: "scanline" })),
            React.createElement("div", { className: "mods" },
                mods.map((m, i) => (React.createElement("div", { key: m, className: "mod" },
                    React.createElement("span", null, m),
                    React.createElement("div", { className: "mbar" },
                        React.createElement("i", { style: { animationDelay: i * 1.1 + "s" } }))))),
                React.createElement("div", { className: "mod final" },
                    React.createElement("span", null, "Likelihood score"),
                    React.createElement("div", { className: "mbar" },
                        React.createElement("i", { style: { animationDelay: "3.4s" } }))),
                React.createElement("p", { className: "vnote" }, "Confidence level and evidence signals are reported with the score.")))));
}
function Lidar() {
    return (React.createElement(VizFrame, { title: "Illustration: spoofed return" },
        React.createElement("div", { className: "lidar-body", role: "img", "aria-label": "Illustration of a LiDAR sweep with one spoofed return flagged in red" },
            React.createElement("div", { className: "rings" }),
            React.createElement("div", { className: "sweep" }),
            React.createElement("div", { className: "car" }),
            React.createElement("span", { className: "pt", style: { left: "28%", top: "30%" } }),
            React.createElement("span", { className: "pt", style: { left: "68%", top: "36%" } }),
            React.createElement("span", { className: "pt", style: { left: "34%", top: "68%" } }),
            React.createElement("span", { className: "pt", style: { left: "70%", top: "64%" } }),
            React.createElement("span", { className: "pt bad", style: { left: "58%", top: "16%" } }),
            React.createElement("div", { className: "legend" },
                React.createElement("span", null, "Genuine return"),
                React.createElement("span", { className: "b" }, "Spoofed return")))));
}
const VIZ = { flight: VizFlight, learn: VizLearn, scan: VizScan, lidar: Lidar };
function Project({ p, i, onOpen }) {
    return (React.createElement(Reveal, { as: "article", className: "proj" + (i % 2 ? " flip" : ""), id: "p-" + p.id },
        React.createElement("div", { className: "proj-info" },
            React.createElement("div", { className: "file" },
                React.createElement("span", { className: "dotf" }),
                p.file),
            React.createElement("div", { className: "kind" }, p.tag),
            React.createElement("h3", null, p.name),
            React.createElement("p", { className: "what" }, p.summary),
            React.createElement("ul", { className: "pts" }, p.points.map((t) => React.createElement("li", { key: t }, t))),
            React.createElement("ul", { className: "stack" }, p.stack.map((s) => React.createElement("li", { key: s }, s))),
            p.badge && React.createElement("p", { className: "badge" },
                React.createElement(Icon, { name: "check" }),
                p.badge)),
        React.createElement("div", { className: "media" },
            React.createElement(VIZ[p.viz]),
            p.shots.length > 0 && React.createElement("div", { className: "shots-row" }, p.shots.map((s) => React.createElement(Shot, { key: s.src, s: s, onOpen: onOpen }))))));
}
function Projects({ onOpen }) {
    return (React.createElement("section", { className: "band", id: "projects" },
        React.createElement("div", { className: "wrap" },
            React.createElement(SectionHead, { idx: "03", label: "Projects", title: "Selected work.", lead: "Screenshots are from the running applications. Select an image to enlarge it." }),
            PROJECTS.map((p, i) => React.createElement(Project, { key: p.id, p: p, i: i, onOpen: onOpen })))));
}
/* ---------- experience ---------- */
function useProgress(ref) {
    useEffect(() => {
        const el = ref.current;
        if (!el || REDUCE)
            return;
        let raf = 0;
        const upd = () => {
            raf = 0;
            const r = el.getBoundingClientRect();
            const p = Math.max(0, Math.min(1, (window.innerHeight * 0.7 - r.top) / r.height));
            el.style.setProperty("--p", p.toFixed(3));
        };
        const on = () => { if (!raf)
            raf = requestAnimationFrame(upd); };
        upd();
        window.addEventListener("scroll", on, { passive: true });
        window.addEventListener("resize", on);
        return () => { cancelAnimationFrame(raf); window.removeEventListener("scroll", on); window.removeEventListener("resize", on); };
    }, []);
}
function Experience({ onOpen }) {
    const logRef = useRef(null);
    useProgress(logRef);
    return (React.createElement("section", { className: "band alt", id: "experience" },
        React.createElement("div", { className: "wrap exp-grid" },
            React.createElement("div", null,
                React.createElement(SectionHead, { idx: "04", label: "Experience", title: "Where I've worked and trained." }),
                React.createElement("ol", { className: "log", ref: logRef }, JOBS.map((j) => (React.createElement(Reveal, { as: "li", key: j.org, className: "job spot" },
                    React.createElement("div", { className: "meta" },
                        React.createElement("span", null, j.when),
                        React.createElement("span", null, j.where)),
                    React.createElement("h3", null, j.role),
                    React.createElement("p", { className: "org" }, j.org),
                    React.createElement("ul", null, j.points.map((t) => React.createElement("li", { key: t }, t)))))))),
            React.createElement(Reveal, { as: "figure", className: "exp-photo", "data-confetti": "" },
                React.createElement("button", { type: "button", className: "zoom", onClick: () => onOpen({ src: "assets/training-batch.webp", label: "Training batch", alt: "Nithya's training batch posing together in an office" }), "aria-label": "Enlarge training batch photo" },
                    React.createElement("img", { src: "assets/training-batch.webp", alt: "Nithya's training batch posing together in an office", width: "1400", height: "1050", loading: "lazy" })),
                React.createElement("figcaption", null, "With my training batch")))));
}
/* ---------- achievements ---------- */
function Achievements({ onOpen }) {
    return (React.createElement("section", { className: "band", id: "achievements" },
        React.createElement("div", { className: "wrap" },
            React.createElement(SectionHead, { idx: "05", label: "Achievements", title: "Recognition, leadership and certifications." }),
            React.createElement("div", { className: "gallery" }, GALLERY.map((g) => (React.createElement(Reveal, { as: "figure", key: g.src, className: "gcard spot", "data-confetti": g.confetti ? "" : undefined },
                React.createElement("button", { type: "button", className: "zoom", onClick: () => onOpen({ src: g.src, label: g.title, alt: g.alt }), "aria-label": "Enlarge: " + g.title },
                    React.createElement("img", { src: g.src, alt: g.alt, width: g.w, height: g.h, loading: "lazy" })),
                React.createElement("figcaption", null,
                    React.createElement("b", null, g.title),
                    React.createElement("span", null, g.text)))))),
            React.createElement("div", { className: "roles" },
                React.createElement(Reveal, { className: "card spot" },
                    React.createElement("h3", null, "Vice President, CyberChain Association"),
                    React.createElement("p", { className: "muted" }, "Led student engagement and team coordination.")),
                React.createElement(Reveal, { className: "card spot" },
                    React.createElement("h3", null, "Event Coordination Club member"),
                    React.createElement("p", { className: "muted" }, "Organized blood donation camps, yoga sessions and space-themed events."))),
            React.createElement(Reveal, { className: "certs-head" },
                React.createElement("h3", null, "Certifications")),
            React.createElement("ul", { className: "certs" }, CERTS.map(([d, t, o]) => (React.createElement(Reveal, { as: "li", key: t, className: "cert spot" },
                React.createElement("span", { className: "d" }, d),
                React.createElement("div", null,
                    React.createElement("b", null, t),
                    React.createElement("span", null, o)))))))));
}
/* ---------- contact ---------- */
function Contact() {
    const [msg, setMsg] = useState("");
    const mailRef = useRef(null);
    const copy = () => {
        const fallback = () => {
            const r = document.createRange();
            r.selectNodeContents(mailRef.current);
            const s = window.getSelection();
            s.removeAllRanges();
            s.addRange(r);
            setMsg("Press Ctrl or Cmd + C to copy");
        };
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(EMAIL).then(() => { setMsg("Email copied"); setTimeout(() => setMsg(""), 2200); }, fallback);
        }
        else
            fallback();
    };
    return (React.createElement("section", { className: "band contact", id: "contact" },
        React.createElement("div", { className: "wrap contact-grid" },
            React.createElement(Reveal, null,
                React.createElement("div", { className: "eyebrow" },
                    React.createElement("span", null, "06"),
                    "Contact"),
                React.createElement("h2", null,
                    React.createElement(Words, { text: "Let's talk about backend roles." })),
                React.createElement("p", { className: "lead" }, "I'm looking for a Java backend developer role. I'm based in Coimbatore, Tamil Nadu. Email is the fastest way to reach me."),
                React.createElement("p", { className: "loc" },
                    React.createElement(Icon, { name: "pin" }),
                    "Coimbatore, Tamil Nadu, India")),
            React.createElement(Reveal, { className: "cbox" },
                React.createElement("div", { className: "mailrow" },
                    React.createElement("div", { className: "mail", ref: mailRef }, EMAIL),
                    React.createElement("button", { type: "button", className: "btn primary", onClick: copy },
                        React.createElement(Icon, { name: "copy" }),
                        "Copy email")),
                React.createElement("p", { className: "copyok", "aria-live": "polite" }, msg),
                React.createElement("div", { className: "links2" },
                    React.createElement("a", { className: "btn", href: LINKEDIN, target: "_blank", rel: "noopener" },
                        React.createElement(Icon, { name: "in" }),
                        "LinkedIn"),
                    React.createElement("a", { className: "btn", href: GITHUB, target: "_blank", rel: "noopener" },
                        React.createElement(Icon, { name: "gh" }),
                        "GitHub")),
                React.createElement("a", { className: "btn", href: CV, target: "_blank", rel: "noopener", download: true },
                    React.createElement(Icon, { name: "down" }),
                    "Download CV")))));
}
/* ---------- lightbox ---------- */
function Lightbox({ item, onClose }) {
    const closeRef = useRef(null);
    useEffect(() => {
        if (!item)
            return;
        closeRef.current && closeRef.current.focus();
        const onKey = (e) => { if (e.key === "Escape")
            onClose(); };
        document.addEventListener("keydown", onKey);
        return () => document.removeEventListener("keydown", onKey);
    }, [item]);
    if (!item)
        return null;
    return (React.createElement("div", { className: "lb", role: "dialog", "aria-modal": "true", "aria-label": "Enlarged image", onClick: (e) => { if (e.target === e.currentTarget)
            onClose(); } },
        React.createElement("button", { type: "button", ref: closeRef, onClick: onClose, "aria-label": "Close" }, "\u00D7"),
        React.createElement("figure", null,
            React.createElement("img", { src: item.src, alt: item.alt }),
            React.createElement("figcaption", null, item.label))));
}
/* ---------- app ---------- */
function ConfettiLayer() {
    const ref = useRef(null);
    useEffect(() => {
        if (REDUCE)
            return;
        const cv = ref.current, ctx = cv.getContext("2d");
        let W = 0, H = 0, parts = [], raf = 0, cool = 0;
        const size = () => { W = cv.width = window.innerWidth; H = cv.height = window.innerHeight; };
        size();
        const cols = ["#5AA2FF", "#3DD6A0", "#F5B84A", "#FF7A7A", "#C792EA", "#FFFFFF"];
        const loop = () => {
            ctx.clearRect(0, 0, W, H);
            parts = parts.filter((p) => p.life > 0 && p.y < H + 20);
            for (const p of parts) {
                p.vy += 0.28;
                p.vx *= 0.985;
                p.x += p.vx;
                p.y += p.vy;
                p.rot += p.vr;
                p.life -= 0.011;
                ctx.save();
                ctx.globalAlpha = Math.max(0, p.life);
                ctx.translate(p.x, p.y);
                ctx.rotate(p.rot);
                ctx.fillStyle = p.c;
                ctx.fillRect(-p.r, -p.r / 2, p.r * 2, p.r);
                ctx.restore();
            }
            raf = parts.length ? requestAnimationFrame(loop) : 0;
            if (!parts.length)
                ctx.clearRect(0, 0, W, H);
        };
        const burst = (x, y) => {
            for (let i = 0; i < 70; i++) {
                const a = Math.random() * 6.283, v = 4 + Math.random() * 7;
                parts.push({ x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v - 5, r: 3 + Math.random() * 4, c: cols[i % cols.length], rot: Math.random() * 6, vr: (Math.random() - 0.5) * 0.4, life: 1 });
            }
            if (!raf)
                raf = requestAnimationFrame(loop);
        };
        const fire = (e) => {
            const h = e.target.closest && e.target.closest("[data-confetti]");
            if (!h || Date.now() < cool)
                return;
            cool = Date.now() + 1800;
            const r = h.getBoundingClientRect();
            [0.2, 0.5, 0.8].forEach((f, i) => setTimeout(() => burst(r.left + r.width * f, r.top + r.height * 0.3), i * 130));
        };
        document.addEventListener("mouseover", fire);
        document.addEventListener("click", fire);
        window.addEventListener("resize", size);
        return () => { cancelAnimationFrame(raf); document.removeEventListener("mouseover", fire); document.removeEventListener("click", fire); window.removeEventListener("resize", size); };
    }, []);
    return React.createElement("canvas", { ref: ref, className: "confetti", "aria-hidden": "true" });
}
function App() {
    const sys = () => (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
    const [theme, setTheme] = useState(() => {
        let s = null;
        try {
            s = localStorage.getItem("nj-theme");
        }
        catch (e) { }
        return s === "light" || s === "dark" ? s : sys();
    });
    const [lb, setLb] = useState(null);
    useEffect(() => { document.documentElement.setAttribute("data-theme", theme); }, [theme]);
    const toggle = () => {
        const n = theme === "dark" ? "light" : "dark";
        setTheme(n);
        try {
            localStorage.setItem("nj-theme", n);
        }
        catch (e) { }
    };
    const open = useCallback((it) => setLb(it), []);
    useEffect(() => {
        const on = (e) => {
            const t = e.target.closest && e.target.closest(".spot");
            if (!t)
                return;
            const r = t.getBoundingClientRect();
            t.style.setProperty("--mx", e.clientX - r.left + "px");
            t.style.setProperty("--my", e.clientY - r.top + "px");
        };
        document.addEventListener("mousemove", on, { passive: true });
        return () => document.removeEventListener("mousemove", on);
    }, []);
    return (React.createElement(React.Fragment, null,
        React.createElement(Header, { theme: theme, onTheme: toggle }),
        React.createElement("main", null,
            React.createElement(Hero, null),
            React.createElement(About, null),
            React.createElement(Skills, null),
            React.createElement(Projects, { onOpen: open }),
            React.createElement(Experience, { onOpen: open }),
            React.createElement(Achievements, { onOpen: open }),
            React.createElement(Contact, null)),
        React.createElement("footer", null,
            React.createElement("div", { className: "wrap foot" },
                React.createElement("span", null, "\u00A9 2026 Nithya Joseph"),
                React.createElement("span", null, "Java Backend Developer \u00B7 Coimbatore, India"))),
        React.createElement(Lightbox, { item: lb, onClose: () => setLb(null) }),
        React.createElement(ConfettiLayer, null)));
}
ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(App, null));
