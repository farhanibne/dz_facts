import { Avatar} from '@material-ui/core'
import React, { useState } from "react";
import '../css/Navbar.css'
import db, { auth } from "../firebase";
// import LanguageIcon from '@material-ui/icons/Language'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import  Modal  from 'react-modal';
import { PeopleAltOutlined} from '@material-ui/icons';
import firebase from 'firebase';


function Navbar() {
  const user = useSelector(selectUser);
  const [openmodal,setopenmodal] = useState(false);
  const [input, setinput] = useState("")
 
  const handleQuestion = (e)=>{
    e.preventDefault()

    setopenmodal(false)
   

    db.collection('questions').add({
      question: input,
      timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: user
    })
    setinput("");
  }

  
    return (
        
   
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">DZ Facts</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="/"><i className="fas fa-home"></i></a>
        </li>
        <li className="nav-item">
            <a className="nav-link " aria-current="page" href="/"><i className="fas fa-server"></i></a>
          </li>
          <li className="nav-item">
            <a className="nav-link " aria-current="page" href="/"><i className="fas fa-check-square"></i></a>

          </li>
          <li className="nav-item">
            <a className="nav-link " aria-current="page" href="/"><i className="fas fa-user-friends"></i></a>
          </li>
          <li className="nav-item">
            <a className="nav-link " aria-current="page" href="/"><i className="fas fa-bell"></i></a>
          </li>
        
       
      </ul>
      */}
      <div className="qheader__rem">
        <div className="qheader__avater">
        <Avatar
            onClick={() => auth.signOut()}
            className="Avatar"
            src={
              user.photo
                ? user.photo
                : "https://images-platform.99static.com//_QXV_u2KU7-ihGjWZVHQb5d-yVM=/238x1326:821x1909/fit-in/500x500/99designs-contests-attachments/119/119362/attachment_119362573"
            } />
        </div>
        
        {/* <LanguageIcon/> */}
        <button  onClick = {()=>setopenmodal(true)} className="btn btn-outline-primary mx-3 my-3" type="submit">Add Fact</button>
        <Modal
          isOpen={openmodal}
          onRequestClose={()=>setopenmodal(false)}
          shouldCloseOnOverlayClick={false}
        >
            <div className="modal__title">
            <form>
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label mx-1 my-1">Add Fact</label>
                    
                    <hr/>
                    <Avatar className="avater"
                            src={user.photo}/>
                    <p>{user.displayName ? user.displayName : user.email}</p>
                    <div className="modal__scope">
                      <PeopleAltOutlined/>
                      <p className="abc">Public</p>
                      
                    </div>
                    <br/>
                    <input 
                    required
                    value={input}
                    onChange={(e)=>setinput(e.target.value)}
                    type="text" placeholder="add ask" className="form-control" rows="40" id="text" aria-describedby="emailHelp"/>
                   
                    <div id="emailHelp" className="form-text"></div>
                  </div>
                  <button onClick={handleQuestion} type="submit" className="btn btn-primary mx-2 my-2">Add Fact</button>
                  <button type="submit" onClick={()=>setopenmodal(false)} className="btn btn-danger mx-2  my-2">Close</button>
            </form>
            </div>

        </Modal>
            
    </div>
    </div>
      
  </div>
</nav>
    
  
    )
}

export default Navbar;
