import React from 'react';

// Components
import ContentSection from "../../components/ContentSection";
import ProjectLogistics from "../../components/ProjectLogistics";

// other
import { AwesomeButton } from "react-awesome-button";
import Fade from 'react-reveal/Fade';

function TMUSReflection2(props) {

    let titleStyle = {
        fontSize: "40px",
        color: "#606c38"
    }

    let subtitleStyle = {
        fontSize: "30px",
        color: "#606c38"
    }

    let subsubtitleStyle = {
        fontSize: "16px",
        fontStyle: "italic",
        color: "#606c38",
        fontWeight: "light"
    }

    let pStyle = {
        fontSize: "16px"
    }


    let liStyle = {
        paddingTop: "10px"
    }

    let divStyle = {
        width: "70%",
        margin: "auto",
        paddingBottom: "50px"
    }

    let imgStyle = {
        height: "400px",
        width: "auto",
        margin: "auto",
        display: "block",
        paddingTop: "50px"
    }
    let flexboxStyle = {
        display: "flex",
        width: "70%",
        margin: "auto",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        paddingBottom: "50px"
    }

    return (
        <div>
            {/* Reflection */}
            <ContentSection
                heading="T-Mobile Software Engineer"
                content=""
                src="images/tmobilelogo.png"
            />

            <Fade>
                <ProjectLogistics
                    team1name="Digitally Assisted Sales Hub"
                    team1="Josh Barr (Manager), Advait Sathe (Manager)"
                    team2name="Engineers"
                    team2="Joshua Maza"
                    scope="iOS Mobile Development, Full-stack Web Development, Test Automation"
                    time="July 2021 - Present"
                    tools="SwiftUI, UIKit/Storyboards, Cocoapods/Swift Package Manager, Combine, XCTest, Angular, Typescript, Node.js, HTML, CSS, Jasmine/Karma, NPM, Git"
                />
            </Fade>

            <Fade>
                <div style={divStyle}>
                    <h1 style={titleStyle}>Experience Glossary</h1>
                    <ol style={pStyle}>
                        <li style={liStyle}><b>T-Mobile</b> - What is my team, the Digitally Assisted Sales Hub (DASH) and what is my impact?</li>
                        <li style={liStyle}><b>RetailOne</b> - iOS MVVM SwiftUI app for selling Metro products in T-Mobile stores.</li>
                        <li style={liStyle}><b>Trade-In and Eligibility Tools</b> - Suite of tools for handling the status of trade-in orders and eligibility for devices.</li>
                        <li style={liStyle}><b>MBE/MAADLITE</b> - Branched off app of DASH to support selling Metro products by online sales representatives.</li>
                        <li style={liStyle}><b>Takeaways</b> - Lessons I learned from this experience (so far).</li>
                    </ol>
                </div>
            </Fade>

            <Fade>
                <div style={divStyle}>
                    <h1 style={titleStyle}>Digitally Assisted Sales Hub (DASH)</h1>
                    <p style={pStyle}> The DASH team at T-Mobile manages an app called "DASH" used on desktops in T-Mobile stores.
                    T-Mobile mobile experts (sales representatives) in brick-and-mortar stores directly interact with this app to work with and sell devices and plans
                    to new and existing customers. Since 2018, it has been the main sales application of T-Mobile and <b>responsible for over 80% of the company's total revenue</b>.
                    Given how mission-critical this application is to the business, my team is mature in development, testing, deployment, and issue response readiness
                    and procedure. We set an example at T-Mobile for performance and readiness to tackle new problems and navigate unexpected challenges.</p>
                    <p style={pStyle}>Because of the team's proven success with building sales applications, the business has expanded the team to sell other products 
                    in various contexts, including the selling of Metro products in T-Mobile stores. I joined the team towards the end of the DASH development, and have been a  
                    <b> key contributor and leader during the full application lifecycle of numerous new sales applications for selling Metro products.</b> Through 
                    this environment, I've gained a great deal of experience solving problems the right way and developing solutions for online sales platforms,
                    involving complex user interface design and implementation.</p>
                </div>
            </Fade>
            <Fade>
                <div style={divStyle}>
                    <h1 style={subtitleStyle}>RetailOne</h1>
                    <h2 style={subsubtitleStyle}>Native iOS SwiftUI MVVM sales application</h2>
                    <p style={pStyle}>I collaborated on a 60+ team of SWEs, SDETs, POs, scrum masters, and managers to build a consumer-facing sales 
                    application to handle the selling prepaid services (Metro) for devices, plans, and promotions for single-line activations. 
                    This project existed to be specifically adapted to 'mobile brick-and-mortar stores' (T-Mobile trucks) allowing the sale 
                    of Metro products to customers with greater flexibility and reach.</p>
                    <p style={pStyle}>This project also took advantage of SwiftUI, which is a relatively new Apple framework for creating UI. 
                    It was also organized with MVVM (Model-View-ViewModel) which is a more modern approach to the former MVC (Model-View-Controller) 
                    application design pattern. Additionally, RetailOne also took advantage of newer Apple features like Combine and Swift Package Manager, 
                    as well as features in UI accessibility. Because of these more cutting-edge choices, RetailOne was a pioneering app for T-Mobile 
                    to also explore the potential production-ready success of newer technologies in the existing T-Mobile iOS native ecosystem.</p>
                </div>
            </Fade>
            <img src="images/tmobile/retailone_demo.gif" style={imgStyle} />
            <Fade>
                <div style={divStyle}>
                    <p style={pStyle}><i>The information available for this project is purposely limited due to confidentiality. If you’re interested in learning more about the project or my role in it, please feel free to contact me directly.</i></p>
                </div>
            </Fade>
            <Fade>
                <div style={divStyle}>
                    <p style={pStyle}>Here are a few bullet points specifically summarizing some of my impact for this project:</p>
                    <ul>
                        <li>Lead developer on a 60+ team of SWEs, SDETs, POs, scrum masters, and managers to build a consumer-facing MVVM sales application to handle the selling of prepaid services (Metro) for devices, plans, and promotions for single line activations.</li>
                        <li>Implemented key logic for important business revenue-generating operations such as creating catalogs for devices and rate plans, cart organization and data persistence for customer info, and submitting orders at the end of a sales checkout flow.</li>
                        <li>Created numerous user interfaces with a team of 7 developers, closely following Apple’s design system/human interface guidelines, resulting in accessible, modular, and reusable UI components.</li>
                        <li>Designed and implemented an automated test suite with the XCTest framework using unit tests, UI tests, test fixtures, mock APIs and view models, and mock data, resulting in well-maintained tests increasing coverage from below 30% to above 85%.</li>
                        <li>Onboarded numerous APIs for front-end use, including generating models from swaggers, implementing endpoint configuration, coding service classes, and providing accompanying unit tests and mocks, resulting in reusable API services for other developers.</li>
                        <li>Designed and created a cocoapod and Swift package manager (SPM) compatible modular UI component library in SwiftUI for team applications. The result was a foundational PoC for spawning a T-Mobile supported SwiftUI component library.</li>
                        <li>Created documentation and gave KT to other developers and POs for how to use XCode’s accessibility tools for demonstrating accessibility features during demos, as well as how to implement accessibility requirements in Swift.</li>
                        <li>Facilitated cross-team collaboration and testing to resolve MVP launch gating defects for the go-to-market launch.</li>
                        <li>Resolved numerous medium and high priority UI and development defects related to SSO, caching, and order submission.</li>
                        <li>Conducted code reviews for 100+ merge requests, enforcing several practices including code semantic standards, unit and UI test practices, and delivered patient feedback and positive improvements to other developers.</li>
                        <li>Performed security remediation responsibilities for the API layer built in Springboot/Java to proactively limit cybersecurity threats.</li>
                        <li>Performed basic DevOps work in GitLab, such as configuring proxies, repairing pipelines, and configuration with JSON/YAML.</li>
                    </ul>
                </div>
            </Fade>

            <ContentSection
                heading="Trade-In and Eligibility Tools"
                subheading="Tools in native iOS UIKit for handling trade-in orders, integrated as a cocoapod."
                content="This collection of tools served the purpose of giving T-Mobile mobile experts in retail stores more easy 
                access to help customers determine eligibility of potential new trade-in orders, and to also check and manage the 
                status of existing trade-in orders. More specifically, the collection consisted of 4 tools for checking if an existing 
                device's IMEI (ID number) or existing MSISDN (phone number) can be ported to T-Mobile, checking and changing the 
                status of a trade-in order, and searching for existing trade-in orders."
                content2="Another unique point of this project is that it was developed as a cocoapod to be usable by other applications 
                at T-Mobile. The key use case for this is to be accessible via a menu in another platform app as part of an initiative to 
                consolidate the number of tools used by the mobile experts in T-Mobile. These tools were accessed and launched via buttons 
                in another platform in T-Mobile called 'PIVOT', which is a tool containing nearly all the other commonly used tools by mobile experts."
                src="images/tmobile/dtp_demo.gif"
            />
            <Fade>
                <div style={divStyle}>
                    <p style={pStyle}><i>The information available for this project is purposely limited due to confidentiality. If you’re interested in learning more about the project or my role in it, please feel free to contact me directly.</i></p>
                </div>
            </Fade>
            <Fade>
                <div style={divStyle}>
                    <p style={pStyle}>Here are a few bullet points specifically summarizing some of my impact for this project:</p>
                    <ul>
                        <li>Lead developer for a team of 7 creating a host of consumer-facing utility tools available in all T-Mobile stores. The tools check the eligibility for customers to transfer their phone or number, as well as manage the status of their trade-in orders.</li>
                        <li>Implemented majority of key business logic and significant portions of the UI for all the tools with UIKit.</li>
                        <li>Implemented dependency injection with Resolver and used it to create caching services with NSCache, resulting in the entire app being mostly decoupled from view models and services, promoting dependency inversion and single responsibility principles.</li>
                        <li>Implemented logging for all API activity (success, error, alerts, etc.) and created telemetry and reporting dashboards in Splunk to communicate the application's health to the business for both test and production environments.</li>
                        <li>Collaborated with 4 other teams to manage CocoaPods versioning and deployment when integrating tools into iPad sales devices and the T-Mobile app ecosystem.</li>

                    </ul>
                </div>
            </Fade>

            <Fade>
                <div style={divStyle}>
                    <h1 style={subtitleStyle}>MBE/MAADLITE</h1>
                    <p style={pStyle}>MBE/MAADLITE is an adaptation of an existing successful earlier sales application called DASH, 
                    for selling metro projects in T-Mobile stores. It is built in Angular and uses typescript and node.js with a 
                    java springboot backend. This is my current team and the application is still a work in progress.</p>
                </div>
            </Fade>
            <Fade>
                <div style={divStyle}>
                    <p style={pStyle}><i>The information available for this project is purposely limited due to confidentiality. If you’re interested in learning more about the project or my role in it, please feel free to contact me directly.</i></p>
                </div>
            </Fade>
            <Fade>
                <div style={divStyle}>
                    <p style={pStyle}>Here are a few bullet points specifically summarizing some of my impact for this project:</p>
                    <ul>
                        <li>Developer in a team of 4 UI developers for maintaining an application to support the virtual retail of Metro products.</li>
                        <li>Implemented key business rules and Angular components for flows, allowing existing customers to add lines and devices.</li>
                        <li>Onboarded numerous APIs with Node, also managed and migrated API endpoints with feature flags for different environments.</li>
                        <li>Experienced with writing and maintaining a unit test suite for Angular components using Jasmine/Karma.</li>
                        <li><i>More coming soon as I have recently transitioned to this team in the last few months.</i></li>
                    </ul>
                </div>
            </Fade>


            <Fade>
                <div style={divStyle}>
                    <h1 style={titleStyle}>Takeaways</h1>
                    <p style={pStyle}><b>Failing to plan is planning to fail</b></p>
                    <p style={pStyle}>Over the years I have learned that good planning is essential for saving huge timesinks and avoiding 
                    future pitfalls, while also aligning the team to be together with the opportunity to have diverse input. I remember early 
                    in my career not taking the extensive planning sessions more seriously, partially out of being naive or lacking understanding, 
                    but also because I didn't understand the value and impact of good planning. However, as I grew in my role I gained more of a 
                    voice and understanding for being able to speak up about technical challenges or direction. </p>
                    <p style={pStyle}>This was especially the case with one project where I was given the lead engineer responsibility. This 
                    project ended up failing for a number of reasons, ranging from both the senior and principal engineers over it both leaving 
                    the company or retiring, to volatile resources and support due to pandemic layoffs. In any case, I learned the hard way how 
                    important planning, especially getting the requirements in writing (and future changes and decisions also in writing) is for 
                    easing the challenges that may arise during development. I understand that requirements are likely to change and that change 
                    truly is the only constant, but some attempt needs to be made to have a starting place because effective outcomes stem from 
                    thorough planning, and the ability to adapt and track those changes.</p>
                    <br />
                    <p style={pStyle}><b>Software engineering is a journey of constant learning</b></p>
                    <p style={pStyle}>The main difference between internships and early career work is the level of guidance and autonomy you have 
                    over your learning. Without this guidance, it is easy to become stagnant as an engineer, especially if you are passive and tend 
                    towards fewer technical challenges or the same technologies. Since I've grown more in my role I've learned to intentionally seek 
                    out opportunities to grow my problem-solving skills and challenge my knowledge beyond what my role requires. By doing so I found 
                    I can be better positioned to reach the next level of my career or team through greater responsibility or earned mutual respect 
                    for having a heavier say in impactful decision-making. Examples of this so far are pursuing intrapreneurial opportunities, 
                    creating patents, earning AWS certifications, and studying concepts ranging from cloud computing to DevOps during my work. 
                    I'm fortunate that T-Mobile supports self-learning and has a training budget to pursue these opportunities, so I've made it a 
                    point to take full advantage of this to grow to my highest potential.</p>
                    <br />
                    <p style={pStyle}><b>Document everything, create a papers trail.</b></p>
                    <p style={pStyle}>I've now been through countless situations where requirements change or people misunderstand each other, 
                    resulting in extra work because I was not able to provide evidence of a different, earlier decision or conversation. 
                    My manager has instilled in me a great emphasis on getting decisions made in writing to help advocate for my team if others try 
                    to adversly change our project's scope without the necessary planning. Likewise, my senior engineers taught me by example to get 
                    technical solutions or decisions in writing, or outcomes of triage or troubleshooting sessions so that we can point to them as 
                    reference for similar or related challenges in the future. I'm now in the habit of having these more intentional conversations, 
                    as well as often asking colleagues to send decisions as an email with the needed participants CC'd to have a paper trail for the future.</p>
                </div>
            </Fade>
        </div>
    )
}

export default TMUSReflection2;
