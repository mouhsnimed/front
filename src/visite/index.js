import { useState,useEffect} from "react";
import {Link} from "react-router-dom";
import team3 from "../assets/images/team3.jpg";
import "./index.css";
import {numberWithCommas,fetchAysnc,postAysnc} from "../request/function.js";

function Visite() {

    // get list of catégorie  
    const [illustrations,setIllustrations] = useState([]);
    const [PaginatePages, setPaginatePages] = useState([]);
    const [formSearch,setFormSearch] = useState()
    const [onSearch,SetOnSearch] = useState(false)
    const [contentValue,SetContentValue] = useState(0)
    const [shooters,SetShooters] = useState([])
  
    // Récupération des illustrations  
    const getIllustration = async (urlApi) => {
      const DataFromServer = await fetchAysnc(urlApi)    
      
      console.log(DataFromServer)
      if(DataFromServer.data == "error")
      {
        setIllustrations([])
      }
      else
      {
        setIllustrations(DataFromServer.data)
      }
  
      if(DataFromServer.hasOwnProperty("meta") && DataFromServer.meta.hasOwnProperty("links"))
      {
        setPaginatePages(DataFromServer.meta.links)
      }
      else
      {
        setPaginatePages([])
      }
    }
  
    // Récupération des illustrations  
    const getShooters = async (urlApi) => 
    {
      const DataFromServer = await fetchAysnc(urlApi)    
      
      console.log(DataFromServer)
      if(DataFromServer.data == "error")
      {
        SetShooters([])
      }
      else
      {
        SetShooters(DataFromServer.data)
      }
  
      if(DataFromServer.hasOwnProperty("meta") && DataFromServer.meta.hasOwnProperty("links"))
      {
        setPaginatePages(DataFromServer.meta.links)
      }
      else
      {
        setPaginatePages([])
      }
    }
  
    // Aller vers le lien de la pagination
    const gotoPage = async function(page)
    {
      if(onSearch == false)
      {
        getIllustration(page.url)
      }
      else
      {
        console.log(formSearch)
        // Récupération du résultat et formatage
        const DataFromServer = await postAysnc(page.url,formSearch) 
  
        console.log(DataFromServer)
  
        if(DataFromServer.data == "error")
        {
          setIllustrations([])
        }
        else
        {
          setIllustrations(DataFromServer.data)
        }
  
        if(DataFromServer.hasOwnProperty("meta") && DataFromServer.meta.hasOwnProperty("links"))
        {
          setPaginatePages(DataFromServer.meta.links)
        }
        else
        {
          setPaginatePages([])
        }
      }
    }    
  
    // Faire une Rechercher 
    const getSearch  = async function(e)
    {
      e.preventDefault()
      // Création des critère à transmettre via json
      const reqElement = {
        "search_text":e.target.elements.search_text.value,
      }
       
      if(reqElement.search_text != "")
      {
        SetOnSearch(true)
        setFormSearch(reqElement)
        
        // Récupération du résultat et formatage
        const DataFromServer = await postAysnc("http://localhost:8000/api/Illustration/search",reqElement) 
    
        console.log(reqElement)
        console.log(DataFromServer)
    
        if(DataFromServer.data == "error")
        {
          setIllustrations([])
        }
        else
        {
          setIllustrations(DataFromServer.data)
        }
    
        if(DataFromServer.hasOwnProperty("meta") && DataFromServer.meta.hasOwnProperty("links"))
        {
          setPaginatePages(DataFromServer.meta.links)
        }
        else
        {
          setPaginatePages([])
        }
      }
      else
      {
        console.log(reqElement)
        SetOnSearch(false)        
        getIllustration("http://localhost:8000/api/Illustration") 
      }
    }
    
    useEffect(() => 
    {      
      getIllustration("http://localhost:8000/api/Illustration") 
    },[]) 

    const voteIllus = async function(illus,likeFor) 
    { 
      // Vérifier le token user et faire passer le id_user
      illus.likeFor = likeFor
      const res = await fetch(`http://localhost:8000/api/Illustration/vote/${illus.id}`,
      {method:'PUT',
       headers : {'Content-type' : 'application/json'},
       body: JSON.stringify(illus)
      })

      const data = await res.json();
      
      setIllustrations(illustrations.map((illustration) => illustration.id === illus.id 
      ? {...illustration,vote_like:data.data.vote_like,vote_dislike:data.data.vote_dislike} : illustration))
    }

    const changeContent = function(e)
    {
      if(e.target.value == 0)
      {
        getIllustration("http://localhost:8000/api/Illustration") 
        SetContentValue(0)
      }
      else if(e.target.value == 1)
      {
        getShooters("http://localhost:8000/api/Shooter")
        SetContentValue(1)
      }    
    }

  return (
    <div>
      <section className="w3l-about-breadcrumb">
        <div className="breadcrumb-bg breadcrumb-bg-about pt-5">
          <div className="container pt-lg-5 py-3"></div>
        </div>
      </section>
      <section className="w3l-breadcrumb">
        <div className="container">
          <ul className="breadcrumbs-custom-path">
            <li>
              <a href="index.html">Accueil</a>
            </li>
            <li className="active">
              <span
                className="fa fa-angle-right mx-2"
                aria-hidden="true"
              ></span>{" "}
              Visite 360°
            </li>
          </ul>
        </div>
      </section>

      {/* Section de Recherche */}
      <section
        style={{
          backgroundColor: "rgba(0,0,0,0.07)",
          boxShadow: "0px 2px 10px rgba(0,0,0,0.2)",
          padding: "10px",
        }}
      >
        <div className="container-fluid" style={{ paddingLeft: "15%",paddingRight:"15%" }}>
          <form onSubmit={(e) => getSearch(e)}>

            <div className="input-group">
              <div className="input-group-prepend">
                <select className="form-control bg-dark text-white" 
                     style={{height:"70px",fontSize:"20px"}}  onChange={(e) => (changeContent(e))}>
                  <option className="text-white" value="0"> &#xf0ac; 360° Visites </option>                  
                  <option className="text-white" value="1"> &#xf21d; Shooters </option>
                </select>
              </div>
              <input type="text" 
                     className="form-control"
                     placeholder="Rechercher..."
                     style={{width:"80%",height:"70px",fontSize:"20px",fontFamily:"calibri light",padding:"25px"}}
                     name="search_text"/>
              <div className="input-group-append" style={{width:"20%"}}>
                <button className="btn btn-primary" type="submit"
                        style={{width:"100%",height:"70px",borderRadius:"0 50px 50px 0"}}>
                    <span
                      className="fa fa-search"
                      style={{ color: "white", fontSize: "20px"}}
                    ></span>
                </button>
              </div>
            </div>

          </form>
        </div>
      </section>

      {/* Zone d'affichage des éléments */}
      <section className="locations-1" id="locations">
        <div className="locations py-5">
          <div className="container py-lg-5 py-md-4 py-2">
            { contentValue == 0 ?
            <div className="row">   
              {
                illustrations.length == 0 ? 
                <div className="text-center col-lg-12"> <h5> Aucun élément trouvé </h5> </div> 
                :
                illustrations.map((illustration,i) => 
                (                                           
                  (i < 9) &&         
                  <div key={i} className="col-lg-4 col-md-6 listing-img mt-lg-0 pt-lg-0 mt-5 pt-md-2 mb-5">
                      <iframe height="400px" width="100%" src={illustration.chemin} allowFullScreen={true}></iframe>

                      <div className="listing-details blog-details align-self bg-primary" 
                           style={{opacity:"0.9"}}>
                        <ul className="estate-info">
                          <li style={{color:"white"}}>
                            <a type="button" onClick={() => (voteIllus(illustration,true))}>
                              <span className="fa fa-heart" style={{color:"white"}}></span> {illustration.vote_like} 
                            </a>
                          </li>
                          <li style={{color:"white"}}>
                            <a type="button" onClick={() => (voteIllus(illustration,false))}>
                              <span className="fa fa-thumbs-down" style={{color:"white"}}></span> {illustration.vote_dislike} 
                            </a>
                          </li>
                          <li style={{color:"white"}}>
                            <span className="fa fa-eye" style={{color:"white"}}></span> {illustration.superficie} 200
                          </li>
                        </ul>
                        <div className="author align-items-center mt-1">
                          <a href="#img" className="comment-img">
                            <img src={team3} alt="" className="img-fluid" />
                          </a>
                          <ul className="blog-meta">
                            <li>                            
                              <Link to={{pathname: '/shooters-details',shootingInfo:illustration}}                              
                                style={{color:"white"}}> 
                                <span> {illustration.prenoms} </span>   
                                <br/><span style={{fontSize:"12px",fontStyle:"italic"}}> (consulter le profile) </span>                                
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>  
                  </div> 
                ))}                                     
            </div>
            : 
            <div className="row"> 
            {
              shooters.length == 0 ? <div className="text-center col-lg-12"> <h5> Aucun élément trouvé </h5> </div> 
              : 
              shooters.map((shooter,i) =>
                (
                <div key={shooters.id_shooter} className="col-lg-5 col-md-5 listing-img mt-lg-0 pt-lg-0 mt-5 pt-md-2 mb-5">
                  <div className="listing-details blog-details align-self bg-primary" 
                        style={{opacity:"0.9",borderRadius:"0px"}}>
                    <Link to={{pathname: '/shooters-details#',shootingInfo:shooter}}                             
                      style={{color:"white"}}> 
                    <div className="author align-items-center mt-1">
                      <a href="#img" className="comment-img">
                        <img src={team3} alt="" className="img-fluid" />
                      </a>
                      <ul className="blog-meta">
                        <li>                            
                            <span> {shooter.nom} {shooter.prenoms}  </span>   
                            <hr style={{backgroundColor:"white"}}/>
                            <div style={{fontSize:"12px",fontStyle:"italic"}}> 
                                <ul className="estate-info">
                                  <li style={{color:"white",fontSize:"12px"}}>
                                      <span className="fa fa-eye" style={{color:"white"}}></span> 300
                                  </li>
                                  <li style={{color:"white",fontSize:"12px"}}>
                                      <span className="fa fa-globe" style={{color:"white"}}></span>300
                                  </li>
                                  <li style={{color:"white",fontSize:"12px"}}>
                                      <span className="fa fa-tasks" style={{color:"white"}}></span>300
                                  </li>
                                  <li style={{color:"white",fontSize:"12px"}}>
                                      <span className="fa fa-dollar" style={{color:"white"}}></span>{ numberWithCommas(shooter.prix)} MAD
                                  </li>
                                </ul>
                            </div>                                 
                        </li>
                      </ul>
                    </div>
                    </Link>
                  </div>
                  <div style={{width:"100%",height:"35px",paddingTop:"4px",backgroundColor:"white",borderRadius:"0px 0px 10px 10px",boxShadow:"1px 0px 10px rgba(0,0,0,0.2)"}} 
                        className="text-center">
                    <Link to={{pathname: '/shooters-details',shootingInfo:shooter}}>
                       Consulter le profile
                    </Link>  
                  </div>
              </div>   
              ))}         
            </div>
            }

            <div className="pagination-wrapper mt-5 pt-lg-3 text-center">
              <ul className="page-pagination">
                  {
                    illustrations.length != 0 && 
                    PaginatePages.map((page) => (
                      <li key={page.label}>
                        {
                          page.active ? 
                          <span aria-current="page" className="page-numbers current ml-1"  
                                style={{boxShadow:"1px 0px 5px black inset"}}>
                            {page.label}
                          </span>                          
                          :   
                          page.url &&    
                          <button type="button" onClick={(e) => (gotoPage(page))}
                                  className="page-numbers ml-1"
                                  style={{boxShadow:"1px 0px 5px black inset"}}>
                            {
                              (page.label == "&laquo; Previous" || page.label == "Next &raquo;" ) ? 
                              ( page.label == "&laquo; Previous" ? "précédent" : "Suivant" ) : page.label
                            }
                          </button>
                        }
                      </li>
                        ))
                  }            
              </ul>              
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Visite;
