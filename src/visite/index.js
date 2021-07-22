import { useState,useEffect} from "react";
import {Link} from "react-router-dom";

import p1 from "../assets/images/p1.jpg";
import team3 from "../assets/images/team3.jpg";

const fetchAysnc = async (api) => {
  const res = await fetch(api,{
    method:"GET",
  })

  const data = await res.json()
  return data
}

const postAysnc = async (api,dataEntry) => {
  const res = await fetch(api,{
    method:"POST",
    headers : { 'Content-type' : 'application/json'},
    body: JSON.stringify(dataEntry) 
  })

  const data = await res.json()
  return data
}


function numberWithCommas(x=null) {
  if(x != null)
  {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }
  else
  {
    return "";
  }
}

function Visite() {

    // get list of catégorie  
    const [illustrations,setIllustrations] = useState([]);
    const [searchMax,setSearchMax] = useState(false);
    const [PaginatePages, setPaginatePages] = useState([]);
    const [formSearch,setFormSearch] = useState()
    const [onSearch,SetOnSearch] = useState(false)
  
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
        "type_illustration":e.target.elements.type_illustration.value,
        "categorie_illustration_id":e.target.elements.categorie_illustration.value,
        "superficie1":e.target.elements.superficie1.value,
        "superficie2":e.target.elements.superficie2.value,
        "prix1":e.target.elements.prix1.value,
        "prix2":e.target.elements.prix2.value,
        "ville":e.target.elements.ville.value,
        "searchMAx":false        
      }
  
      // ajout des criteres de recherche max
      if(searchMax)
      {
        reqElement.nombre_chambre = e.target.elements.nbChambre.value
        reqElement.nombre_bain = e.target.elements.nbSalleBain.value
        reqElement.nombre_salon = e.target.elements.nbSalon.value
        reqElement.etage = e.target.elements.niveauEtage.value    
        reqElement.meuble = e.target.elements.estMeuble.value    
        reqElement.searchMAx = true  
      }
  
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
    
  
    useEffect(() => {      
      getIllustration("http://localhost:8000/api/Illustration") 
    },[]) 



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

      
      {/* Zone d'affichage des éléments */}
      <section className="locations-1" id="locations">
        <div className="locations py-5">
          <div className="container py-lg-5 py-md-4 py-2">
            <div className="row">   
              {
                illustrations.length == 0 ? 
                <div className="text-center col-lg-12"> <h5> Aucun élément trouvé </h5> </div> 
                :
                illustrations.map((illustration,i) => 
                (                                           
                  (i < 9) &&         
                  <div key={illustration.id} className="col-lg-4 col-md-6 listing-img mt-lg-0 pt-lg-0 mt-5 pt-md-2 mb-5">
                    <a href="#url">
                      <div className="box16">
                        <div className="rentext-listing-category">
                          {/* <span> Visiter </span>  */}
                         <span class="fa fa-play-circle-o"  style={{fontSize:"40px"}} aria-hidden="true"> </span>
                        </div>
                        <img className="img-fluid" src={p1} alt=""  style={{height:"400px"}}/>
                        <div className="box-content" style={{position:"absolute"}}>

                          <div class="row">
                            <div className="listing-details blog-details align-self" 
                                 style={{backgroundColor:"transparent"}}>
                              <ul className="estate-info">
                                <li style={{color:"white"}}>
                                  <span className="fa fa-thumbs-up" style={{color:"white"}}></span> {illustration.vote_like} 
                                </li>
                                <li style={{color:"white"}}>
                                  <span className="fa fa-thumbs-down" style={{color:"white"}}></span> {illustration.vote_dislike} 
                                </li>
                                <li style={{color:"white"}}>
                                  <span className="fa fa-commenting-o" style={{color:"white"}}></span> {illustration.superficie} 200
                                </li>
                              </ul>
                              <div className="author align-items-center mt-1">
                                <a href="#img" className="comment-img">
                                  <img src={team3} alt="" className="img-fluid" />
                                </a>
                                <ul className="blog-meta">
                                  <li>
                                    <a href="#url" style={{color:"white"}}>Laura Antiochus </a>
                                  </li>
                                </ul>
                              </div>
                            </div>                            
                          </div> 
                          <div class="row">
                            <h3 className="title"> {illustration.titre}  </h3>                            
                          </div> 

                        </div>
                      </div>
                    </a>
                  </div>   
                ))}                                     

            </div>

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
