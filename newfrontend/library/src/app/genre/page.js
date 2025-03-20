'use client';
import React from 'react'
import { useState } from 'react'

export default function Genre() {
  const [genrename,setGenreName]  = useState('');
  const [genres, setGenres] = useState([]); 
  const [operation,setOperation] = useState('add')
  const [genreid,setGenreId]= useState(0)

  const setGenreNameText =(event)=>{
    setGenreName(event);
    
  }
  const submitGenre=()=>{
    const genre = {
        id:Math.random(1000),
        genre_name:genrename,
        status:'ACTIVE'
    }
    console.log("1",genre);
    const tmp_genre=[...genres];
    console.log("2",tmp_genre);
    tmp_genre.push(genre)
    console.log("3",tmp_genre);
    setGenres(tmp_genre);
    console.log("4",genres);
    setGenreName('');

  }

  const getUpdateId=(id,genre_name)=>{
    setOperation('edit')
    setGenreName(genre_name)
    setGenreId(id)
  }
  const getDeleteId=(id)=>{
    const index = genres.findIndex(x => x.id ==id);
    const newgenres = [...genres]
    newgenres.splice(index, 1);
    setGenres(newgenres)
  }
  const updateGenre=()=>{
    console.log("10",genres)
    const index = genres.findIndex(x => x.id ==genreid);
    const newgenres = [...genres]

    console.log("new genres",newgenres)
    console.log(genrename)
    const editGenre ={
        id:genreid,
        genre_name:genrename,
        status:'ACTIVE'
    }
    newgenres.splice(index, 1,editGenre);
    setGenres(newgenres)
    console.log("11",genres)
    setOperation('add')
    setGenreName('')
  }
  return (
    <div className='genre-container'>
        <div className='genre-form'>
            <input 
                type='text'
                placeholder='Enter genre name here'
                value={genrename}
                onChange={(e)=>setGenreNameText(e.target.value)}
             />

             {
                operation=='add' ?   
                    <button style={{backgroundColor:"blue",color:"white"}} 
                    onClick={()=>submitGenre()}
                    >Add</button>
                :
                    <button style={{backgroundColor:"yellow",color:"black"}}
                    onClick={()=>updateGenre()}
                    >Update</button>
             }
            
        </div>
        <div className='genre-data'>
            <table style={{width:"100%"}}>
                <thead>
                    <tr>
                        <th style={{width:"5%",border:"1px solid red"}}>#</th>
                        <th style={{width:"70%",border:"1px solid red"}}>Genre Name</th>
                        <th style={{width:"25%",border:"1px solid red"}}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        genres.map((value,index) => {
                            return(
                                <tr key={index+1}>
                                    <td style={{textAlign:"center"}}>{index+1}</td>
                                    <td style={{textAlign:"center"}}>{value.genre_name}</td>
                                    <td style={{textAlign:"center"}}>
                                        <button 
                                        onClick={()=>getUpdateId(value.id,value.genre_name)}
                                        >Edit</button>
                                        <button
                                        onClick={()=>getDeleteId(value.id)}
                                        >Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                   
                </tbody>
            </table>
        </div>
    </div>
  )
}
