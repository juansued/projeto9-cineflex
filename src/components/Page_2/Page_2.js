
import styled from "styled-components";

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import axios from "axios";

import loading from "../../assets/loading.jpeg"
import Main from "../Main/Main";
import Sessions from "../Sessions/Session";
import Footer from "../Footer/Footer";
// import components






// função que renderiza a página_2 (escolher sessão)
export default function Page_2() {




    const [sessionsDaysAPI, setSessionsDaysAPI] = useState(null);

    const [sessionsObjectAPI, setSessionsObjectAPI] = useState({});

    const { idfilm } = useParams();

    useEffect(() => {




        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idfilm}/showtimes`);

        promise.then(response => {

            setSessionsDaysAPI([...response.data.days])
            setSessionsObjectAPI({ ...response.data })
        })

    }, [idfilm]
    )




    return (
        <>
            {sessionsDaysAPI === null ? <img src={loading} alt=""></img> : <>

                <Main>

                    <TitlePage>
                        Selecione a sessão
                    </TitlePage>

                    <Sessions days={sessionsDaysAPI} />
                </Main>

                <Footer>
                    <BannerClass> <img src={sessionsObjectAPI.posterURL} alt="" /> </BannerClass>
                    <h2> {sessionsObjectAPI.title}</h2>
                </Footer>
            </>
            }



        </>
    )
}

const BannerClass = styled.div`


    border: none;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px 2px #0000001a;
    border-radius: 3px;
    padding: 4px;
    width: 64px;
    height: 89px;
  
   

img {
    height: 100%;
    width: 100%;


}`;

const TitlePage = styled.h1`


`;