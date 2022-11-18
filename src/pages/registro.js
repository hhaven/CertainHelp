import React, { useState, useEffect } from 'react';
import { db } from "../firebase";
import firebase from 'firebase/compat/app';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc, setDoc } from 'firebase/firestore';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

import { TestData } from '../components/test';


export const Registrop = () => {
  
  const [userInfo, setuserInfo] = useState({
    title: '',
    type: '',
  });
  const onChangeValue = (e) => {
    setuserInfo({
      ...userInfo,
      [e.target.name]:e.target.value
    });
  } 
 

  const [isfile, setFile] = useState(null);
  const handleImageAsFile = (e) => {
    setFile(e.target.files[0]);
  }

{/* Insert ------------------------------------------- */}
  const addlist = async(event) => {
    try {
      event.preventDefault();
      let file = isfile;

      const storage = getStorage();
      var storagePath = 'uploads/' + file.name;

      const storageRef = ref(storage, storagePath);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on('state_changed', (snapshot) => {
        // progrss function ....
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
      }, 
      (error) => { 
        // error function ....
        console.log(error);
      }, 
      () => {
        // complete function ....
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          console.log('File available at', downloadURL);
          await addDoc(collection(db, "test"), {
            title: userInfo.title,
            type: userInfo.type,
            images: downloadURL
          });
          setuserInfo({
            ...userInfo,
              title:'',
              type: '',
          });
          setFile(null);
        });
      });
    } catch (error) { throw error;}  
  };

  

  return (<>
    <div className="App">
      <div className="wrapper">
        {/* Insert users -------------------------------------------*/}
        <form onSubmit={addlist}>
          <input type="text" id="title"  name="title" value={userInfo.title} onChange={onChangeValue} placeholder=" Title " required />
          <select name="type" id="type" value={userInfo.type} onChange={onChangeValue} required>
            <option value="animales">Animales</option>
            <option value="niños">Niños</option>
            <option value="medioambiente">Medio Ambiente</option>
            <option value="enfermedades">Enfermedades</option>
            <option value="otros">Otros</option>
          </select>
          <input type="file" accept=".png, .jpg, .jpeg" onChange={handleImageAsFile}/>
          <button type="submit" className="btn__default btn__add" > Upload </button>  
        </form>
      </div>
      {/* Fetch users ------------------------------------------------*/}
      <TestData/>
    </div>
  </>)
}