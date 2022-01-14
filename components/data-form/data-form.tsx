import { Box, Label, Input, Flex } from "theme-ui";
import { useContext } from "react";
import { ResignerDetailsContext } from "../../context/ResignerDetails";
import { FormName } from "../../models/form-name.enum";

const DataForm = () => {
    const { recipient, weeksNotice, jobTitle, sender, company, resignationDate, setRecipient, setWeeksNotice, setJobTitle, setSender, setCompany, setResignationDate } = useContext(ResignerDetailsContext)

    function handleUserInput(e: any) {
        console.log(e.target.name)
        switch (e.target.name) {
            case FormName.RECIPIENT:
                setRecipient(e.target.value)
                break;
            case FormName.SENDER:
                setSender(e.target.value)
                break;
            case FormName.WEEKS_NOTICE:
                setWeeksNotice(e.target.value)
                break;
            case FormName.COMPANY:
                setCompany(e.target.value)
                break;
            case FormName.RESIGNATION_DATE:
                setResignationDate(e.target.value)
                break;
            case FormName.JOB_TITLE:
                setJobTitle(e.target.value)
                break;
            default:
                break;
        }
    }
    return (
        <Box as="form" onSubmit={(e) => e.preventDefault()}>
            <Flex mb={2}>
                <Box p={1}>
                    <Label sx={{
                        fontWeight: 600
                    }} htmlFor="sender">Your Name</Label>
                    <Input maxLength={200} value={sender} onChange={(e) => handleUserInput(e)} type={"text"} name="sender" id="sender" mb={3} />
                </Box>
                <Box p={1}>
                    <Label sx={{
                        fontWeight: 600
                    }} htmlFor="recipient">Managers Name</Label>
                    <Input maxLength={200} value={recipient} onChange={(e) => handleUserInput(e)} type={"text"} name="recipient" id="recipient" mb={3} />
                </Box>
            </Flex>
            <Flex mb={2}>
                <Box p={1}>
                    <Label sx={{
                        fontWeight: 600
                    }} htmlFor="jobTitle">Job Title</Label>
                    <Input maxLength={200} value={jobTitle} onChange={(e) => handleUserInput(e)} type={"text"} name="jobTitle" id="jobTitle" mb={3} />
                </Box>
                <Box p={1}>
                    <Label sx={{
                        fontWeight: 600
                    }} htmlFor="company">Company</Label>
                    <Input maxLength={200} value={company} onChange={(e) => handleUserInput(e)} type={"text"} name="company" id="company" mb={3} />
                </Box>
            </Flex>
            {/* <Flex mb={2}> */}
            <Box p={1}>
                <Label sx={{
                    fontWeight: 600
                }} htmlFor="weeksNotice">Weeks notice</Label>
                <Input min={0} value={weeksNotice} onChange={(e) => handleUserInput(e)} type={"number"} name="weeksNotice" id="weeksNotice" mb={3} />
            </Box>
            {/* </Flex> */}
            {/* <Flex> */}
            <Box p={1}>
                <Label sx={{
                    fontWeight: 600
                }} htmlFor="resignationDate">Last Day</Label>
                <Input value={resignationDate} onChange={(e) => handleUserInput(e)} type={"date"} name="resignationDate" id="resignationDate" mb={3} />
            </Box>
            {/* </Flex> */}
        </Box>
    );
}

export default DataForm;