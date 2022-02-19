import React from 'react'
import { filterWords } from './filter'

export default function RenderWords(props) {
    let Words = filterWords(props.dict)
    let croppedWords = Words.length > 5 ? Words.slice(0,6) : Words
  return (
        <>
            <div>
                <p>Suggested words</p>
            </div>
            <div>
                {
                croppedWords.map((word) => <p key={word}>{word}</p>)
                }
            </div>
        </>
  )
}
