import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Menu from 'components/Menu'

import Element from 'containers/Element'

const baseUrl = process.env.REACT_APP_BASE_URL
const apiKey = process.env.REACT_APP_API_KEY

const App: React.FC = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        const load = async function() {
            const result = await axios.get(`${baseUrl}/movie/upcoming?api_key=${apiKey}&language=en-US`)
            setData(result.data.results)
        }

        load()
    }, [])
    return (
        <div>
            <Menu />
            {data[0] && <Element movie={data[0]}/>}
        </div>
    )
}

export default App;
