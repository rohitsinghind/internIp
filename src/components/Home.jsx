import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Container from "@mui/material/Container";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Home(props) {

    let navigate = useNavigate()

    const [ip, setIp] = useState("")

    const fetchIp = () => {
        axios.get(`https://ipapi.co/${ip}/json`).then((res)=>{props.setData(res.data)}).then(()=>{navigate("/data")})
    }

  return (
    <>
      <Container maxWidth="sm">
        <Card sx={{ width: 300, height: 200, background:"#eaeaea",mt:20, display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center" }}>
          <Typography sx={{ fontSize: 20 }}>
            Enter your IP
          </Typography>
          <br/>
          <TextField value={ip} onChange={(e)=>{setIp(e.target.value)}} id="outlined-basic" label="IP" variant="outlined" />
          <br/>
          <Button onClick={()=>{fetchIp()}} variant="contained">Submit</Button>
        </Card>
      </Container>
    </>
  );
}
