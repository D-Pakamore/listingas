import Layount from '../../components/Layout'
import CollapsibleTable from '../../components/CollapsibleTable'
import ToolBar from '../../components/ToolBar'
import axios from 'axios';

export default function Home({data, status}) {
  if (status != 200) {
    return (
      <Layount>
        <h2 style={{margin: '50px', textAlign: 'center'}}>You have to log in to see this page, status: {status}</h2>
      </Layount>
    )
  } else {
    return (
      <Layount>
        <ToolBar></ToolBar>
        <CollapsibleTable listOfDicts={data}></CollapsibleTable>
      </Layount>
    )
  }
}

export async function getServerSideProps(context) {
  const token = context.req?.cookies?.token
  let statusCode = null

    const {data} = await axios.get('http://127.0.0.1:8000/numiscorner_coins', {
      headers: {Authorization: `Bearer ${token}`},
      validateStatus: (status) => {

        statusCode = status
        return status < 500
      }
    })

    
  
  return {
    props: {
      data: data,
      status: statusCode
    },
  }
}