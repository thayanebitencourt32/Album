import React, { useState, useEffect } from "react"
import { BASE_URL } from "../../constants/url"
import { useHistory } from "react-router"
import axios from "axios"

const Home = () => {
  const [data, setData] = useState([])
  const history = useHistory()

  const onClickCard = (id) => {
    goToDetailsPage(history, id)
  }

  const getMovies = () => {
    axios
      .get(
        `${BASE_URL}`
      )
      .then((res) => {
        setData(res.data.results)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getMovies()
  }, [])


  

}

export default Home