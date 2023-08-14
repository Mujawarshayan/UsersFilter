import { useState, useEffect } from 'react'

import './App.css'

function App() {
  const [Search, SetSearch] = useState("")
  const [People, SetPeople] = useState([
    {
      id: 1,
      img: "./public/img/c.PNG",
      name: "Shayan",
      userId: "aua_sabs",
      email: "bhs.gmail.com",
      number: 5496127537
    },

    {
      id: 2,
      img: "./public/img/c.PNG",
      name: "Sarah Didi",
      userId: "aua_sabs",
      email: "ehtd.gmail.com",
      number: 7548638926
    },
    {
      id: 3,
      img: "./public/img/c.PNG",
      name: "Mujeeb",
      userId: "aua_sabs",
      email: "ujsh.gmail.com",
      number: 7564852144
    },
    {
      id: 4,
      img: "./public/img/c.PNG",
      name: "Rehan",
      userId: "aua_sabs",
      email: "yudv.gmail.com",
      number: 7987145494
    },
    {
      id: 5,
      img: "./public/img/c.PNG",
      name: "Kedar",
      userId: "aua_sabs",
      email: "hbdf.gmail.com",
      number: 7515656798
    },
    {
      id: 6,
      img: "./public/img/c.PNG",
      name: "ayaan",
      userId: "aua_sabs",
      email: "jsss.gmail.com",
      number: 4786555454
    }
  ])
  const [SearchResult, setSearchResult] = useState([])


  const Result = () => {

    console.log(Search)

    const newArray = People.filter((items) => {
      return Object.values(items).join(" ").toLowerCase().includes(Search)
    })
    // console.log(newArray)
    setSearchResult(newArray)

    // else {
    //     setSearchResult(People)
    //     console.log("bb")
    // }
  }
  useEffect(() => {

    console.log(Search)
    Result()

  }, [Search])



  return (
    <>
      <div className='conatiner'>
        <h4 className='heading'>All Users</h4>
        <select className='select light-shadow'>
          <option>All users</option>
          <option>All users</option>
          <option>All users</option>
        </select>

        <input type='search' className='search light-shadow' placeholder='Quick Search' value={Search} onChange={(e) => SetSearch(e.target.value.toLowerCase())} />
        <div className='user-list light-shadow'>
          <div className='row'><div className='col col-6 head'></div><div className='col col-3 head'>Name</div>
            <div className='col col-3 head'>Email</div><div className='col col-5 head'>Number</div></div>
          {
            SearchResult.length >= 1 ?

              SearchResult.map((o, i) => {
                return (<div className='row'>
                  <div className='col col-6 values'><img src={o.img} className='user-img' /></div>
                  <div className='col col-3 values'>{o.name}<span className='user-id'>&nbsp;/&nbsp;{o.userId}</span></div>
                  <div className='col col-3 values'>{o.email}</div>
                  <div className='col col-5 values'>{o.number}</div>
                </div>
                )
              }) :
              People.map((o, i) => {
                return (<div className='row'>
                  <div className='col col-6 values'><img src={o.img} className='user-img' /></div>
                  <div className='col col-3 values'>{o.name}</div>
                  <div className='col col-3 values'>{o.email}</div>
                  <div className='col col-5 values'>{o.number}</div>
                </div>
                )
              })
          }
        </div>

      </div>
    </>
  )
}

export default App
