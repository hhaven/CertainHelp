import React from "react";
import { ref, onValue, doc, getDoc } from 'firebase/database';
import { Table, Row } from "react-bootstrap";
import { render } from "@testing-library/react";
import { getDatabase } from "firebase/database";
import { db } from "../firebase";
import { getDocs, query, collection, q } from "firebase/firestore";
import { GridCards } from "../components/GridCards";

export class Orgs extends React.Component{
    constructor(){
        super();
        this.state = {
            tableData: []
        }
    }
    async componentDidMount(){
        const q = query(collection(db, "test"));

        getDocs(q).then((snapshot)=>{
          console.log(snapshot.docs)  
          let records = [];
            snapshot.forEach((doc)=>{
                records.push({"key": doc.id, "data":doc.data()});
            });
            this.setState({tableData: records});
          
        })
    }
    render(){
        return(
            <GridCards items = {this.state.tableData}/>
        )
    }
}