import { useContext, useState } from "react";
import { ResignerDetailsContext } from "../../context/ResignerDetails";
import Carousel from "react-elastic-carousel";
import { Paragraph } from "theme-ui";
const Letter = () => {
    const [eleContents, setEleContents] = useState<string>()
    const { recipient, weeksNotice, jobTitle, sender, company, resignationDate, } = useContext(ResignerDetailsContext)

    return (
        <Carousel
            isRTL={false}
            pagination={false}
            enableMouseSwipe={false}
            enableSwipe={false}>
            <Paragraph onClick={(e) => console.log(e)}>
                Dear {recipient === "" ? `_____________` : recipient}, <br />
                <br />
                As required by my contract of employment, I hereby give you {weeksNotice} weeks&apos; notice of my intention to leave my position as {jobTitle=== "" ? `____________` : jobTitle}.  I wish you every good fortune and I would like to thank you for having me as part of your team.
                <br />
                <br />Yours sincerely<br/>
                {sender=== "" ? `____________` : sender}

            </Paragraph>
            <Paragraph>
                Dear {recipient === "" ? `_____________` : recipient},<br />
                <br />
                As required by my contract of employment, I hereby give you {weeksNotice} weeks&apos; notice of my intention to leave my position as {jobTitle=== "" ? `____________` : jobTitle}. I have decided that it is time to move on and I have accepted a position elsewhere. This was not an easy decision and took a lot of consideration. However, I am confident that my new role will help me to move towards some of the goals I have for my career.  Please be assured that I will do all I can to assist in the smooth transfer of my responsibilities before leaving.  I wish you every good fortune and I would like to thank you for having me as part of your team.
                <br />
                <br />Yours sincerely<br/>
                {sender=== "" ? `____________` : sender}
            </Paragraph>
            <Paragraph>
                Dear {recipient === "" ? `_____________` : recipient},<br />
                <br />
                Kindly consider this letter as a formal/official notice of my resignation from my position as {jobTitle=== "" ? `____________` : jobTitle} for {company=== "" ? `____________` : company}. My resignation will be effective on {resignationDate}. This includes the notice period of {weeksNotice} weeks. I would like to thank you for the many opportunities I have had with this organization. I wish you and {company=== "" ? `____________` : company} the very best for the future. Kindly let me know if I can be of any help during the transition and help my replacement into his/her new role. Thanks again for everything.
                <br />
                <br /> Yours sincerely<br/>,
                {sender=== "" ? `____________` : sender}

            </Paragraph>
            <Paragraph>
                Dear {recipient === "" ? `_____________` : recipient},<br />
                <br />
                I would like to inform you that I am resigning from my position as a {jobTitle=== "" ? `____________` : jobTitle} for {company=== "" ? `____________` : company}, effective {resignationDate}. Thank you for the opportunities and experiences you have provided me during my time of employment with the company. I have grown personally and professionally because of this job, and I will miss you and my coworkers, all of whom have made it a pleasure to work here.  Please let me know if I can be of any help during this transition.
                <br />
                <br />Sincerely,<br/>
                {sender=== "" ? `____________` : sender}

            </Paragraph>
            <Paragraph>

                Dear {recipient === "" ? `_____________` : recipient},<br />
                <br />
                I am writing to inform you of my decision to resign from my position as {jobTitle=== "" ? `____________` : jobTitle} for {company=== "" ? `____________` : company}. As required by my employment contract I am giving {weeksNotice} weeks’ notice. My last day at work will be {resignationDate}. I have given this decision a lot of thought. I have decided that it is time for me to move on and have accepted a position elsewhere. Please let me know what I can do to assist with the transfer of my responsibilities before I leave. I would like to take this opportunity to thank you and {company=== "" ? `____________` : company} for having me as part of your team. I wish you all the best for the future.
                <br />
                <br />Yours sincerely<br/>
                {sender=== "" ? `____________` : sender}

            </Paragraph>
            <Paragraph>
                Dear {recipient === "" ? `_____________` : recipient},<br />
                <br />
                Please accept this as a formal notice of my resignation from my position as {jobTitle=== "" ? `____________` : jobTitle} with {company=== "" ? `____________` : company}.  My last working day will be {resignationDate}. It is my intention to complete all of the tasks scheduled for me during this period. I would like to use this opportunity to thank you for the mentorship and support you have provided me while working here at {company=== "" ? `____________` : company}. I wish you and the organization continued success.
                <br />
                <br />Sincerely,<br/>
                {sender=== "" ? `____________` : sender}

            </Paragraph>
            <Paragraph>
                Dear {recipient === "" ? `_____________` : recipient},<br />
                <br />
                Please accept this letter as notice of my resignation from my position as {jobTitle=== "" ? `____________` : jobTitle}. My last day of employment will be {resignationDate}. Your company is poised for continued growth and I wish you much success .I would like to help with the transition of my duties so that everything continues to function smoothly after my departure. Please let me know what I can do to assist with the transfer of my responsibilities before my last day of work. Thank you again for the opportunity to work for {company=== "" ? `____________` : company}. I wish you and your staff all the best.
                <br />
                <br /> Sincerely,<br/>
                {sender=== "" ? `____________` : sender}

            </Paragraph>
            <Paragraph>
                Dear {recipient === "" ? `_____________` : recipient},<br />
                <br />
                I would like to inform you that I am resigning from my position as {jobTitle=== "" ? `____________` : jobTitle} for {company=== "" ? `____________` : company}, effective {resignationDate}. Thank you for the opportunities for professional and personal development that you have provided me. I have enjoyed working for {company=== "" ? `____________` : company} and appreciate the support provided me during my tenure with the company. If I can be of any help during this transition, please let me know.
                <br />
                <br />Sincerely,<br/>
                {sender=== "" ? `____________` : sender}

            </Paragraph>
            <Paragraph>
                Dear {recipient === "" ? `_____________` : recipient},<br />
                <br />
                I am resigning from my position as {jobTitle=== "" ? `____________` : jobTitle} of {company=== "" ? `____________` : company}, effective {resignationDate}. I appreciate the opportunity for professional growth you provided during my time at {company=== "" ? `____________` : company}. Thank you for your support and encouragement. Please let me know how I can help during the transition period. I wish you and the company the best.
                <br />
                <br /> Sincerely,<br/>
                {sender=== "" ? `____________` : sender}

            </Paragraph>
            <Paragraph>
                Dear {recipient === "" ? `_____________` : recipient},<br />
                <br />
                Please accept this letter as formal notification of my resignation from the position of {jobTitle=== "" ? `____________` : jobTitle} with {company=== "" ? `____________` : company}. My last day will be {resignationDate}. I must thank you for the opportunity to work in this role. I appreciate the many training sessions and development initiatives that have made me a thorough professional in this industry. In the next {weeksNotice} weeks, I will complete all pending tasks, and I am willing to assist in the hiring and training of new employees during that period. Please let me know how to assist with the transition process.I wish you and the company more success and hope to keep in touch.
                <br />
                <br />Sincerely,<br/>
                {sender=== "" ? `____________` : sender}

            </Paragraph>
            <Paragraph>
                Dear {recipient === "" ? `_____________` : recipient},<br />
                <br />
                I am writing to formally inform you of leaving my position as {jobTitle=== "" ? `____________` : jobTitle} with {company=== "" ? `____________` : company}, effective {resignationDate}. Thank you for providing me with an enabling environment to grow and develop my career to this point. I wish you and the company all the best. Please let me know if there is any way I can assist with the transition. I hope to keep in touch.
                <br />
                <br /> Sincerely,<br/>
                {sender=== "" ? `____________` : sender}

            </Paragraph>
            <Paragraph>
                Dear {recipient === "" ? `_____________` : recipient},<br />
                <br />
                Please accept this as formal notification that I am quitting my job as {jobTitle=== "" ? `____________` : jobTitle} with {company=== "" ? `____________` : company} effective {resignationDate}. I thank you for the support and encouragement provided during my stay at the company and wish you and the company the best.
                <br />
                <br />Sincerely,<br/>
                {sender=== "" ? `____________` : sender}

            </Paragraph>
            <Paragraph>
                Dear {recipient === "" ? `_____________` : recipient},<br />
                <br />
                I would like to inform you of my formal resignation from my post as {jobTitle=== "" ? `____________` : jobTitle} with {company=== "" ? `____________` : company} effective {resignationDate}. Please let me know how to assist with the transition. Thanks for the opportunity to work with you and your staff.
                <br />
                <br /> Sincerely,<br/>
                {sender=== "" ? `____________` : sender}

            </Paragraph>
            <Paragraph>
                Dear {recipient === "" ? `_____________` : recipient},<br />
                <br />
                I&apos;ve recently accepted a position at another company, and so I am offering formal notice of my resignation. My last day will be {resignationDate}. I have enjoyed my time with {company=== "" ? `____________` : company} , and I thank you for all your help and guidance during my tenure. Please let me know if I can be of assistance during this transition.
                <br />
                <br /> Sincerely,<br/>
                {sender=== "" ? `____________` : sender}

            </Paragraph>
            <Paragraph>
                Dear {recipient === "" ? `_____________` : recipient},<br />
                <br />
                I would like to extend my appreciation to {company=== "" ? `____________` : company} for allowing me to work for you. During my tenure, I have gained a vast amount of knowledge, experience and expertise . Your support, training, friendship and sincerity will always be remembered. At this time, I would like to give {weeksNotice} weeks notice.  I will be resigning as of {resignationDate} to pursue other opportunities. Please let me know if I can be of assistance during this transition.
                <br />
                <br /> Sincerely,<br/>
                {sender=== "" ? `____________` : sender}

            </Paragraph>
            <Paragraph>
                Dear {recipient === "" ? `_____________` : recipient},<br />
                <br />
                Please accept this letter as formal notification that I am leaving my position with {company=== "" ? `____________` : company} on {resignationDate}. Thank you for the opportunities you have provided me during my time with the company. If I can be of any assistance during this transition, please let me know.
                <br />
                <br /> Sincerely,<br/>
                {sender=== "" ? `____________` : sender}

            </Paragraph>
            <Paragraph>
                Dear {recipient === "" ? `_____________` : recipient},<br />
                <br />
                I would like to inform you that I am resigning from my position as {jobTitle=== "" ? `____________` : jobTitle} for {company=== "" ? `____________` : company}. My last day with {company=== "" ? `____________` : company} will be {resignationDate}. Thank you for the professional and personal development you have assisted me with during my tenure. I consider just about everyone I have met here to be friends of mine now, and I will miss you all. However, my career has taken a different direction and I feel it is time to move onto new opportunities and challenges. Please keep in touch and let me know how I can be of assistance during this transition.
                <br />
                <br /> Sincerely,<br/>
                {sender=== "" ? `____________` : sender}

            </Paragraph>
            <Paragraph>
                Dear {recipient === "" ? `_____________` : recipient},<br />
                <br />
                I would like to inform you that I am resigning from my position as {jobTitle=== "" ? `____________` : jobTitle} for {company=== "" ? `____________` : company}, effective {resignationDate}. Thank you for the opportunities for professional and personal development that you have provided for me. I have enjoyed working for {company=== "" ? `____________` : company} and appreciate the support provided me during my tenure with the company. If I can be of any help during this transition, please let me know.
                <br />
                <br />Sincerely,<br/>
                {sender=== "" ? `____________` : sender}

            </Paragraph>
            <Paragraph>
                Dear {recipient === "" ? `_____________` : recipient},<br />
                <br />
                Please accept this as my formal notice of resignation from {company=== "" ? `____________` : company}, effective {resignationDate}. The associations I&apos;ve made during my employment here will truly be memorable for years to come. If I can help to train my replacement or tie up any loose ends, please let me know. Thank you very much for the opportunity to work here.
                <br />
                <br />Sincerely,<br/>
                {sender=== "" ? `____________` : sender}

            </Paragraph>
        </Carousel>
    );
}

export default Letter;