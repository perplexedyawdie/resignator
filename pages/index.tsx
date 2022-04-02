/** @jsxImportSource theme-ui */
import type { NextPage } from 'next'
import Image from 'next/image'
import { Box, Button, Container, Flex, Grid, Heading, Input } from 'theme-ui'
import heroImg from '../public/hero-img.png'
import { CgChevronDownR } from 'react-icons/cg'
import { useRef, useState } from 'react'
import DataForm from '../components/data-form/data-form'
import { ResignerDetailsContext } from '../context/ResignerDetails'
import Letter from '../components/letter/letter'
import axios from 'axios'
import { ApiResponse } from '../models/api-response.model'
import { SaveRequest } from '../dto/save-request.dto'
const Home: NextPage = () => {
  const generatorRef = useRef<HTMLDivElement | null>(null);
  const [saveLink, setSaveLink] = useState<string>("")
  const [recipient, setRecipient] = useState<string>('')
  const [weeksNotice, setWeeksNotice] = useState<number>(0)
  const [jobTitle, setJobTitle] = useState<string>('')
  const [sender, setSender] = useState<string>('')
  const [company, setCompany] = useState<string>('')
  const [resignationDate, setResignationDate] = useState<Date | string>("")

  async function handleSaveLinkClick() {
    const saveRequest: SaveRequest = {
      recipient,
      weeksNotice,
      jobTitle,
      sender,
      company,
      resignationDate
    }
    const { data, statusText } = await axios.post<ApiResponse>('api/save', saveRequest)
    const saveId: string = data.saveId || '';
    setSaveLink(`https://www.resignator.xyz/${saveId}`)
  }
  function handleGetStartedClick(e: any) {
    e.stopPropagation();
    generatorRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}>
      <main
        sx={{
          width: '100%',
          flex: '1 1 auto',
        }}>
        <Container
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            height: '100vh'
          }}
          p={4}>
          <Heading sx={{
            fontSize: [48, 64],
            textAlign: 'center',
            marginBottom: [12, 24, 48]
          }}
            p={12}>Generate your <br /><span sx={{ color: 'secondary' }}>resignation</span> letter</Heading>
          <Image src={heroImg} alt='person choosing a document' height={299} width={538} />
          <Button
            onClick={(e) => handleGetStartedClick(e)}
            variant='secondary'
          >Get Started</Button>
          <CgChevronDownR
            className='bounce'
            sx={{
              marginTop: [32, 48, 64]
            }} size={24} />
        </Container>
        <Container
          ref={generatorRef}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            height: '100%'
          }}
          p={4}
          bg='highlight'>
          <Grid
            width={[320, 320]}>
            <ResignerDetailsContext.Provider
              value={{
                recipient, setRecipient,
                weeksNotice, setWeeksNotice,
                jobTitle, setJobTitle,
                sender, setSender,
                company, setCompany,
                resignationDate, setResignationDate
              }}>

              <Box>
                <Letter />
              </Box>
              <Box>
                <DataForm />
              </Box>
              <Flex>
                <Button
                  onClick={() => handleSaveLinkClick()}
                  sx={{
                    fontSize: 12
                  }} mr={4}>
                  Generate Save Link
                </Button>
                <Input value={saveLink} placeholder="Your save link will appear here" readOnly />
              </Flex>
            </ResignerDetailsContext.Provider>

          </Grid>
        </Container>
      </main>
      {/* <footer
        sx={{
          width: '100%',
        }}>
        Footer
      </footer> */}
    </div >
  )
}

export default Home
