/** @jsxImportSource theme-ui */
import type { GetServerSideProps, NextPage } from 'next'
import Image from 'next/image'
import { Box, Button, Container, Flex, Grid, Heading } from 'theme-ui'
import heroImg from '../public/hero-img.png'
import { CgChevronDownR } from 'react-icons/cg'
import { useEffect, useRef, useState } from 'react'
import DataForm from '../components/data-form/data-form'
import { ResignerDetailsContext } from '../context/ResignerDetails'
import Letter from '../components/letter/letter'
import axios from 'axios'
import { useRouter } from 'next/router'
import { DocumentBody } from '../models/api-response.model'
interface Props {
  data: DocumentBody | null;
}
const Saved: NextPage<Props> = ({ data }) => {
  const generatorRef = useRef<HTMLDivElement | null>(null);
  const [recipient, setRecipient] = useState<string>(data!.recipient)
  const [weeksNotice, setWeeksNotice] = useState<number>(data!.weeksNotice)
  const [jobTitle, setJobTitle] = useState<string>(data!.jobTitle)
  const [sender, setSender] = useState<string>(data!.sender)
  const [company, setCompany] = useState<string>(data!.company)
  const [resignationDate, setResignationDate] = useState<Date | string>(data!.resignationDate)

  /**
   * recipient
   * weeksNotice
   * jobTitle
   * sender
   * company
   * resignationDate
   */
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

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { query } = ctx;
  const docId: string = (query.docId as string);
  const url: string = 'https://data.mongodb-api.com/app/data-ponbz/endpoint/data/beta/action/findOne'
  console.log("printing doc id")
  console.log(query.docId)
  const body = JSON.stringify({
    "collection": "details",
    "database": "resigner",
    "dataSource": "resign-now",
    "filter": {
        "id": docId
    },
    "projection": {
        "recipient": 1,
        "weeksNotice": 1,
        "jobTitle": 1,
        "sender": 1,
        "company": 1,
        "resignationDate": 1,
    }
});
  const { data, status } = await axios.post(url, body, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': process.env.MONGO_API_KEY!
    }
  })

  if (data?.document) {
    return {
      props: {
        data: data.document
      }
    }
  } else {
    return {
      notFound: true,
    }
  }

}

export default Saved
