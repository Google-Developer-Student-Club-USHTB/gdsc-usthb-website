// import { useState } from "react"
// import down from '../../assets/down.svg'
import { team } from '../../json/data.js'


const OurTeam = () => {

    return (
        <section id="leaders-members">
            <h2>The Leaders Members Of GDSC Club For The Year 2021/2022</h2>
            {/* font awesome */}
            <i class="angles angles-left fa-solid fa-angles-left"></i>
            <i class="angles angles-right fa-solid fa-angles-right"></i>

            <section id="leaders-members-cards">
                {team.map((member, i) => (
                    <div class="leader-card">
                        <div class="front-leader-card">
                            <img src={member.picture} alt="A picture of one of the leaders" />
                            <h3 class="member-name">{member.name}</h3>
                            <p class=" member-role"> {member.role}</p>
                            <div class="social-media-icons">
                                {/* font awesome */}
                                <a href={member.linkedin} class="social-med" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
                                <a href={member.email} class="social-med" target="_blank"><i class="fa-regular fa-envelope"></i></a>
                                <a href={member.github} class="social-med" target="_blank"><i class="fa-brands fa-github"></i></a>
                            </div>
                        </div>
                        <div class="back-leader-card">
                            <p>
                                {member.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </section>

            <div id="leaders-nav">
                <div class="leaders-nav-btn block-inline-display"></div>
                <div class="leaders-nav-btn block-inline-display"></div>
                <div class="leaders-nav-btn block-inline-display"></div>
                <h3 id="member-of-the-month">Member of the month</h3>
                <button id="all-the-team-button" class="btn btn-primary">ALL The Team</button>
            </div>
        </section>
    )
}

export default OurTeam