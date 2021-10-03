
import React, {   useState } from 'react'
import '../css/Post.css'
// import ArrowUpwardOutlinedIcon from "@material-ui/icons/ArrowUpwardOutlined";
// import ArrowDownwardOutlinedIcon from "@material-ui/icons/ArrowDownwardOutlined";
// import RepeatOutlinedIcon from "@material-ui/icons/RepeatOutlined";
// import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
// import { MoreHorizOutlined,  ShareOutlined } from "@material-ui/icons";
import { Avatar } from '@material-ui/core';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { setQuestionInfo } from '../features/QuestionSlice';
import { useSelector } from 'react-redux';
import db from "../firebase";
import { selectUser } from '../features/userSlice';
import firebase from 'firebase';



Modal.setAppElement('#root');



function Post({id,question,q_user}) {

    const [openmodal, setopenmodal] = useState(false);
    const dispatch = useDispatch()
    const user = useSelector(selectUser)
    // const questionId = useSelector(selectQuestionId);
    const [dz,setdz] = useState("");
    

   
    const handleAnswer = (e) => {
        e.preventDefault()

        db.collection('answer').add({
            solution: dz ,
            timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: user
        })
        setdz("");
        setopenmodal(false);
    };
        
      




    return (
         <div className="post"     onClick={()=>dispatch(setQuestionInfo({
            questionId: id,
            questionName: question
        }))} >
        
            <div className="post__info">
               
            <Avatar
          src={
            q_user.photo
              ? q_user.photo
              : "https://images-platform.99static.com//_QXV_u2KU7-ihGjWZVHQb5d-yVM=/238x1326:821x1909/fit-in/500x500/99designs-contests-attachments/119/119362/attachment_119362573"
          }
        />


                <h5>{q_user.displayName ? q_user.displayName:q_user.email }</h5>
                
            </div>
            <div className="post__body">
                <div className="post__question">
                    <p>{question}</p><br/>
                    <p className="warn"><i class="fas fa-exclamation-triangle"></i><small>Only Admin Can see Comments.</small></p>
                    <button onClick={()=>setopenmodal(true)} className="btn btn-success">Comment</button>

        
                    <Modal
          isOpen={openmodal}
          onRequestClose={()=>setopenmodal(false)}
          shouldCloseOnOverlayClick={false}
        >
            <div className="modal__title">
            <form>
                  <div className="mb-3">
                   <h1>{question}</h1><br/>
                   <p>{}</p>

                   <div className="modal__answer">
                       <textarea required value={dz} onChange={(e)=>setdz(e.target.value)} type="text" placeholder="Add A Comment"/>
                   </div>
                   
                  
                  </div>
                  <button onClick={handleAnswer} type="submit" className="btn btn-primary mx-2 my-2">Post</button>
                  <button type="submit" onClick={()=>setopenmodal(false)} className="btn btn-danger mx-2 my-2">Close</button>
            </form>
            </div>

        </Modal>





                </div>
                <div className="post__answer">
                  
                   
                </div>
               
            </div>
            {/* <div className="post__footer">
                <div className="post__footerAction">
                <ArrowUpwardOutlinedIcon/>
                 <ArrowDownwardOutlinedIcon />
                </div>
                <RepeatOutlinedIcon />
        <ChatBubbleOutlineOutlinedIcon />
        <div className="post__footerLeft">
          <ShareOutlined />
          <MoreHorizOutlined />
        </div>
            </div> */}
        </div>
    )
}

export default Post; 