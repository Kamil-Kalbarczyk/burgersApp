import { PageWrapper } from "../../../common/page-wrapper"
import {useParams} from 'react-router-dom';
import { useEffect, useState } from "react";
import Avatar from '@mui/material/Avatar';
import Typography from "@mui/material/Typography"
import { CircularProgress } from "@mui/material";

export const MenuDetails = () => {

    const params = useParams();
    const [burger, setBurger] = useState(null);
    const [isLoading, setIsLoading] = useState(true)
        
    useEffect(()=>{
        fetch(`https://rest-api-b6410.firebaseio.com/burgers/${params.id}.json`)
        .then((response)=> response.json())
        .then(data => {
            setBurger(data);
            setIsLoading(false);
        })
    }, []);

    if(isLoading) {
        return (
        <PageWrapper>
            <CircularProgress/>
        </PageWrapper>
        );
    } else if (!burger) {
        return (
            <PageWrapper title='Taki burger nie istnieje. Smuteczek :('>
            </PageWrapper>
            );
    }

    return (
        <PageWrapper title={burger.name}>
            <Avatar variant={burger.url ? 'circular' : "rounded"}
            alt='burger'
            src={burger.url || 'https://cdn-icons-png.flaticon.com/512/877/877951.png'}
            sx={{width: 196, height: 196}}/>
            <Typography variant='h5' sx={{margin:'20px 0'}}>{burger.ingredients}</Typography>
            <Typography variant='h5'>{burger.price} PLN</Typography>
        </PageWrapper>
    )
}