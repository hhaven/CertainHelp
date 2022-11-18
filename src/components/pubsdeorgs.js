import React from "react";
import { db } from "../firebase";
import { getDocs, query, collection, q } from "firebase/firestore";
import { GCOP } from "./GCOP";

export class PubsDeOrgs extends React.Component{
    constructor(){
        super();
        this.state = {
            tableData: []
        }
    }
    async componentDidMount(){
        const q = query(collection(db, "pubs"));

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
            <GCOP items = {this.state.tableData} name = {this.props.name}/>
        )
    }
}