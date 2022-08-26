import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import CustomHeader from '../components/customHeader/CustomHeader'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

  const [comment, setComment] = useState('')

  const onChangeComment = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setComment(value);
  }

  return (
    <div className={styles.container}>
      여기가 어딘죠
      <div>
        <input type="text" placeholder='할 일을 입력하세요' onChange={onChangeComment} value={comment}></input>
      </div>
      <CustomHeader comment={comment}/>
    </div>
  )
}

export default Home
