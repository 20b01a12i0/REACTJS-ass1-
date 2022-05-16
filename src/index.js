//import necessary dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './CommentBox'

const App=()=>{
  return(
    <>
    <CommentBox name="SVECW" location="bmvr" des="the best college in bmvr" />
    <CommentBox name="VIT" location="bhimavaram" des="the best college in bhimavaram"/>
    </>
  )
}


ReactDOM.render(
    <>
    
    <App />
    </>,
     document.getElementById('root')
)