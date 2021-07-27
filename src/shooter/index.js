import React from "react";
import {useLocation} from "react-router-dom"
import { useState,useEffect} from "react";
import {numberWithCommas,formatDate,fetchAysnc,postAysnc} from "../request/function.js";

import team3 from "../assets/images/team3.jpg";
import l1 from "../assets/images/l1.jpg";
import l2 from "../assets/images/l2.jpg";
import l3 from "../assets/images/l3.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";


const Shooter = () => {

    const [illustrations,setIllustrations] = useState([]);
    const [PaginatePages, setPaginatePages] = useState([]);
    const [formSearch,setFormSearch] = useState()
    const [onSearch,SetOnSearch] = useState(false)
    const Location = useLocation()
      
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

    useEffect(() => 
    {      
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
              360° visites
            </li>
            <li className="active">
              <span
                className="fa fa-angle-right mx-2"
                aria-hidden="true"
              ></span>{" "}
              détails shooter
            </li>
          </ul>
        </div>
      </section>

      <section className="w3l-blog post-content py-5">
        <div className="container py-lg-4 py-md-3 py-2">
          <div className="inner mb-1">
            <ul className="blog-single-author-date align-items-center">
              <li>
                <div className="listing-category">
                  <span>Profile</span>
                </div>
              </li>
              <li>
                <span className="fa fa-clock-o"></span> membre depuis : <b> {  formatDate(Location.shootingInfo.created_at)}</b>
              </li>
              <li>
                <span className="fa fa-eye"></span> 250 vues
              </li>
            </ul>
          </div>
          <div className="row">
            <div className="col-lg-8 w3l-news">
                <hr/>
                <div className="row">
                    <div className="col-sm-6">
                        <img
                            src={team3}
                            className="img-fluid"
                            alt="image"
                            style={{height:"300px",borderRadius:"5%",boxShadow:"-10px 0px 10px rgba(0,0,0,0.3)"}}
                        />
                    </div>
                    <div className="col-sm-6">
                        <div className="post-content">
                            <h2 className="title-single">
                              { Location.shootingInfo.nom} 
                            </h2>
                            <h2 className="title-single">
                              { Location.shootingInfo.prenoms}                                                          
                            </h2>
                        </div>
                        <div className="blo-singl mb-4">
                            <ul className="blog-single-author-date align-items-center">
                            <li className="mb-2 mt-2">
                                <p><b> Expérience : </b> { Location.shootingInfo.experience} </p>
                            </li>
                            <li className="mb-2">
                                <p> <b> Type d'équipements : </b> { Location.shootingInfo.type_equipement} </p>
                            </li>
                            <li className="mb-2">
                                <p><b> Prix moyen d'un shooting : </b> { numberWithCommas(Location.shootingInfo.prix)} MAD </p>
                            </li>
                            </ul>
                        </div>
                    </div>
                </div>

              <div className="blog-single-post mt-5">
                <div className="single-post-content">
                  <div className="listing-category">
                    <span>Description</span>
                  </div>
                  <hr/>
                  <p className="mb-4">
                    { Location.shootingInfo.description} 
                  </p>

                  <div className="listing-category">
                    <span>Consulter mes réalisations</span>
                  </div>  
                  <hr/> 
                  {/* List illustrations Agents */}
                  <div className="row">
                  {
                    illustrations.length == 0 ? 
                    <div className="text-center col-lg-12"> <h5> Aucun élément trouvé </h5> </div> 
                    :
                    illustrations.map((illustration,i) => 
                    (                                           
                      (i < 9) &&         
                      <div key={i} className="col-lg-4 col-md-4 listing-img mt-lg-0 pt-lg-0 mt-5 pt-md-2 mb-5">
                          <iframe src={illustration.chemin} allowFullScreen={true}
                                  style={{height:"200px",width:"100%",borderRadius:"10px 10px 0px 0px"}}></iframe>

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
                            </ul>
                          </div>  
                      </div> 
                    ))}  
                    </div> 
                    <div className="pagination-wrapper pt-lg-3 text-center">
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
                                      ( page.label == "&laquo; Previous" ? "préc." : "suiv." ) : page.label
                                    }
                                  </button>
                                }
                              </li>
                                ))
                          }            
                      </ul>              
                    </div>
                    <hr/>
                    {/* <div className="listing-category">
                      <span>Plan de Travail</span>
                    </div>   
                    <hr/>
                    <div className="listing-category">
                      <span>Outils de Modélisation</span>
                    </div>   
                    <hr/> */}
                </div> 
              </div>
            </div>

            <div className="sidebar-side col-lg-4 col-md-12 col-sm-12 mt-lg-0">
              <aside className="sidebar">
                <div className="sidebar-widget popular-posts">
                  <div className="sidebar-title">
                    <h5 style={{color:"gray"}}> Contacter </h5>
                  </div>

                  <hr/>
                  <article className="post">
                    <figure className="post-thumb text-center">
                      <p style={{backgroundColor:"green",padding:"10px",borderRadius:"50%"}}>
                        <span className="fa fa-phone text-white" style={{fontSize:"60px"}}></span>
                      </p>
                    </figure>
                    <div className="text mb-0">
                      {/* <a href="#blog-single">Company realty</a> */}
                      <div className="post-info">+(212) {Location.shootingInfo.numero}</div>
                      <div className="post-info"><a href={`mailto:${Location.shootingInfo.email}`}style={{fontSize:"15px"}}> {Location.shootingInfo.email}</a></div>
                    </div>
                  </article>
                </div>
                                  
                <div className="sidebar-widget popular-posts">
                    <div className="sidebar-title">
                      <h5 style={{color:"gray"}}>Annonces Couvert</h5>
                    </div>

                    <hr/>
                    {/* <article className="post">
                      <figure className="post-thumb">
                        <img src={l1} className="radius-image" alt="" />
                      </figure>
                      <div className="text">
                        <a href="#blog-single">
                          Why we are the best in the business
                        </a>
                        <div className="post-info">Sep 09, 2020 - 2 comments</div>
                      </div>
                    </article>

                    <article className="post">
                      <figure className="post-thumb">
                        <img src={l2} className="radius-image" alt="" />
                      </figure>
                      <div className="text">
                        <a href="#blog-single">Build your next landing page.</a>
                        <div className="post-info">Sep 09, 2020 - 2 comments</div>
                      </div>
                    </article> */}
                  </div>
              </aside>
            </div>            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shooter;
