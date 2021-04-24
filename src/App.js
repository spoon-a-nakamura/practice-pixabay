import styled from '@emotion/styled'
import React, { useState } from 'react'
import SearchBar from './SearchBar'
import axios from 'axios'
import ImagesList from './ImageList'

function App() {
  const [images, setImages] = useState([])
  const ApiKey = process.env.REACT_APP_PIXABAY_API_KEY
  const onSearchSubmit = async (term) => {
    try {
      const params = {
        key: ApiKey,
        q: term,
      }
      const response = await axios.get('https://pixabay.com/api/', { params })
      setImages(response.data.hits)
      if (response.data.total === 0) {
        window.alert('お探しの画像はありません。')
      }
    } catch {
      window.alert('リクエスト通信に失敗しました。')
    }
  }
  return (
    <Wrapper>
      <SearchBar onSubmit={onSearchSubmit} />
      <ImagesList images={images} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 2em;
`
export default App
